function calculateSavings() {
  const electricityBill = parseFloat(document.getElementById("electricityBill").value);
  const solarPanelEfficiency = parseFloat(document.getElementById("solarPanel").value) / 100;
  const geothermalEfficiency = parseFloat(document.getElementById("geothermalSystem").value) / 100;
  const windTurbineEfficiency = parseFloat(document.getElementById("windTurbine").value) / 100;
  
  const solarSavings = electricityBill * solarPanelEfficiency;
  const geothermalSavings = electricityBill * geothermalEfficiency;
  const windTurbineSavings = electricityBill * windTurbineEfficiency;
  
  const totalSavings = solarSavings + geothermalSavings + windTurbineSavings;
  
  document.getElementById("savingsResult").innerText = `Estimated Monthly Savings: $${totalSavings.toFixed(2)}`;
}
