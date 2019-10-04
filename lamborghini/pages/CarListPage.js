let Helper = require('../utils/Helper.js');

class CarListPage {
    constructor() {
        this.arrow = element(by.xpath("//button[@class='swiper-button-next']"));
        this.carName = element(by.xpath("//a[text()='Aventador SVJ Roadster']"));
    }

    clickArrow() {
        return Helper.waitAndClick(this.arrow);
    }

    chooseCar() {
        return Helper.waitAndClick(this.carName);
    }

}

module.exports = new CarListPage();