
console.log('JS FILE LOADED')

const form = document.querySelector('form')
const tbody = document.querySelector('tbody')

function addNewDate(event) {
    event.preventDefault();
    const firstName = document.getElementById("firstNameInput").value;
    const lastName = document.getElementById("lastNameInput").value;
    const id = document.getElementById("idInput").value;
    const title = document.getElementById("titleInput").value;
    const annualsalary = document.getElementById("annualSalaryInput").value;
    tbody.innerHTML += `

<td>${firstName}</td>
<td>${lastName}</td>
<td>${id}</td>
<td>${title}</td>
<td>${annualsalary}</td>
<td>button class= "delete-btn">Delete</></td>



`

    //alert('HAYEEY DOOLIGA')
}
form.addEventListener('submit', addNewDate)