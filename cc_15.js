//Task 1
const riskDash = document.getElementById("riskDashboard"); // select risk dashboard
console.log("Risk Dashboard Loaded"); // print "Risk Dashboard Loaded" to the console

// Task 2
function addRiskItem(riskName, riskLevel, department) {
  const riskCard = document.createElement("div"); // creates a riskCard div
  riskCard.setAttribute("class", "riskCard"); // sets riskcard class
  riskCard.setAttribute("dataRiskLevel", riskLevel); // sotres riskLevel within an HTMl element (used in the 5th Task)

  riskCard.innerHTML = `
       Name: ${riskName} <br>
        Risk level: <span class="riskText">${riskLevel}</span> <br>  <!-- the span wraps the risk level inside of a class-->
        Department: ${department}
    
`;
  riskColors(riskCard, riskLevel);
  riskDash.appendChild(riskCard); // appends riskCard to the dashboard

  //Task 3
  const resolveButton = document.createElement("button"); // creates button element
  resolveButton.setAttribute("class", "resolveButton"); // sets button class
  resolveButton.textContent = "Resolve"; // adds text to button

  resolveButton.addEventListener("click", () => {
    // removes card from dash when clicked
    riskDash.removeChild(riskCard);
  });
  riskCard.appendChild(resolveButton); // appends resolve button to card
}

function riskColors(riskCard, riskLevel) {
  // creates a function that controls the color of the risk card using paramaters riskcard and risklevel

  if (riskLevel === "High") {
    riskCard.style.backgroundColor = "rgb(247, 16, 16)"; // sets color to Red
    riskCard.style.color = "white"; // sets text to white
  } else if (riskLevel === "Medium") {
    riskCard.style.backgroundColor = "rgb(255, 251, 17)"; // sets color to Yellow
  } else {
    riskCard.style.backgroundColor = "rgb(83, 252, 32)"; // sets color to Green
  }
}

const riskForm = document.getElementById("riskForm"); // assigns value to a constant
riskForm.addEventListener("submit", (event) => {
  // creates an event listener that listens for the "submit" button to be clicked
  event.preventDefault(); // Prevents page reload NECESSARY
  const riskNameInput = document.getElementById("nameInput").value; // assigns input value
  const riskLevelInput = document.getElementById("riskLevel").value; // assigns input value
  const departmentInput = document.getElementById("departmentInput").value; // assigns input value

  addRiskItem(riskNameInput, riskLevelInput, departmentInput); // calls the add risk function using values from the html form input

  event.target.reset(); // Reset the form
});

const increaseRiskButton = document.getElementById("increaseUniformly");

function increaseRiskLevels() {
  document.querySelectorAll(".riskCard").forEach((riskCard) => {
    const riskTextElement = riskCard.querySelector(".riskText");
    let currentRisk = riskCard.getAttribute("dataRiskLevel"); // assigns dataRiskLevel as the current risk
    let newRisk; // creates the variable new risk
    if (currentRisk === "Low") {
      // changes low risk to medium
      newRisk = "Medium";
    } else if (currentRisk === "Medium") {
      //changes medium risk to high
      newRisk = "High";
    } else {
      return; // prevents issues when newRisk = high and is updated
    }
    riskTextElement.textContent = newRisk; // updates the text content (wrapped within the span) with the new risk level
    riskCard.setAttribute("dataRiskLevel", newRisk); // sets new risk card Risk level
    riskColors(riskCard, newRisk); // calls risk colors function
  });
}
increaseRiskButton.addEventListener("click", increaseRiskLevels); // calls  increaseRiskLevels function when increase uniformly button is clicked

//Test cases
addRiskItem("Market Fluctuations", "High", "Finance");
addRiskItem("Data Breach", "High", "IT");
addRiskItem("Supply Chain Disruption", "Medium", "Operations");
addRiskItem("Cybersecurity Threat", "High", "IT");
addRiskItem("HR Compliance Issue", "Low", "Human Resources");
