var selectedRow = null

function onFormSubmit() {
    var formData = readFormData();
        if (selectedRow == null)
            insertNewRecord(formData);
        else
            updateRecord(formData);
        resetForm();
}
function readFormData() {
    var formData = {};
    formData["username"] = document.getElementById("username").value;
    formData["email"] = document.getElementById("email").value;
    return formData;
}
document.getElementById("submit").addEventListener('click',function(e){
    e.preventDefault();
    valid();
}) 

function insertNewRecord(data) {
    var table = document.getElementById("table2").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.username;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.email;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = `<button type="submit" class="btn btn-primary" onClick="onEdit(this)"> Edit </button>`;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = `<button type="submit" class="btn btn-danger" onClick="onDelete(this)"> Delete </button>`;
}

function resetForm() {
    document.getElementById("username").value = "";
    document.getElementById("email").value = "";
    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("username").value = selectedRow.cells[0].innerHTML;
    document.getElementById("email").value = selectedRow.cells[1].innerHTML;
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.username;
    selectedRow.cells[1].innerHTML = formData.email;
}

function onDelete(td) {
    if (confirm('Are you sure to delete this record ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("table2").deleteRow(row.rowIndex);
        resetForm();
    }
}
function valid(){
    var username = document.getElementById("username");
    var email = document.getElementById("email");
    var form = document.getElementById("form");
    var x = document.form.name.value;
    var username = document.form.email.value;

        if(username==null || username ==""){
            document.getElementById("small1").innerText = "Invalid Name";
            document.getElementById("username").style.border = "1px solid red";
        }else{
            document.getElementById("username").style.border = "1px solid green";
            document.getElementById("small1").innerText = "";    
            return onFormSubmit();
        }
        if(x==null || x==""){
            document.getElementById("email").style.border = "1px solid red";
            document.getElementById("small2").innerText = "Invalid Email id";
        }else{
            document.getElementById("email").style.border = "1px solid green";
            document.getElementById("small2").innerText = "";
            return onFormSubmit();
        }
    }


