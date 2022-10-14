let firstNumber = prompt('Digite o primeiro número')
let secondNumber = prompt('Digite o segundo número')

firstNumber = Number(firstNumber)
secondNumber = Number(secondNumber)

const sum = firstNumber + secondNumber
const sub = firstNumber - secondNumber
const multi = firstNumber * secondNumber
const div = firstNumber / secondNumber
const restDiv = firstNumber % secondNumber

alert('Soma: ' + sum)
alert('Subtração: ' + sub)
alert('Multiplicação: ' + multi)
alert('Divisão: ' + div)
alert('Resto da divisão: ' + restDiv)

//Verificar se e par ou impar
let numbers = [firstNumber, secondNumber];
let cases = []

for (number of numbers) {
  if (number % 2 == 0) {
    cases.push("Sim");
  } else {
    cases.push("Nao");
  }
};

alert(`O primeiro numero e par? ${cases[0]}`);
alert(`O segundo numero e par? ${cases[1]}`);

//Verificar se safirstNumbers
const safirstNumber = (firstNumber === secondNumber) //bool
if (safirstNumber == true) {
  alert(`Os números são iguais!`)
} else {
  alert(`Òs números são diferentes`)
}

console.log(safirstNumber)