
//Task 1
const riskDash = document.getElementById('riskDashboard') // select risk dashboard
console.log("Risk Dashboard Loaded") // print "Risk Dashboard Loaded" to the console

// Task 2
function addRiskItem(riskName, riskLevel, department){
    const riskCard = document.createElement('div')
    riskCard.setAttribute('class',"riskCard") // sets riskcard class

    riskCard.innerHTML = `
       Name: ${riskName} <br>
        Risk level: ${riskLevel} <br>
        Department: ${department}
`;
    riskDash.appendChild(riskCard) // appends riskCard to the dashboard

//Task 3
    const resolveButton = document.createElement("button") // creates button element
    resolveButton.setAttribute('class','resolveButton') // sets button class
    resolveButton.textContent = 'Resolve' // adds text to button
    
    resolveButton.addEventListener('click',()=>{ // removes card from dash when clicked
        riskDash.removeChild(riskCard)
    })
    riskCard.appendChild(resolveButton) // appends resolve button to card

    if (riskLevel === "High"){
        riskCard.style.backgroundColor ="rgb(247, 16, 16)"
        riskCard.style.color = "white"
    }
    else if (riskLevel === "Medium"){
         riskCard.style.backgroundColor ="rgb(255, 251, 17)"
    }
    else {
         riskCard.style.backgroundColor = "rgb(83, 252, 32)"
    }
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

//Test cases
addRiskItem("Market Fluctuations", "High", "Finance");
addRiskItem("Data Breach", "High", "IT");
addRiskItem("Supply Chain Disruption", "Medium", "Operations");
addRiskItem("Cybersecurity Threat", "High", "IT");
addRiskItem("HR Compliance Issue", "Low", "Human Resources");