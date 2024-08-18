function convert() {
    // Get user input and validate
    const temperatureInput = document.getElementById("tem");
    const temperatureValue = parseFloat(temperatureInput.value);
  
    if (isNaN(temperatureValue)) {
      alert("Please enter a valid number.");
      return;
    }
  
    // Get selected unit from dropdown (if implemented)
    // You'll need to add a dropdown element (select) with options for units (C, F, K)
    // let fromUnit = document.getElementById("unitFrom").value;  // Assuming an element with id="unitFrom"
  
    // Get the unit to convert to (if implemented)
    // You'll need to add a dropdown element (select) with options for units (C, F, K)
    // let toUnit = document.getElementById("unitTo").value;  // Assuming an element with id="unitTo"
  
    // Default conversion (assuming Celsius to Fahrenheit for now)
    const convertedTemp = temperatureValue * 1.8 + 32;  // Celsius to Fahrenheit conversion
  
    // Display the converted temperature
    const resultDiv = document.createElement("div");  // Create a new element for the result
    resultDiv.textContent = `${temperatureValue}°C is equal to ${convertedTemp.toFixed(2)}°F`;
  
    // Find a suitable place to display the result (replace with your desired location)
    const container = document.querySelector(".container");
    container.appendChild(resultDiv);
  }
  