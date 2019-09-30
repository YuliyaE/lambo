let AbstractElement = require('../general/abstract.methods.js');

class CarListPage {
    constructor() {
        this.arrow = element(by.xpath("//i[@class='icon-arrow_thin_right']"));
        this.carName = element(by.xpath("//a[text()='Aventador SVJ Roadster']"));
    }

    clickArrow() {
    return AbstractElement.waitAndClick(this.arrow);
    }

    chooseCar(){
       return AbstractElement.waitAndClick(this.carName);
    }

}

module.exports = new CarListPage();