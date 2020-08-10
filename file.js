
// Change name of title News
function changeTitle(item) {
    document.getElementById("title-news").innerHTML = "Mi Noticia " + item;
}


function addRowTable() {
    event.preventDefault();


    let tableExample = document.getElementById("tableId");

    let row = tableExample.insertRow();

    var nameCell = row.insertCell(0);
    var surnameCell = row.insertCell(1);
    var telephoneCell = row.insertCell(2);
    var dniCell = row.insertCell(3);
    var sportsCell = row.insertCell(4);

    var name = document.getElementById("name");
    var surName = document.getElementById("surname");
    var telephone = document.getElementById("telephone");
    var dni = document.getElementById("numberIdentity");


    nameCell.appendChild(document.createTextNode(name.value));
    surnameCell.appendChild(document.createTextNode(surName.value));
    telephoneCell.appendChild(document.createTextNode(telephone.value));
    dniCell.appendChild(document.createTextNode(dni.value));





}