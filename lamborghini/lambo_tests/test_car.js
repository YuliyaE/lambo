const MainPage = require('../pages/MainPage.js')
const MenuPage = require('../pages/MenuPage.js');
const UsedCarPage = require('../pages/UsedCarsPage.js');
const CarListPage = require('../pages/CarListPage.js');
const CarPage = require('../pages/CarPage.js');
const expectedCarSpeed = '351 KM/Hj';
const expectedCarPrice = 'CHF 111500';

describe("A suite", function () {
    it("Check speed of the car", function () {
        browser.ignoreSynchronization = true;
        return MainPage.open().then(() => {
            return MainPage.closeCookieWindow();
        }).then(() => {
            return MainPage.clickMenu();
            }).then(() => {
                return MenuPage.chooseCarSection();
            }).then(() => {
                return CarListPage.clickArrow();
            }).then(() => {
                return CarListPage.clickArrow();
            }).then(() => {
                return CarListPage.chooseCar();
            }).then(() => {
                return MainPage.closeCookieWindow();
            }).then(() => {
                return CarPage.chooseCarPerformance();
            }).then(() => {
                return CarPage.getCarSpeed();
            }).then((actualCarSpeed) => {
                console.log(actualCarSpeed);
                expect(actualCarSpeed).toEqual(expectedCarSpeed);
        }).catch(message => {
            Promise.reject(message.message);
        })

    });
});