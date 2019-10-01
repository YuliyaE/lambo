const MainPage = require('../pages/MainPage.js')
const MenuPage = require('../pages/MenuPage.js');
const UsedCarPage = require('../pages/UsedCarsPage.js');
const CarPage = require('../pages/CarPage.js');
const expectedCarPrice = 'CHF 111500';

describe("Check car indicators", function () {
    it("Open list of cars", function () {
        browser.manage().window().maximize();
        browser.ignoreSynchronization = true;
        return MainPage.open().then(() => {
            return MainPage.closeCookieWindow();
        }).then(() => {
            return MainPage.clickMenu();
        }).then(() => {
            return MenuPage.chooseUsedCars();
        }).then(() => {
            return MainPage.closeCookieWindow();
        }).then(() => {
            return UsedCarPage.clickCarMake();
        }).catch(message => {
            Promise.reject(message);
        })
    });
    it("Choose a car", function () {
        //browser.sleep(500);
        return UsedCarPage.chooseCar().then(() => {
            return UsedCarPage.chooseModel()
        }).then(() => {
         //   browser.sleep(1000);
            return UsedCarPage.enterModel();
        }).then(() => {
            return UsedCarPage.chooseYear();
        }).then(() => {
            return UsedCarPage.searchCar();
        }).catch(message => {
            Promise.reject(message);
        })
    });

    it("Check car price", function () {
        return MainPage.scrollWindow().then(() => {
            return UsedCarPage.clickExploreMore();
        }).then(() => {
            return CarPage.getCarPrice();
        }).then((actualCarPrice) => {
          //  browser.sleep(1000);
            console.log(actualCarPrice);
            expect(expectedCarPrice).toEqual(actualCarPrice);
        }).catch(message => {
            Promise.reject(message);
        })
    });

});