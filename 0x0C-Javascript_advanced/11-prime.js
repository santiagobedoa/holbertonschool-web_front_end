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

function loop() {
  for (let i = 0; i < 100; i++) {
    countPrimeNumbers();
  }
}

let start = performance.now();
setTimeout(loop, 0);
let end = performance.now();

console.log(
  `Execution time of calculating prime numbers 100 times was ${
    end - start
  } milliseconds.`
);
