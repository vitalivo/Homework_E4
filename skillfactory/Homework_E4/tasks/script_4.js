// Задание 4.

// Реализовать следующее консольное приложение подобно примеру, который разбирался в видео. 
// Реализуйте его на прототипах.

// Определить иерархию электроприборов. Включить некоторые в розетку. Посчитать потребляемую мощность. 

// Таких приборов должно быть, как минимум, два (например, настольная лампа и компьютер). 
// Выбрав прибор, подумайте, какими свойствами он обладает.

// План:

// Определить родительскую функцию с методами, которые включают/выключают прибор из розетки.
// Создать делегирующую связь [[Prototype]] для двух конкретных приборов.
// У каждого из приборов должны быть собственные свойства и, желательно, методы, отличные от родительских методов.
// Создать экземпляры каждого прибора.
// Вывести в консоль и посмотреть результаты работы, гордиться собой. :)
// Общие требования:

// Имена функций, свойств и методов должны быть информативными.
// Соблюдать best practices:
// использование camelCase нотации для переменных и методов, PascalCase для названия функций-конструкторов и классов;
// информативные имена (а не a, b);
// четкая связь между классом и его экземплярами (класс описывает множество, а экземпляр конкретную реализацию);
// использование синтаксиса ES6 (кроме функции-конструкторов) и т. д.

// Родительская функция-конструктор для всех электроприборов
function ElectricalDevice(name, power) {
    this.name = name; 
    this.power = power; 
    this.isPlugged = false; 
}

// Метод для включения прибора в розетку
ElectricalDevice.prototype.plugIn = function () {
    if (!this.isPlugged) {
        this.isPlugged = true;
        console.log(`${this.name} включен(а) в розетку.`);
    } else {
        console.log(`${this.name} уже включен(а) в розетку.`);
    }
};

// Метод для выключения прибора из розетки
ElectricalDevice.prototype.unplug = function () {
    if (this.isPlugged) {
        this.isPlugged = false;
        console.log(`${this.name} выключен(а) из розетки.`);
    } else {
        console.log(`${this.name} уже выключен(а) из розетки.`);
    }
};

// Метод для расчета потребляемой мощности
ElectricalDevice.prototype.calculatePowerConsumption = function (hours) {
    if (this.isPlugged) {
        const consumption = (this.power * hours).toFixed(2);
        console.log(
            `${this.name} потребляет ${consumption} Вт за ${hours} час(ов).`
        );
        return consumption;
    } else {
        console.log(`${this.name} не подключен(а) к розетке.`);
        return 0;
    }
};

// Конструктор для настольной лампы
function Lamp(name, power, brightness) {
    ElectricalDevice.call(this, name, power);
    this.brightness = brightness; 
}

// Устанавливаем связь с прототипом родителя
Lamp.prototype = Object.create(ElectricalDevice.prototype);
Lamp.prototype.constructor = Lamp;

// Метод для изменения яркости лампы
Lamp.prototype.adjustBrightness = function (newBrightness) {
    this.brightness = newBrightness;
    console.log(`Яркость ${this.name} изменена на ${newBrightness} люмен.`);
};

// Конструктор для компьютера
function Computer(name, power, type) {
    ElectricalDevice.call(this, name, power);
    this.type = type;
}

// Устанавливаем связь с прототипом родителя
Computer.prototype = Object.create(ElectricalDevice.prototype);
Computer.prototype.constructor = Computer;

// Метод для вывода информации о типе компьютера
Computer.prototype.displayType = function () {
    console.log(`${this.name} является ${this.type}-компьютером.`);
};

// Создание экземпляров приборов
const deskLamp = new Lamp("Настольная лампа", 15, 800); 
const myComputer = new Computer("Компьютер", 300, "desktop");

// Вывод информации и взаимодействие с приборами
console.log("--- Настольная лампа ---");
deskLamp.plugIn(); 
deskLamp.adjustBrightness(1000); 
deskLamp.calculatePowerConsumption(5); 
deskLamp.unplug(); 

console.log("\n--- Компьютер ---");
myComputer.plugIn(); 
myComputer.displayType(); 
myComputer.calculatePowerConsumption(3); 
myComputer.unplug(); 