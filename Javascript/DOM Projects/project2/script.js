const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const heightInput = document.querySelector('#height');
  const weightInput = document.querySelector('#weight');
  const results = document.querySelector('#results');

  const height = parseFloat(heightInput.value);
  const weight = parseFloat(weightInput.value);

  // Clear previous results
  results.innerHTML = '';

  if (isNaN(height) || height <= 0) {
    results.innerHTML = `Please provide a valid height.`;
  } else if (isNaN(weight) || weight <= 0) {
    results.innerHTML = `Please provide a valid weight.`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    
    // Determine the BMI category
    let category = '';
    if (bmi < 18.6) {
      category = `Underweight: ${bmi}`;
    } else if (bmi >= 18.6 && bmi <= 24.9) {
      category = `Normal weight: ${bmi}`;
    } else {
      category = `Overweight: ${bmi}`;
    }
    
    // Display the result
    results.innerHTML = `<span>${category}</span>`;
  }
});
