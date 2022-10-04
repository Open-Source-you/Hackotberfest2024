let display = document.getElementById("display"),
  buttons = Array.from(document.getElementsByClassName("button"));
function buttonPress(key) {
  switch (key) {
    case "c":
      display.innerText = "";
      break;
    case "=":
    case "Enter":
      try {
        display.innerText = eval(display.innerText);
      } catch {
        display.innerText = "Error";
      }
      break;
    case "Backspace":
      display.innerText && (display.innerText = display.innerText.slice(0, -1));
      break;
    case "+":
      display.innerText += display.innerText = "+";
      break;
    case "-":
      display.innerText += display.innerText = "-";
      break;
    case "*":
      display.innerText += display.innerText = "*";
      break;
    case "/":
      display.innerText += display.innerText = "/";
      break;
    case "%":
      display.innerText += display.innerText = "%";
      break;
    case "1":
      display.innerText += display.innerText = "1";
      break;
    case "2":
      display.innerText += display.innerText = "2";
      break;
    case "3":
      display.innerText += display.innerText = "3";
      break;
    case "4":
      display.innerText += display.innerText = "4";
      break;
    case "5":
      display.innerText += display.innerText = "5";
      break;
    case "6":
      display.innerText += display.innerText = "6";
      break;
    case "7":
      display.innerText += display.innerText = "7";
      break;
    case "8":
      display.innerText += display.innerText = "8";
      break;
    case "9":
      display.innerText += display.innerText = "9";
      break;
    case "0":
      display.innerText += display.innerText = "0";
      break;
    case ".":
      display.innerText += display.innerText = ".";
  }
}
buttons.map((button) => {
  button.addEventListener("click", (e) => {
    switch (e.target.innerText) {
      case "C":
        display.innerText = "";
        break;
      case "=":
        try {
          display.innerText = eval(display.innerText);
        } catch {
          display.innerText = "Error";
        }
        break;
      case "←":
        display.innerText &&
          (display.innerText = display.innerText.slice(0, -1));
        break;
      default:
        display.innerText += e.target.innerText;
    }
  });
}),
  document.addEventListener("keydown", function (e) {
    buttonPress(e.key);
  });
