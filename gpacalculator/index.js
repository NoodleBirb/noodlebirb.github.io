

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

    console.log(localStorage);

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
        let obj;
        if (weighted === "W") {
            obj = gradeValuesWeighted.find(({ grade }) => grade === setGrade);
        }
        else {
            obj = gradeValuesUnweighted.find(({ grade }) => grade === setGrade);
        }
        let num = parseFloat(obj.value);

        // Check for type of class and assign a bonus weight based upon it
        if (weighted === "W") {

            let type = table.rows[i].value;
            console.log(type);
            if (type === "H") num += 0.5;
            else if (type === "AP") num += 1.0;
        }
        
        // add the value found to num
        total += num;
    }
    setGPA(Math.round((total / (count - 1) + Number.EPSILON) * 100) / 100);
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

    // Add some text to the new cells:
    cell1.innerHTML = glass;
    cell2.innerHTML = letter;
    cell3.innerHTML = typeClass;
    cell4.innerHTML = '<input type="button" value="X" onclick="deleteRow(' + index + ')"/>';

    let storedArray = [cell1.innerHTML, cell2.innerHTML, cell3.innerHTML, cell4.innerHTML, index];

    localStorage.setItem(index, JSON.stringify(storedArray));
    calcGPA();
}

function deleteRow(rowid)  {   
    rowid.parentNode.removeChild(rowid);

    localStorage.removeItem(rowid.id);
    calcGPA();
}

function onOpen() {
    // Find a <table> element with id="classList":
    var table = document.getElementById("classList");

    let allKeys = Object.keys(localStorage);

    for (let i = 0; i < allKeys.length; i++) {
        var row = table.insertRow(-1); // Insert a new row
        

        var storedArray = JSON.parse(localStorage.getItem(allKeys[i])); // Acquire the array of data from localStorage

        // Insert all the cells into the row
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);

        // Assign values to each of the cells
        cell1.innerHTML = storedArray[0];
        cell2.innerHTML = storedArray[1];
        cell3.innerHTML = storedArray[2];
        cell4.innerHTML = storedArray[3];

        // Give the row an ID and a Value based on data from the "storedArray"
        row.id = storedArray[4];
        row.value = storedArray[2];
    }

    calcGPA();
}
