document.addEventListener("DOMContentLoaded", () => {
    const unitRadios = document.querySelectorAll('input[name="unit"]');
    const imperialHeightFields = document.getElementById("imperial-height");
    const heightField = document.getElementById("height");
  
    unitRadios.forEach(radio => {
      radio.addEventListener("change", () => {
        if (radio.value === "imperial") {
          heightField.style.display = "none";
          imperialHeightFields.style.display = "flex";
        } else {
          heightField.style.display = "block";
          imperialHeightFields.style.display = "none";
        }
      });
    });
  });
  
  function calculateBMI() {
    const unit = document.querySelector('input[name="unit"]:checked').value;
    const weight = parseFloat(document.getElementById("weight").value);
    let height = 0;
    let bmi = 0;
  
    if (unit === "metric") {
      height = parseFloat(document.getElementById("height").value) / 100;
      bmi = weight / (height * height);
    } else {
      const feet = parseFloat(document.getElementById("heightFeet").value) || 0;
      const inches = parseFloat(document.getElementById("heightInches").value) || 0;
      height = feet * 12 + inches;
      bmi = (weight / (height * height)) * 703;
    }
  
    document.getElementById("result").innerText = `Your BMI is: ${bmi.toFixed(2)}`;
  }
