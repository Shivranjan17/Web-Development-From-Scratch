// Create your function below this line.
// The first parameter should be the weight and the second should be the height.

function bmiCalculator(weight, height) {
    const bmi = weight / (height * height);
    return bmi;
}

/* If my weight is 65Kg and my height is 1.8m, I should be able to call your function like this: */

 bmiCalculator(65, 1.8); 

console.log("bmi should equal " + bmi + " when it's rounded to the nearest whole number.");
