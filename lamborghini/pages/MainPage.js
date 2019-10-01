const URL = 'https://www.lamborghiniporrentruy.ch/en';
let AbstractElement = require('../general/abstract.methods.js');

class MainPage {
    constructor() {
        this.menuButton = element(by.xpath("//button[@class='header-right-square hamburger']"));
        this.gotInfoButton = element(by.xpath("//*[@class='cookies application']//span[text()='Got it!']"));
        this.scrollButton = element(by.xpath("//div[@class='scroll header-right-square']"));
    }

    open() {
        return browser.get(URL);
    }

    clickMenu() {
        return AbstractElement.waitAndClick(this.menuButton);
    }

    closeCookieWindow() {
        this.gotInfoButton.isPresent().then(result => {
            if (result == true) {
                return AbstractElement.waitAndClick(this.gotInfoButton);
            }
        })
    }

    scrollWindow(){
        return AbstractElement.waitAndClick(this.scrollButton);
    }

}

module.exports = new MainPage();