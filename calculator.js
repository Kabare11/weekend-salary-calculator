
console.log('JS FILE LOADED')

const form = document.querySelector('form');
const tbody = document.querySelector('tbody');
const table = document.querySelector('table');

function addNewDate(event) {
    event.preventDefault();
    const firstName = document.getElementById("firstNameInput").value;
    const lastName = document.getElementById("lastNameInput").value;
    const id = document.getElementById("idInput").value;
    const title = document.getElementById("titleInput").value;
    const annualsalary = document.getElementById("annualSalaryInput").value;
    tbody.innerHTML += `
<tr>

<td>${firstName}</td>
<td>${lastName}</td>
<td>${id}</td>
<td>${title}</td>
<td>${annualsalary}</td>
<button class="deleteBtn">Delete</button>




</tr>

`;

    function onDeleteRow(event) {
        event.preventDefault()
    }

    //alert('HAYEEY DOOLIGA')
}
form.addEventListener('submit', addNewDate)
table.addEventListener('click', onDeleteRow)