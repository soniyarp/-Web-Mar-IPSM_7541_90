let selectRow = null;

function onFormSubmit() {
  let formData = readFormData();
  if (selectRow == null) insertNewRecord(formData);
  else updateRecord(formData);
  resetForm();
}
// Getting value from User-----------------------------------------------------
function readFormData() {
  var formData = {};
  formData["name"] = document.getElementById("name").value;
  formData["email"] = document.getElementById("email").value;
  formData["mobile"] = document.getElementById("mobile").value;
  formData["salary"] = document.getElementById("salary").value;
    console.log(formData);
  return formData;
}

// Inserting & Showing Record in Another Table-----------------------------------------------
function insertNewRecord(data) {
  let table = document
    .getElementById("empList")
    .getElementsByTagName("tbody")[0];
  let newRow = table.insertRow(table.length);
  cell1 = newRow.insertCell(0);
  cell1.innerHTML = data.name;
  cell2 = newRow.insertCell(1);
  cell2.innerHTML = data.email;
  cell2 = newRow.insertCell(2);
  cell2.innerHTML = data.mobile;
  cell3 = newRow.insertCell(3);
  cell3.innerHTML = data.salary;
  cell4 = newRow.insertCell(4);
  cell4.innerHTML = `<a onclick="onEdit(this)">Edit</a>`;
  cell5 = newRow.insertCell(5);
  cell5.innerHTML = `<a onclick="onDelete(this)">Delete</a>`;
}

// Reseting Form---------------------------------------------------------------------------
function resetForm() {
  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("mobile").value = "";
  document.getElementById("salary").value = "";
  document.getElementById("pass").value = "";
  selectRow = null;
}
// Editing Record ----------------------------------------------------------------------------

function onEdit(td) {
  selectRow = td.parentElement.parentElement;
  document.getElementById("name").value = selectRow.cells[0].innerHTML;
  document.getElementById("email").value = selectRow.cells[1].innerHTML;
  document.getElementById("mobile").value = selectRow.cells[2].innerHTML;
  document.getElementById("salary").value = selectRow.cells[3].innerHTML;
}

// Update Record-----------------------------------------------------------------------------
function updateRecord(formData) {
  selectRow.cells[0].innerHTML = formData.name;
  selectRow.cells[1].innerHTML = formData.email;
  selectRow.cells[2].innerHTML = formData.mobile;
  selectRow.cells[3].innerHTML = formData.salary;
}

// Dleteing Record--------------------------------------------------------------------------
function onDelete(td) {
  if (confirm("Are you want to delete this record ?")) {
    row = td.parentElement.parentElement;
    document.getElementById("empList").deleteRow(row.rowIndex);
    resetForm();
  }
}
