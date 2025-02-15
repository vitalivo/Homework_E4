// Задание 5.

// Переписать консольное приложение из предыдущего юнита на классы.

// Общие требования:

// Имена классов, свойств и методов должны быть информативными;
// Соблюдать best practices;
// Использовать синтаксис ES6.

// Базовый класс для всех электроприборов
class ElectricalDevice {
    constructor(name, power) {
        this.name = name; 
        this.power = power; 
        this.isPlugged = false; 
    }

    // Метод для включения прибора в розетку
    plugIn() {
        if (!this.isPlugged) {
            this.isPlugged = true;
            console.log(`${this.name} включен(а) в розетку.`);
        } else {
            console.log(`${this.name} уже включен(а) в розетку.`);
        }
    }

    // Метод для выключения прибора из розетки
    unplug() {
        if (this.isPlugged) {
            this.isPlugged = false;
            console.log(`${this.name} выключен(а) из розетки.`);
        } else {
            console.log(`${this.name} уже выключен(а) из розетки.`);
        }
    }

    // Метод для расчета потребляемой мощности
    calculatePowerConsumption(hours) {
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
    }
}

// Класс для настольной лампы
class Lamp extends ElectricalDevice {
    constructor(name, power, brightness) {
        super(name, power); 
        this.brightness = brightness; 
    }

    // Метод для изменения яркости лампы
    adjustBrightness(newBrightness) {
        this.brightness = newBrightness;
        console.log(`Яркость ${this.name} изменена на ${newBrightness} люмен.`);
    }
}

// Класс для компьютера
class Computer extends ElectricalDevice {
    constructor(name, power, type) {
        super(name, power); 
        this.type = type; 
    }

    // Метод для вывода информации о типе компьютера
    displayType() {
        console.log(`${this.name} является ${this.type}-компьютером.`);
    }
}

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