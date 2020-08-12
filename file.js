
// Change name of title News
function changeTitle(item) {
    document.getElementById("title-news").innerHTML = "Mi Noticia " + item;
}

// Add new row when submit
function addRowTable() {
    event.preventDefault();

    let tableExample = document.getElementById("tableId");

    let row = tableExample.insertRow();

    let nameCell = row.insertCell(0);
    let surnameCell = row.insertCell(1);
    let telephoneCell = row.insertCell(2);
    let dniCell = row.insertCell(3);
    let sportsCell = row.insertCell(4);

    let name = document.getElementById("name");
    let surName = document.getElementById("surname");
    let telephone = document.getElementById("telephone");
    let dni = document.getElementById("numberIdentity");

    nameCell.appendChild(document.createTextNode(name.value));
    surnameCell.appendChild(document.createTextNode(surName.value));
    telephoneCell.appendChild(document.createTextNode(telephone.value));
    dniCell.appendChild(document.createTextNode(dni.value));
    sportsCell.appendChild(document.createTextNode(getSports()));

    nameCell.classList.add("table-content");
    surnameCell.classList.add("table-content");
    telephoneCell.classList.add("table-content");
    dniCell.classList.add("table-content");
    sportsCell.classList.add("table-content");

}

// Get sportsList from checkbox list
function getSports() {
    let sportList = "";

    let checkboxesValues = [];
    const checkboxes = document.querySelectorAll('input[type=checkbox][name=sports]:checked')

    for (var i = 0; i < checkboxes.length; i++) {
        checkboxesValues.push(checkboxes[i].value)
    }

    sportList =  checkboxesValues.join(", ");
  
    return sportList;
} 