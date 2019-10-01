let AbstractElement = require('../general/abstract.methods.js');

class CarListPage {
    constructor() {
        this.arrow = element(by.xpath("//button[@class='swiper-button-next']"));
        this.carName = element(by.xpath("//a[text()='Aventador SVJ Roadster']"));
    }

    clickArrow() {
        return AbstractElement.waitAndClick(this.arrow);
    }


    chooseCar() {
        return AbstractElement.waitAndClick(this.carName);
    }

}

module.exports = new CarListPage();