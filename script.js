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
    const totalCost = laborCost + fuelCost + totalDumpFees + otherCosts - scrapMetal;

    // Calculate COGS Percentage
    const cogsPercentage = (totalCost / totalRevenue) * 100;

    // Display the result
    const profit = totalRevenue - totalCost;
    console.log("Total Cost:", totalCost);
    console.log("COGS Percentage:", cogsPercentage.toFixed(2) + "%");
    console.log("Profit", profit.toFixed(2))

    finalCogDisplay.textContent = cogsPercentage.toFixed(2) + "%";
    profitDisplay.textContent = profit.toFixed(2);


 
}

// Call the function when the form is submitted (you can change this trigger as needed)
document.querySelector('form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the form from actually submitting
    calculateCOGSPercentage(); // Calculate and display the COGS Percentage
});