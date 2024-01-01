
const form = document.getElementById("form")

const firstNameInput = document.getElementById("firstNameInput")
const lastNameInput = document.getElementById("lastNameInput")
const idInput = document.getElementById("idInput")
const titleInput = document.getElementById("titleInput")
const annualSalaryInput = document.getElementById("annualSalaryInput")
const tableBody = document.getElementById("tableBody")
const monthlyTotal = document.getElementById("totalMonthlyNumber")
const footer = document.getElementById("monthlyTotalFooter")

form.addEventListener("submit", submitForm);

let monthlyExpenses = 0

function submitForm(event) {
    event.preventDefault()

    // adding the employee
    tableBody.innerHTML += `<tr>
    <td>${firstNameInput.value}</td>
    <td>${lastNameInput.value}</td>
    <td>${idInput.value}</td>
    <td>${titleInput.value}</td>
    <td>${annualSalaryInput.value}</td>
    <td><button onclick="deleteEmployee(this)">Delete</button></td>
    </tr>`

    // "100" + "100" => "100100" // strings are getting concatenated
    // Number "100" + +"100" => 200 // converting string to a number, we use a Number at start

    // calculating monthly expenses
    monthlyExpenses += Number(annualSalaryInput.value / 12)

    // printing the monthly expenses inside the HTML
    footer.innerHTML = `Total Monthly: $${monthlyExpenses}`

    // resetting the form after employee is added
    firstNameInput.value = ""
    lastNameInput.value = ""
    idInput.value = 0
    titleInput.value = ""
    annualSalaryInput.value = 0

    // if monthlyExpenses more than 20,000 it will turn the color red
    if (monthlyExpenses > 20000) {
        addColor()
    }
}

function deleteEmployee(e) {
    const targettedEmployee = e.parentElement.parentElement
    tableBody.removeChild(targettedEmployee)
}

function addColor() {
    footer.classList.add("over-budget")
}