let downloadedList = {}

function addRow() {
    // Find a <table> element with id="vocabList":
    let table = document.getElementById("vocabList");
    let word = document.getElementById("Word").value;
    let definition = document.getElementById("Definition").value;

    let index = "a" + Math.random().toString(36).slice(2);

    // Create an empty <tr> element and add it to the 1st position of the table:
    let row = table.insertRow(-1);
    row.id = index;

    // Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);

    cell3.classList.add("button-cell")
    // Add some text to the new cells:
    cell1.innerHTML = word;
    cell2.innerHTML = definition;

    cell3.innerHTML = '<input type="button" value="X" class="btn btn-danger btn-sm w-50 text-center text-fix" onclick="deleteRow(' + index + ')"/>';

    downloadedList[index] = [word, definition]

    console.log(downloadedList)
}

function deleteRow(row)  {   

    delete downloadedList[row.id]

    row.parentNode.removeChild(row);
}

function download() {

    var filename = prompt("Enter File Name", "untitled");

    while (filename == null) {
        filename = prompt("Enter File Name", "error name not found");
    }

    console.log(downloadedList)

    var text = JSON.stringify(downloadedList)

    console.log (text)

    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename + ".json");
  
    element.style.display = 'none';
    document.body.appendChild(element);
  
    element.click();
  
    document.body.removeChild(element);
  }