const unit = document.getElementById("unit");
const convert = document.getElementById("convert");
const reset = document.getElementById("reset");
// distance instead of length so it would not be confused with .length method
const shortDistance = document.getElementById("shortDistance");
const longDistance = document.getElementById("longDistance");
const volume = document.getElementById("volume");
const mass = document.getElementById("mass");
const temperature = document.getElementById("temperature");

const unitConverter = (convertFactor, measurement, imperial, metric) => {
  let unitValue = Number(unit.value);
  const multipleConversion = (unit.value * convertFactor).toFixed(2);
  const divideConversion = (unit.value / convertFactor).toFixed(2);
  //output line for converting the unit
  const moreThanOne = `${unitValue} ${metric} = ${multipleConversion} ${imperial}<span>${unitValue} ${imperial} = ${divideConversion} ${metric}</span>`;
      //variables for a unitValue = 1
  const singularMetric = metric.replace(metric.charAt(metric.length - 1), "");
  const singularImperial = imperial.replace(
    imperial.charAt(imperial.length - 1),
    ""
  );
  const one = `${unitValue} ${singularMetric} = ${multipleConversion} ${imperial}<span>${unitValue} ${singularImperial} = ${divideConversion} ${metric}</span>`;
  //the function to convert temperature
  const convertTemperatures = (degree) => {
    const celToFah = ((degree * 9.0) / 5.0 + 32.0).toFixed(2);
    const fahToCel = (((degree - 32.0) * 5.0) / 9.0).toFixed(2);
    temperature.innerHTML = `${degree}° Celsius = ${celToFah}° Fahrenheit<span>${degree}° Fahrenheit = ${fahToCel}° Celsius</span>`;
  };
  //to check if the users enter a one and change the grammar
  if (unitValue === 1) {
    //convert feet to foot for one unit
    if (imperial === "feet") {
      measurement.innerHTML = `${unitValue} ${singularMetric} = ${multipleConversion} ${imperial}<span>${unitValue} foot = ${divideConversion} ${metric}</span>`;
      convertTemperatures(unitValue);
    } else {
      measurement.innerHTML = one;
    }
  } 
  //if the user enters a zero
  else if (unitValue === 0) {
    measurement.innerHTML = `${unitValue} ${metric} = 0 ${imperial}<span> ${unitValue} ${imperial} = 0 ${metric}</span>`;
    convertTemperatures(unitValue);
  } 
  //if the user enters a negative number
  else if (unitValue < 0) {
    measurement.textContent = "This cannot be a negative number.";
    convertTemperatures(unitValue);
  } 
//   any value more than 1
  else {
    measurement.innerHTML = moreThanOne;
    convertTemperatures(unitValue);
  }
};

//rest the conversions
const clear = (measurement) => {
    measurement.textContent = "";
    unit.value= 0
}

//convertFactor, measurement(choices: distance, volume, mass), imperial, metric
convert.addEventListener("click", () => {
  unitConverter(3.281, shortDistance, "feet", "meters"),
    unitConverter(0.621, longDistance, "miles", "kilometers"),
    unitConverter(0.264, volume, "gallons", "liters"),
    unitConverter(2.204, mass, "pounds", "kilograms");
});

reset.addEventListener("click", () => {
      clear(shortDistance), clear(longDistance), clear(volume), clear(mass), clear(temperature), clear(temperature)
});


