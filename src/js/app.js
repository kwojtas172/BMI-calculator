import React from "react";
import ReactDOM from "react-dom";
import "../scss/main.scss"

const weightKg = document.querySelector("#weightKg");
const heightCm = document.querySelector("#heightCm");
const send = document.querySelector("#send");
const score = document.querySelector("#score");
const summary = document.querySelector("#summary");


class BMIcalculatorContainer extends React.Component {
  render() {
    return send.addEventListener("click", e => {
      e.preventDefault();
      const weight = parseFloat(weightKg.value);
      const height = parseFloat(heightCm.value);

      if (weight > 0 && height > 0) {

        let result = Math.round((weight / (height / 100 * height / 100)) * 100) / 100;
        let sum = "";

        if (result < 18.5) {
          sum = "Niedowaga, jedz więcej!";
          summary.classList.add("toBetter");
          if (summary.classList.contains("good")) { summary.classList.remove("good") }
          if (summary.classList.contains("alert")) { summary.classList.remove("alert") }
        } else if (result >= 18.5 && result <= 24.9) {
          sum = "Waga prawidłowa, wszystko w porządku!";
          summary.classList.add("good");
          if (summary.classList.contains("toBetter")) { summary.classList.remove("toBetter") }
          if (summary.classList.contains("alert")) { summary.classList.remove("alert") }
        } else if (result > 24.9 && result <= 29.9) {
          sum = "Nadwaga, ostrożnie!";
          summary.classList.add("toBetter");
          if (summary.classList.contains("good")) { summary.classList.remove("good") }
          if (summary.classList.contains("alert")) { summary.classList.remove("alert") }
        } else if (result > 29.9) {
          sum = "Otyłość, koniecznie schudnij!";
          summary.classList.add("alert");
          if (summary.classList.contains("toBetter")) { summary.classList.remove("toBetter") }
          if (summary.classList.contains("good")) { summary.classList.remove("good") }
        }
        score.innerText = `Twoje BMI to ${result}`;
        summary.innerText = sum;
      } else {
        alert("Wprowadź liczby dodatnie");
      }

    }
    )

  }
}


class App extends React.Component {
  render() {
    return <BMIcalculatorContainer />

  }
}

ReactDOM.render(<App />, document.querySelector("#app"));