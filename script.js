function calculate(type, value) {
  if (type === "action") {

    let visor = document.querySelector('#res')

    if (value === "c" && visor.className === "invisible") {
      visor.className = "visible"
    }

    if (value === "off" && visor.className === "visible") {
      visor.className = "invisible"
    }

    if (value === "c") {
      document.querySelector("#res").value = "";
    }

    let buttons = ['+', '-', '/', '.', 'x', '%']
    let fild_value = document.querySelector('#res')
    if (buttons.includes(value) && fild_value.value.length > 0) {
        document.querySelector('#res').value += value
    }

    if (value === '=') {

        let field_value = document.querySelector('#res').value.replace('x', '*')
        document.querySelector('#res').value = eval(field_value)
    }


  } else if (type === "value") {
    document.querySelector("#res").value += value;
  }
}
