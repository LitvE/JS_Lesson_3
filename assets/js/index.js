//Циклы

/*
while (условие) {
    инструкция
  }
  */

// let n = 5, i = 1;

// while(i <= n){
//     console.log('*');
//     i++;
// }

// //вывести число от 1 до 10
// n = 10;
// i = 1;

// while(i <= n){
//     console.log(i);
//     i++;
// }

// //вывести нечетные числа от 1 до 10

// n = 10;
// i = 1;

// while(i <= n){
//     console.log(i);
//     i += 2;
// }

// //вывести сумму чисел от 1 до 10
// let res = 0;
// n = 10;
// i = 1;

// while(i <= n){
//     res += i;
//     i++;
// }
// console.log(res);

// //вывести произведение чисел от 1 до 10

// i = 1;
// res = 1;

// while(i <= n){
//     res *= i;
//     i++;
// }
// console.log(res);

// //вывести произведение нечетных чисел от 1 до 10

// i = 1;
// res = 1;

// while(i <= n){
//     res *= i;
//     i+=2;
// }
// console.log(res);

// console.log('--------------------------');
// /*
// do {
//   // тело цикла
// } while (condition);
// */

// i = 1, res = 0;
// do{
//     res += i;
//     i++;
// } while(i <= n);
// console.log(res);

//2
/*
let result = 1, i = 1, n = 5;
while(i <= n){
    result *= 2;
    console.log(result);
    i++; 
}
*/

//3
/*
let x = -2, limitX = 2, step = 0.5;
let y

while(x <= limitX){
    y = -3*x*x + 5*x -2;
    console.log(y);
    x += step;
}
*/

//5*
/*
let res = 1 + 1;
let userNum = Number(prompt('Введите результат от выражения 1 + 1 = '));

while(userNum != res){
    alert('Вы ввели неправильный результат. Повторите еще раз!')
    userNum = Number(prompt('Введите результат от выражения 1 + 1 = '));
}
alert(`Правильно! 1 + 1 = ${userNum}`);
*/

//4*
/*
let res = 2 + 2;
let userNum = Number(prompt('Введите результат от выражения 2 + 2 = '));
let i = 0;

while(i < 3){
    if(userNum != res){
        alert('Вы ввели неправильный результат. Повторите еще раз!')
        userNum = Number(prompt('Введите результат от выражения 2 + 2 = '));
        i++;
    }
    else {
        alert(`Правильно! 2 + 2 = ${userNum}`);
        i = 3;
        //break;
    }
}
*/

// cicle for
/*
for (начало; условие; шаг) {
    // ... тело цикла ...
  }
  */

  //Вывести числа от 1 до 10
/*
  for(let i=1; i<=10; i++){
    console.log(i);
  }

  for(let i=1; i<=10; i+=2){
    console.log(i);
  }

  for(let i=0; i<=10; i+=2){
    console.log(i);
  }

  console.log('--------------------------------')
  //сумма чисел от 1 до 100
  let res = 0, i;
  for(i = 1; i <= 100; i++){
    res += i;
  }
  console.log(res);
  */

  // Вывести таблицу умножения на 2
  let i, res = 0;
  for(i = 1; i <= 9; i++){
    res = i * 2;
    console.log(`${i} * 2 = ${res}`)
  }

  //Вывести таблицу умножения

  console.log('--------------------------------');

  let j;
  res = 0;

  for(i = 2; i <= 9; i++){
    for(j = 2; j <= 9; j++){
        res = i * j;
        console.log(`${i} * ${j} = ${res}`)
      }
    console.log('--------------------------------');
  }

  //Вывести все высокосные года
  console.log('--------------------------------');

  let x, y = 2050, year = 0, count = 0;

  for(x = 2021; x <= y; x++){
    year = x % 4;
    if(year == 0) {
        console.log(x);
        count++;
    };
  }
  console.log(count);
  if(count == 0){
      console.log('Високосных годов нет!');
  }

