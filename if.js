let number1 = parseInt(prompt('Digite o primeiro número'))
let number2 = parseInt(prompt('Digite o segundo número'))
let operation = prompt('Digite uma operação matemática básica')
if(operation === '+'){
  let sum = number1 + number2
  alert(sum)
}else if (operation === '-') {
  let subtraction = number1 - number2
  alert(subtraction)
}else if (operation === '*') {
  let multiplication = number1 * number2
  alert(multiplication)
}else if (operation === '/') {
  if (number2 == 0) {
    alert("erro")
  }else {
    let division = number1 / number2
    alert(division)
   }
}
