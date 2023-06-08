

const gradeValuesWeighted = [
    {"value": "4.3", grade: "A+"}, 
    {"value": "4.0", grade: "A"}, 
    {"value": "3.7", grade: "A-"}, 
    {"value": "3.3", grade: "B+"}, 
    {"value": "3.0", grade: "B"}, 
    {"value": "2.7", grade: "B-"}, 
    {"value": "2.3", grade: "C+"}, 
    {"value": "2.0", grade: "C"}, 
    {"value": "1.7", grade: "C-"},
    {"value": "1.3", grade: "D+"},
    {"value": "1.0", grade: "D"},
    {"value": "0.7", grade: "D-"},
    {"value": "0.0", grade: "F"}];

const gradeValuesUnweighted = [
    {"value": "4.0", grade: "A+"}, 
    {"value": "4.0", grade: "A"}, 
    {"value": "3.7", grade: "A-"}, 
    {"value": "3.3", grade: "B+"}, 
    {"value": "3.0", grade: "B"}, 
    {"value": "2.7", grade: "B-"}, 
    {"value": "2.3", grade: "C+"}, 
    {"value": "2.0", grade: "C"}, 
    {"value": "1.7", grade: "C-"},
    {"value": "1.3", grade: "D+"},
    {"value": "1.0", grade: "D"},
    {"value": "0.0", grade: "D-"},
    {"value": "0.0", grade: "F"}];

const validLetters = ["A+", "A", "A-", "B+", "B", "B-", "C+", "C", "C-", "D+", "D", "D-", "F"];
const validType = ["H", "AP", "A"];


function setGPA(val) {
    if (isNaN(val)) {
        val = "?";
    }
    var text = document.getElementById("GPA");
    text.innerHTML = "GPA: " + val;
}

function calcGPA() {

    var table = document.getElementById("classList");
    
    if (table.rows.length - 1 == 0) {
        setGPA(NaN);
        return null;
    }

    var total = 0.0;
    var count = table.rows.length;

    for (let i = 1; i < count; i++) {

        let weighted = document.getElementById("wOrUw").value;


        // acquire value associated with grade and set it to a value
        let setGrade = table.rows[i].cells[1].innerHTML;
        var num = 0.0;
        
        if (weighted === "W") {
            var obj = gradeValuesWeighted.find(({ grade }) => grade === setGrade);
        }
        else {
            var obj = gradeValuesUnweighted.find(({ grade }) => grade === setGrade);
        }

        try {
            num = parseFloat(obj.value);
        } catch (TypeError) {}

        // Check for type of class and assign a bonus weight based upon it
        if (weighted === "W") {

            let type = table.rows[i].value;
            if (type === "H") num += 0.5;
            else if (type === "AP") num += 1.0;
        }
        
        // add the value found to num
        total += num;
    }
    setGPA(Math.round((total / (count - 2) + Number.EPSILON) * 100) / 100);
}

function addRow() {
    // Find a <table> element with id="classList":
    var table = document.getElementById("classList");
    var typeClass = document.getElementById("classType").value
    var glass = document.getElementById("class").value;
    var letter = document.getElementById("letter").value;

    if (!validLetters.includes(letter)) {
        return null;
    }
    if (!validType.includes(typeClass)) {
        return null;
    }
    var index = "a" + Math.random().toString(36).slice(2);
    // Create an empty <tr> element and add it to the 1st position of the table:
    var row = table.insertRow(-1);
    row.id = index;
    row.value = typeClass;

    // Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);

    cell4.classList.add("button-cell")
    // Add some text to the new cells:
    cell1.innerHTML = glass;
    cell2.innerHTML = letter;
    if (typeClass === "H") {
        cell3.innerHTML = "Honors";
    }
    else if (typeClass === "AP") {
        cell3.innerHTML = "AP/DE";
    }
    else if (typeClass === "A") {
        cell3.innerHTML = "Academic";
    }
    else {
        cell3.innerHTML = "Error Setting Class";
    }
    cell4.innerHTML = '<input type="button" value="X" class="btn btn-danger btn-sm w-50" onclick="deleteRow(' + index + ')"/>';

    let storedArray = [cell1.innerHTML, cell2.innerHTML, row.value, cell4.innerHTML, index];

    if (getCookie("data") != "") {
        currentData = getCookie("data") // Get data stored in cookie
        cookieValue = JSON.parse(currentData) // parse the data

        cookieValue.push(storedArray)

        setCookie("data", JSON.stringify(cookieValue), 10000)
    }

    else {
        arr = [storedArray]
        setCookie ("data", JSON.stringify(arr), 10000)
    }

    calcGPA();
}

function deleteRow(rowid)  {   
    rowid.parentNode.removeChild(rowid);

    // Parse the cookie data
    let allData = JSON.parse(getCookie("data"))

    for (let i = 0; i < allData.length; i++) {
        // Find the row that matches the id and remove it via splicing.
        if (allData[i][4] === rowid.id) {
            allData.splice(i, 1)
            setCookie("data", JSON.stringify(allData), 10000)
        }
    }
    calcGPA();
}

function onOpen() {
    // Find a <table> element with id="classList":
    var table = document.getElementById("classList");

    // get the 2D array object from the cookie
    let allData = JSON.parse(getCookie("data"))

    for (let i = 0; i < allData.length; i++) {
        let row = table.insertRow(-1); // Insert a new row
        
        // acquire one row from the parsed cookie
        let storedArray = allData[i]
        // Insert all the cells into the row
        let cell1 = row.insertCell(0);
        let cell2 = row.insertCell(1);
        let cell3 = row.insertCell(2);
        let cell4 = row.insertCell(3);

        cell4.classList.add("button-cell")

        let typeClass = storedArray[2]

        // Assign values to each of the cells
        cell1.innerHTML = storedArray[0];
        cell2.innerHTML = storedArray[1];
        if (typeClass === "H") {
            cell3.innerHTML = "Honors";
        }
        else if (typeClass === "AP") {
            cell3.innerHTML = "AP/DE";
        }
        else if (typeClass === "A") {
            cell3.innerHTML = "Academic";
        }
        else {
            cell3.innerHTML = "Error Setting Class";
        }
        cell4.innerHTML = storedArray[3];

        // Give the row an ID and a Value based on data from the "storedArray"
        row.id = storedArray[4];
        row.value = storedArray[2];
    }

    calcGPA();
}


// W3 schools magic
function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

// W3 schools magic x2
function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
}