//Циклы

/*
while (условие) {
    инструкция
  }
  */

let n = 5, i = 1;

while(i <= n){
    console.log('*');
    i++;
}

//вывести число от 1 до 10
n = 10;
i = 1;

while(i <= n){
    console.log(i);
    i++;
}

//вывести нечетные числа от 1 до 10

n = 10;
i = 1;

while(i <= n){
    console.log(i);
    i += 2;
}

//вывести сумму чисел от 1 до 10
let res = 0;
n = 10;
i = 1;

while(i <= n){
    res += i;
    i++;
}
console.log(res);

//вывести произведение чисел от 1 до 10

i = 1;
res = 1;

while(i <= n){
    res *= i;
    i++;
}
console.log(res);

//вывести произведение нечетных чисел от 1 до 10

i = 1;
res = 1;

while(i <= n){
    res *= i;
    i+=2;
}
console.log(res);

console.log('--------------------------');
/*
do {
  // тело цикла
} while (condition);
*/

i = 1, res = 0;
do{
    res += i;
    i++;
} while(i <= n);
console.log(res);


