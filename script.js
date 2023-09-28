// Select elements by their IDs and assign them to variables
const totalRevenueInput = document.getElementById('total-revenue');
const revenuePerHourInput = document.getElementById('revenue-per-hour');
const headCountInput = document.getElementById('head-count');
const hoursInput = document.getElementById('hours');
const totalFuelCostInput = document.getElementById('total-fuel-cost');

const fuelAddedGallonsInput = document.getElementById('fuel-added-gallons');
const pricePerGallonInput = document.getElementById('price-per-gallon');
const totalDumpFeesInput = document.getElementById('total-dump-fees');
const otherCostsInput = document.getElementById('other-costs');
const scrapMetalInput = document.getElementById('scrap-metal');

const fuelCostDisplay = document.getElementById('fuel-cost-display'); 
const laborCostDisplay = document.getElementById('labor-cost-display');

const finalCogDisplay = document.getElementById('final-cog-display');
const profitDisplay = document.getElementById('profit-display');

function calculateCOGSPercentage() {
    // Get the input values
    const totalRevenue = parseFloat(totalRevenueInput.value) || 0;
    const revenuePerHour = parseFloat(revenuePerHourInput.value) || 0;
    const headCount = parseFloat(headCountInput.value) || 0;
    const hours = parseFloat(hoursInput.value) || 0;
    // const totalFuelCost = parseFloat(totalFuelCostInput.value) || 0;
    const fuelAddedGallons = parseFloat(fuelAddedGallonsInput.value) || 0;
    const pricePerGallon = parseFloat(pricePerGallonInput.value) || 0;
    const totalDumpFees = parseFloat(totalDumpFeesInput.value) || 0;
    const otherCosts = parseFloat(otherCostsInput.value) || 0;
    const scrapMetal = parseFloat(scrapMetalInput.value) || 0;

    // Calculate the total cost
    const laborCost = revenuePerHour * headCount * hours;
    const fuelCost = fuelAddedGallons * pricePerGallon;
    laborCostDisplay.textContent = fuelCost
    const totalCost = laborCost + fuelCost + totalDumpFees + otherCosts - scrapMetal;

    // Calculate COGS Percentage
    const cogsPercentage = (totalCost / totalRevenue) * 100;

    // Display the result
    const profit = totalRevenue - totalCost;
    console.log("Total Cost:", totalCost);
    console.log("COGS Percentage:", cogsPercentage.toFixed(2) + "%");
    console.log("Profit", profit.toFixed(2))

    finalCogDisplay.textContent = cogsPercentage.toFixed(2) + "%";
    if(cogsPercentage.toFixed(2) < 30){
        finalCogDisplay.style.backgroundColor = "green"
        finalCogDisplay.style.color = "white"
    }else if(cogsPercentage.toFixed(2)>40){
        finalCogDisplay.style.backgroundColor = "red"
        finalCogDisplay.style.color = "white"
    }else{
        finalCogDisplay.style.color = "black"
        finalCogDisplay.style.backgroundColor = "yellow"
    }
    // profitDisplay.textContent = profit.toFixed(2);


 
}

// Call the function when the form is submitted (you can change this trigger as needed)
document.querySelector('form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the form from actually submitting
    calculateCOGSPercentage(); // Calculate and display the COGS Percentage
});
//clear event listener
document.getElementById('clear').addEventListener('click', () => {
    finalCogDisplay.textContent = ""
    finalCogDisplay.style.backgroundColor = "white"
    fuelCostDisplay.textContent = ""
    laborCostDisplay.textContent = ""
    const inputElements = document.querySelectorAll('input');
    inputElements.forEach((input) => {
        input.value = "";
    });
});

// Function to update the fuel cost display
function updateFuelCost() {
    // Get the values from the input fields and convert them to numbers
    const fuelAddedGallons = parseFloat(fuelAddedGallonsInput.value) || 0;
    const pricePerGallon = parseFloat(pricePerGallonInput.value) || 0;

    // Calculate the fuel cost
    const fuelCost = fuelAddedGallons * pricePerGallon;

    // Update the fuel cost display element
    fuelCostDisplay.textContent = '$' + fuelCost.toFixed(2); // Display the fuel cost with 2 decimal places
}

fuelAddedGallonsInput.addEventListener('keyup', updateFuelCost);
pricePerGallonInput.addEventListener('keyup', updateFuelCost);

function updateLaborCost() {
    const revenuePerHour = parseFloat(revenuePerHourInput.value) || 0;
    const headCount = parseFloat(headCountInput.value) || 0;
    const hours = parseFloat(hoursInput.value) || 0;
    const laborCost = revenuePerHour * headCount * hours;
    // Update the fuel cost display element
    laborCostDisplay.textContent = '$' + laborCost.toFixed(2); // Display the labor cost with 2 decimal places
}

hoursInput.addEventListener('keyup', updateLaborCost);
headCountInput.addEventListener('keyup', updateLaborCost);
revenuePerHourInput.addEventListener('keyup', updateLaborCost);

