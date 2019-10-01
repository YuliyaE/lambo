let AbstractElement = require('../general/abstract.methods.js');

class MenuPage {
    constructor() {
        this.usedCarsButton = element(by.xpath("//span[text()='Used Cars']"));
        this.masterpieceButton = element(by.xpath("//span[text()='Masterpieces']"));
        this.ourCarButton = element(by.xpath("//span[text()='Our Cars']"));
    }

    chooseUsedCars() {
        return AbstractElement.waitAndClick(this.usedCarsButton);
    }

    chooseMasterpiece() {
        return AbstractElement.waitAndClick(this.masterpieceButton);
    }

    chooseCarSection(){
        return AbstractElement.waitAndClick(this.ourCarButton);
    }

}

module.exports = new MenuPage();