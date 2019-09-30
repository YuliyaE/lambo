let MainPage = require('../pages/main.page.js')
let MenuPage = require('../pages/menu.page.js');
let UsedCarPage = require('../pages/used.cars.page.js');
let CarListPage = require('../pages/CarListPage.js');
let CarPage = require('../pages/car.page.js');
let expectedCarSpeed = '351 km/h';

beforeAll(() => {
    browser.manage().window().maximize();
})

describe("A suite", function () {
    it("", function () {
        browser.ignoreSynchronization = true;
        return MainPage.open().then(() => {
            return MainPage.clickMenu();
            /*  }).then(() => {
                  return MenuPage.chooseCarSection();
              }).then(() => {
                  return CarListPage.clickArrow();
              }).then(() => {
                  return CarListPage.clickArrow();
              }).then(() => {
                  return CarListPage.chooseCar();
              }).then(() => {
                  return CarPage.chooseCarPerformance();
              }).then(() => {
                  return CarPage.getCarSpeed();
              }).then((actualCarSpeed) => {
                  expect(actualCarSpeed).toEqual(expectedCarSpeed);*/
        }).then(() => {
            return MenuPage.chooseUsedCars();
        }).then(() => {
            return MainPage.closeCookieWindow();
        }).then(() => {
            return UsedCarPage.clickCarMake();
        }).then(() => {
            return UsedCarPage.chooseCar();
        }).catch(message => {
            Promise.reject(message.message);
        })

    });
});