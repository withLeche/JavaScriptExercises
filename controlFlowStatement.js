// 1. 변수 x가 10보다 크고 20보다 작을 때 변수 x를 출력하는 조건식을 완성하라.
const x = 15;

if (10 < x && x < 20) {
  console.log(x);
}

// 2. for문을 이용하여 0부터 10미만의 정수 중에서 짝수만을 작은 수부터 출력하시오.
for (let i = 0; i < 10; i++) {
  if (i % 2 === 0) console.log(i);
}

// 3. for문을 사용하여 0부터 10미만의 정수 중에서 짝수만을 작은 수부터 문자열로 출력하시오.
let evenStr = "";
for (let i = 0; i < 10; i++) {
  if (i % 2 === 0) {
    evenStr += i;
  }
}
console.log(evenStr);

// 4. for문을 사용하여 0부터 10미만의 정수 중에서 홀수만을 큰 수부터 출력하시오.
for (let i = 10; 0 < i; i--) {
  if (i & (2 !== 0)) console.log(i);
}

// 5. while 문을 사용하여 0부터 10미만의 정수 중에서 짝수 만을 작은 수부터 출력하시오.
let even = 0;
while (even < 10) {
  if (even % 2 === 0) console.log(even);
  even++;
}

// 6. while 문을 사용하여 0부터 10미만의 정수 중에서 홀수 만을 큰 수부터 출력하시오.
let odd = 10;
while (odd > 0) {
  if (odd % 2) console.log(odd);
  odd--;
}

// 7. for 문을 사용하여 0부터 10미만의 정수의 합을 출력하시오.
let sum = 0;
for (let i = 0; i < 10; i++) {
  sum += i;
}
console.log(sum);

// 8. 1부터 20미만의 정수 중에서 2 또는 3의 배수가 아닌 수의 총합을 구하시오.
let sum1 = 0;
for (let i = 0; i < 20; i++) {
  if (i % 2 && i % 3) sum += i;
}
console.log(sum1);

// 9. 1부터 20미만의 정수 중에서 2 또는 3의 배수인 수의 총합을 구하시오.
let sum2 = 0;
for (let i = 0; i < 20; i++) {
  if (i % 2 === 0 || i % 3 === 0) {
    sum += i;
  }
}
console.log(sum2);

// let sum2 = 0;
// for (let i = 0; i < 20; i ++) {
//   if(!(i % 2) || !(i % 3)) {
//     sum += i;
//   }
// }
// console.log(sum2)

// 10. 두 개의 주사위를 던졌을 때, 눈의 합이 6이 되는 모든 경우의 수를 출력하시오.
for (let i = 1; i <= 6; i++) {
  for (let j = 1; j <= 6; j++) {
    if (i + j === 6) console.log(`[${i}, ${j}]`);
  }
}
