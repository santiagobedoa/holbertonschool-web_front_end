function countPrimeNumbers() {
  let notPrimes = 0;
  for (let number = 2; number <= 200; number++) {
    for (let j = 2; j < number; j++) {
      if (number % j == 0) {
        notPrimes++;
        break;
      }
    }
  }
  return 198 - notPrimes;
}

let start = performance.now();
countPrimeNumbers();
let end = performance.now();

console.log(
  `Execution time of printing countPrimeNumbers was ${
    end - start
  } milliseconds.`
);
