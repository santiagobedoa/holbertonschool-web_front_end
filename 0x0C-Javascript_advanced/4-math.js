function divideBy(firstNumber) {
  return (secondNumber) => {
    return secondNumber / firstNumber;
  };
}

function addBy(firstNumber) {
  return (secondNumber) => {
    return secondNumber + firstNumber;
  };
}

function addBy100(secondNumber) {
  return addBy(100)(secondNumber);
}

function addBy1000(secondNumber) {
  return addBy(1000)(secondNumber);
}

function divideBy10(secondNumber) {
  return divideBy(10)(secondNumber);
}

function divideBy100(secondNumber) {
  return divideBy(100)(secondNumber);
}
