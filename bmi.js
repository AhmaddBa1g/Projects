function calculateBMI() {
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);
    const unit = document.querySelector('input[name="unit"]:checked').value;
    
    let bmi;

    if (unit === "metric") {
        bmi = weight / (height * height);
    } else {
        bmi = (weight / (height * height)) * 703;
    }

    let category;
    if (bmi < 18.5) {
        category = "Underweight";
    } else if (bmi >= 18.5 && bmi < 24.9) {
        category = "Normal weight";
    } else if (bmi >= 25 && bmi < 29.9) {
        category = "Overweight";
    } else {
        category = "Obese";
    }

    document.getElementById('result').innerText = `Your BMI is ${bmi.toFixed(2)} - ${category}`;
}
