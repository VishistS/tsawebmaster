function calculateSavings(event) {
  const system = document.getElementById("energySystem").value;
  let electricityBill = parseFloat(document.getElementById("electricityBill").value);

  let efficiency;
  event.preventDefault();
  if (isNaN(electricityBill)) {
    alert("Please enter your average monthly electricity bill as a number.")
  }
  else {
    switch (system) {
        case "solar":
            // efficiency for solar
            efficiency = 0.18;
            break;
        case "geothermal":
            // efficiency for geo
            efficiency = 0.35;
            break;
        case "wind":
            // efficiency for wind
            efficiency = 0.30; 
            break;
        default:
            efficiency = 0;
    }
    const savings = electricityBill * efficiency;
    document.getElementById("savingsResult").innerText = `Estimated Monthly Savings: $${savings.toFixed(2)}`;
  }


}
