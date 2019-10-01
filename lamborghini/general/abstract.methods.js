class AbstractElement {

    waitAndClick(element) {
        return this.waitUntilClickable(element).then(() => {
                //console.log(`wait and click ${element.locator()} `)
                return element.click();
            }).catch(message => {
            browser.sleep(1000);
            element.click();
            return Promise.reject(message.message);
        })
    }

    waitUntilClickable(element) {
        return browser.wait(protractor.ExpectedConditions.elementToBeClickable(element), 160000);
    }

    waitUntilPresent(element) {
        return browser.wait(protractor.ExpectedConditions.presenceOf(element), 160000);
    }


    scroll(element) {
        return this.waitUntilClickable(element).then(() => {
            browser.executeScript("arguments[0].scrollIntoView();", element);
        })
    }

}

module.exports = new AbstractElement();