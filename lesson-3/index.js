// 1
let name = 'Kubat';
console.log(name)

// 2
let age = 33;
console.log(age);

// 3
let isAdult = age;
if (isAdult >= 18) {
  console.log(true)
} else if (isAdult <= 18) {
  console.log(false)
};

// 4
let userName = prompt('What is your name?', 'No answer');
console.log(userName);

// 5
let userAgree = confirm('Согласны ли вы получать наш спам на e-mail?');
console.log(userAgree);

// 6
let password = 'qwer123';
if (password = true) {
  console.log('Доступ разрешён')
} else {
  console.log('Доступ запрещён')
}

// 7
let number = 42;
let a = (number % 2);
if (a > 0) {
  console.log('Число нечётное')
} else {
  console.log('Число чётное')
}

// 8
let color = 'red';
if (color == 'red') {
  console.log('Цвет красный')
} else {
  console.log('Цвет не красный')
}

// 9
let square = prompt('Какое число возвести в квадрат?');
console.log(square ** 2);

// 10
let grade = 'A';
if (grade == 'A' | grade == 'a') {
  console.log('Отлично!')
} else if (grade == 'B' | grade == 'b') {
  console.log('Хорошо')
} else if (grade == 'C' | grade == 'c') {
  console.log('')
} else if (grade == 'D' | grade == 'd') {
  console.log('Удовдетворительно')
} else if (grade == 'E' | grade == 'e') {
  console.log('Неудовлетворительно')
} else if (grade == 'F' | grade == 'f') {
  console.log('Плохо')
} else {
  console.log('Значение некорректно')