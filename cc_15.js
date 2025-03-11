
//Task 1
const riskDash = document.getElementById('riskDashboard') // select risk dashboard
console.log("Risk Dashboard Loaded") // print "Risk Dashboard Loaded" to the console

function addRiskItem(riskName, riskLevel, department){
    const riskCard = document.createElement('div')
    riskCard.setAttribute('class',"riskCard") // sets riskcard class

    riskCard.innerHTML = `
       Name: ${riskName} <br>
        Risk level: ${riskLevel} <br>
        Department: ${department}
`;
    riskDash.appendChild(riskCard) // appends riskCard to the dashboard

}

const riskForm = document.getElementById("riskForm") // assigns value to a constant
riskForm.addEventListener('submit', () =>{ // creates an event listener that listens for the "submit" button to be clicked
    event.preventDefault(); // Prevents page reload NECESSARY
    const riskNameInput = document.getElementById("nameInput").value; // assigns input value 
    const riskLevelInput = document.getElementById("riskLevel").value; // assigns input value 
    const departmentInput = document.getElementById("departmentInput").value; // assigns input value 

    addRiskItem(riskNameInput, riskLevelInput, departmentInput); // calls the add risk function using values from the html form input

    event.target.reset(); // Reset the form
})

