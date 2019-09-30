class AbstractElement {

    waitAndClick(element) {
        return this.waitUntilClickable(element).then(() => {
            return element.click();
        }).catch(message => {
            Promise.reject(message.message);
        })
    }

    waitUntilClickable(element) {
        return browser.wait(protractor.ExpectedConditions.elementToBeClickable(element), 60000);
    }

    scroll(element) {
        return this.waitUntilClickable(element).then(() => {
            browser.executeScript("arguments[0].scrollIntoView();", element);
        })
    }

}

module.exports = new AbstractElement();