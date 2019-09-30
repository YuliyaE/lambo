const URL = 'https://www.lamborghiniporrentruy.ch/en';
let AbstractElement = require('../general/abstract.methods.js');

class MainPage {
    constructor() {
        this.menuButton = element(by.xpath("//button[@class='header-right-square hamburger']"));
        this.gotInfoButton = element(by.xpath("//*[@class='cookies application']//span[text()='Got it!']"));
    }

    open() {
        return browser.get(URL);
    }

    clickMenu() {
        AbstractElement.waitAndClick(this.menuButton);
    }

    closeCookieWindow() {
        AbstractElement.waitAndClick(this.gotInfoButton);
    }

}

module.exports = new MainPage();