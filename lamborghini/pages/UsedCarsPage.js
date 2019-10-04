let Helper = require('../utils/Helper.js');

class UsedCarsPage {
    constructor() {
        this.carMake = element(by.xpath("//div[@data-field='brand']"));
        this.car = element(by.xpath("//div[@class='input-with-dropdown__dropdown-scroller ps ps--active-y']//a[@class='option' and text()='BENTLEY']"));
        this.carModel = element(by.xpath("//div[@data-field='model']"));
        this.continentalModel = element(by.xpath("//a[@class='option' and text()='CONTINENTAL']"));
        this.searchButton = element(by.xpath("//span[contains(text(),'Search')]"));
        this.year = element(by.xpath("//div[@data-field='year']"));
        this.yearTo = element(by.xpath("//div[@data-choose-value-text='Choose Year To']"));
        this.yearNeeded = element(by.xpath("//div[@data-choose-value-text='Choose Year To']//a[@class='option' and text()='2015']"));
        this.exploreCar = element(by.xpath("//a[@class='more']//span[contains(text(), 'Explore More')]"));
        this.scrollButton = element(by.xpath("//div[@class='scroll header-right-square']"));
    }

    clickCarMake() {
        return Helper.waitAndClick(this.carMake);
    }

    chooseCar() {
        return Helper.waitAndClick(this.car);
    }

    chooseModel() {
        return Helper.waitAndClick(this.carModel);
    }

    enterModel() {
        return Helper.waitAndClick(this.continentalModel);
    }

    chooseYear() {
        return Helper.waitAndClick(this.year).then(() => {
            return Helper.waitAndClick(this.yearTo)
        }).then(() => {
            return Helper.waitAndClick(this.yearNeeded);
        })
    }

    searchCar() {
        return Helper.waitAndClick(this.searchButton);
    }

    clickExploreMore() {
        return Helper.waitAndClick(this.exploreCar);
    }

}

module.exports = new UsedCarsPage();