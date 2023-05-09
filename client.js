document.getElementById("employeeForm").addEventListener("submit", addEmployee);

let totalMonthlyCosts = 0;

function addEmployee(event) {
    event.preventDefault();

    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const idNumber = document.getElementById("idNumber").value;
    const jobTitle = document.getElementById("jobTitle").value;
    const annualSalary = parseFloat(document.getElementById("annualSalary").value);

    const employee = {
        firstName,
        lastName,
        idNumber,
        jobTitle,
        annualSalary
    };

    const monthlyCost = employee.annualSalary / 12;
    totalMonthlyCosts += monthlyCost;

    updateTotalMonthlyCosts(totalMonthlyCosts);

    addEmployeeToDOM(employee);

    document.getElementById("employeeForm").reset();
}

function updateTotalMonthlyCosts(newTotalMonthlyCosts) {
    const totalMonthlyCostsElement = document.getElementById("totalMonthlyCosts");

    totalMonthlyCostsElement.textContent = "$" + newTotalMonthlyCosts.toFixed(2);

    if (newTotalMonthlyCosts > 1000000) {
        totalMonthlyCostsElement.classList.add("red-background");
    } else {
        totalMonthlyCostsElement.classList.remove("red-background");
    }
}

function addEmployeeToDOM(employee) {
    const employeeTableBody = document.getElementById("employeeTableBody");
    const newRow = employeeTableBody.insertRow(-1);

    newRow.insertCell(0).textContent = employee.firstName + " " + employee.lastName;
    newRow.insertCell(1).textContent = employee.idNumber;
    newRow.insertCell(2).textContent = employee.jobTitle;
    newRow.insertCell(3).textContent = "$" + employee.annualSalary.toFixed(2);

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", () => {
        newRow.remove();
    });

    newRow.insertCell(4).appendChild(deleteButton);
}

