let AbstractElement = require('../general/abstract.methods.js');

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
        return AbstractElement.waitAndClick(this.carMake);
    }

    chooseCar() {
        return AbstractElement.waitAndClick(this.car);
    }

    chooseModel() {
        return AbstractElement.waitAndClick(this.carModel);
    }

    enterModel() {
        return AbstractElement.waitAndClick(this.continentalModel);
    }

    chooseYear() {
        return AbstractElement.waitAndClick(this.year).then(() => {
            return AbstractElement.waitAndClick(this.yearTo)
        }).then(() => {
            browser.sleep(1000);
            return AbstractElement.waitAndClick(this.yearNeeded);
        })
    }

    searchCar() {
        return AbstractElement.waitAndClick(this.searchButton);
    }

    clickExploreMore() {
        return AbstractElement.waitAndClick(this.exploreCar);
    }

}

module.exports = new UsedCarsPage();