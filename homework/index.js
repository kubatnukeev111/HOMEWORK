//1.1
let ship = prompt("Введите название корабля:");
//1.2 
let fuelLevel = prompt("Введите текущее количество топлива в корабле:");
//1.3
let maxFuelLevel = prompt("Введите максимальное количество топлива в корабле:");
//1.4
let shipSpeed = prompt("Введите скорость корабля:");

//2.1
alert("Корабль готов к вылету!");
// 2.2

alert("Текущее количество топлива в корабле: " + fuelLevel);
// 2.3

alert("Максимальное количество топлива в корабле: " + maxFuelLevel);
// 2.4

alert("Скорость корабля: " + shipSpeed);

3.1
let distance = prompt('Введите расстояние до первой планеты')
time = 0
function calculateFlightTime(distance, shipSpeed) {
  time = distance / shipSpeed;
}
calculateFlightTime(distance, shipSpeed);
alert("Время полета до звездной системы: " + time + " часов");
// 3.2

let fuelConsumption = 0
function calculateFuelConsumption(time, shipSpeed) {
  fuelConsumption = shipSpeed / time;
  alert("Расход топлива во время полета: " + fuelConsumption + " литров");
}
calculateFuelConsumption(shipSpeed, time);
// 3.3
function checkFuelRemaining(fuelConsumption, distance, time) {
  remaining = distance / fuelConsumption / time
  if (remaining <= 200) {
    alert("Корабль ломается при нехватке топлива");
  } else {
    alert("Полет прошел успешно");
  }
}
checkFuelRemaining(fuelConsumption, distance, time);

let planetName = ['saturn', 'verena', 'mars'];
for (let i = 0; i < planetName.length; i++) {
  alert(`Полет в звездную систему ${planetName[i]}:`);
  let distance = Math.random() * 1000 + 1000;
  let time = calculateFlightTime(distance, speed);
  let fuelConsumption = calculateFuelConsumption(time, speed);
  let isFuelEnough = checkFuel(fuelConsumption);
  if (!isFuelEnough) {
    break;
  }
}

