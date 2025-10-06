// Map of states to their capitals
const stateCapitals = {
    "Johor": "Johor Bahru",
    "Kedah": "Alor Setar",
    "Kelantan": "Kota Bharu",
    "Pahang": "Kuantan",
    "Selangor": "Shah Alam"
};

// Function to display the capital based on selected state
document.getElementById("stateSelect").addEventListener("change", function() {
    const selectedState = this.value;
    const capitalText = stateCapitals[selectedState] || "Capital not found";
    document.getElementById("capital").textContent = `Capital: ${capitalText}`;
});
