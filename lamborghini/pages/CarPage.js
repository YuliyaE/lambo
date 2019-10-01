let AbstractElement = require('../general/abstract.methods.js');

class CarPage {
    constructor() {
        this.carPerformance = element(by.xpath("//span[text()='Performance']"));
        this.carSpeed = element(by.xpath("//p[@class='spec-feature__value dont-break-out' and contains(text(), 'km/h')]"));
        this.carPrice = element(by.xpath("//span[@class='contact-entry__value dont-break-out' and contains(text(), 'CHF')]"));
    }

    chooseCarPerformance() {
        return AbstractElement.waitAndClick(this.carPerformance);
    }

    getCarSpeed() {
        return this.carSpeed.getText();
    }

    getCarPrice(){
        return this.carPrice.getText();
    }

}

module.exports = new CarPage();