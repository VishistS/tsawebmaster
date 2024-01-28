function calculateSavings() {
  const energySystem = document.getElementById("energySystem").value;
  let electricityBill = parseFloat(document.getElementById("electricityBill").value);

  let efficiency;

  if (isNaN(electricityBill)) {
    alert("Please enter your average monthly electricity bill as a numerical amount.")
  }
  else {
    switch (energySystem) {
        case "solar":
            efficiency = 0.18; // Median efficiency for solar panels
            break;
        case "geothermal":
            efficiency = 0.35; // Median efficiency for geothermal systems
            break;
        case "wind":
            efficiency = 0.30; // Median efficiency for wind turbines
            break;
        default:
            efficiency = 0;
    }
    const savings = electricityBill * efficiency;
    document.getElementById("savingsResult").innerText = `Estimated Monthly Savings: $${savings.toFixed(2)}`;
  }


}
