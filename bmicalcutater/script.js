const btn = document.getElementById("bmi").addEventListener("click", events);

function events() {
  const height = document.getElementById("Hight").value;
  const weight = document.getElementById("Weight").value;
  let bmi = (weight / ((height * height) / 10000)).toFixed(2);

  const text = document.getElementById("text");
  text.innerText = `my BMI ${bmi}`;
}
