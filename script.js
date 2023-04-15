let employees = [];
let employeeId = 1;

// make an event listener of Add user on click 
document.getElementById("addUser-btn").addEventListener("click", addEmployee);

// make a function to add employee
function addEmployee(event) {
    event.preventDefault();

    // get form values---
    const nameValue = document.getElementById("name").value.trim();
    const professionValue = document.getElementById("profession").value.trim();
    const ageValue = document.getElementById("age").value.trim();

    if (nameValue === "" || professionValue === "" || ageValue === "") {
        showMessage("Error : Please Make sure All the fields are filled before adding in an employee !", "#FF4343");
    }
    else {
        const id = employeeId++;
        const employee = { id, nameValue, professionValue, ageValue };

        // Function to add employee to array and display success message
        showMessage("Success : Employee added !", "#43FF78");
        employees.push(employee);
    }
    
    showEmployees();
}

function showEmployees() {
    const employeesDiv = document.getElementById("employeeList");

    employeesDiv.innerHTML = "";

    employees.forEach(employee => {
        const employeeDiv = document.createElement("div");
        employeeDiv.innerHTML = `
        <div style="display: flex; align-items: center;">
            <div style="border: 1px solid white; width: 500px; border-radius: 10px; padding: 10px; margin-top: 0px; display: flex; justify-content: space-evenly;">
                <b style="margin: 10px; ">Id: ${employee.id} </b>
                <b style="margin: 10px; ">Name: ${employee.nameValue} </b>
                <b style="margin: 10px; ">Profession: ${employee.professionValue} </b>
                <b style="margin: 10px; ">Age: ${employee.ageValue}
            </div>

            <button type="button" onclick="deleteEmployee(${employee.id})" style="border-radius: 20px; border: 1px solid white; padding: 5px;">Delete User</button>
        </div>`;

        employeesDiv.appendChild(employeeDiv);
        // employeeDiv.style.display = "contents";

    });
}

// Define a function to delete an employee from the array
function deleteEmployee(id) {
    // Find the index of the employee with the specified ID
    const index = employees.findIndex(e => e.id === id);

    // Remove the employee from the array
    employees.splice(index, 1);

    // Update the list of added employees
    showEmployees();
}

function showMessage(text, color) {
    const message = document.getElementById("showMsg");
    message.innerText = text;
    message.style.color = color;
    message.style.marginLeft = "30px";
}

showEmployees();










