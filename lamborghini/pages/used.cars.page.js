let AbstractElement = require('../general/abstract.methods.js');

class UsedCarsPage{
    constructor(){
        this.carMake = element(by.xpath("//*[contains(text(), 'Make')]"));
        this.car = element(by.xpath("//a[@class='option' and text()='LAMBORGHINI']"));
    }

    clickCarMake(){
        AbstractElement.waitAndClick(this.carMake);
    }

    chooseCar(){
        AbstractElement.waitAndClick(this.car);
    }

}

module.exports = new UsedCarsPage();