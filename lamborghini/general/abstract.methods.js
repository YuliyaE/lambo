class AbstractElement {

    waitAndClick(element) {
        return this.waitUntilVisible(element).then(() => {
            return this.waitUntilClickable(element).then(() => {
                return element.click();
            })
        }).catch(message => {
            return Promise.reject(message.message);
        })
    }

    waitUntilClickable(element) {
        return browser.wait(protractor.ExpectedConditions.elementToBeClickable(element), 160000);
    }

    waitUntilVisible(element) {
        return browser.wait(protractor.ExpectedConditions.visibilityOf(element), 60000);
    }


    scroll(element) {
        return this.waitUntilClickable(element).then(() => {
            browser.executeScript("arguments[0].scrollIntoView();", element);
        })
    }

}

module.exports = new AbstractElement();