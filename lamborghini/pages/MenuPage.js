let Helper = require('../utils/Helper.js');

class MenuPage {
    constructor() {
        this.usedCarsButton = element(by.xpath("//span[text()='Used Cars']"));
        this.masterpieceButton = element(by.xpath("//span[text()='Masterpieces']"));
        this.ourCarButton = element(by.xpath("//span[text()='Our Cars']"));
    }

    chooseUsedCars() {
        return Helper.waitAndClick(this.usedCarsButton);
    }

    chooseMasterpiece() {
        return Helper.waitAndClick(this.masterpieceButton);
    }

    chooseCarSection(){
        return Helper.waitAndClick(this.ourCarButton);
    }

}

module.exports = new MenuPage();