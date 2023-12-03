
console.log('JS FILE LOADED')

const form = document.querySelector('form')

function addNewDate(event) {
    event.preventDefault();
    const firstName = document.getElementById("firstNameInput").value;
    const lastName = document.getElementById("lastNameInput").value;
    const id = document.getElementById("idInput").value;
    const title = document.getElementById("titleInput").value;
    const annualsalary = document.getElementById("annualSalaryInput").value;
    alert('firstname + lastname + id + title + annualsalary');

    //alert('HAYEEY DOOLIGA')
}
form.addEventListener('submit', addNewDate)