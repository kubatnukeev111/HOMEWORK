let shipName = prompt("Введите название корабля:");

// 1.2
let currentFuel = Number(prompt("Введите текущее количество топлива в корабле:"));

// 1.3
let maxFuel = Number(prompt("Введите максимальное количество топлива в корабле:"));

// 1.4
let speed = Number(prompt("Введите скорость корабля:"));

// 2.1
console.log(`Корабль ${shipName} готов к вылету.`);

// 2.2
console.log(`Текущее количество топлива: ${currentFuel}`);

// 2.3
console.log(`Максимальное количество топлива: ${maxFuel}`);

// 2.4
console.log(`Скорость корабля: ${speed}`);

// 3.1
function calculateFlightTime(distance, speed) {
  let time = distance / speed;
  console.log(`Время полета: ${time} часов`);
  return time;
}

// 3.2
function calculateFuelConsumption(time, speed) {
  let fuelConsumption = time * speed;
  console.log(`Расход топлива: ${fuelConsumption}`);
  return fuelConsumption;
}

// 3.3
function checkFuel(fuelConsumption) {
  if (currentFuel - fuelConsumption < 0) {
    console.log("Корабль ломается при нехватке топлива.");
    return false;
  } else {
    console.log("Полет прошел успешно.");
    return true;
  }
}

// 4.1
let starSystems = ["Солнечная система", "Альфа Центавра", "Сириус", "Проксима Центавра"];

// 4.2
for (let i = 0; i < starSystems.length; i++) {
  console.log(`Полет в звездную систему ${starSystems[i]}:`);
  let distance = Math.random() * 1000 + 1000;
  let time = calculateFlightTime(distance, speed);
  let fuelConsumption = calculateFuelConsumption(time, speed);
  let isFuelEnough = checkFuel(fuelConsumption);
  if (!isFuelEnough) {
    break;
  }
}