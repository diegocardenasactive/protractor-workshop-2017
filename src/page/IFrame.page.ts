import {ElementFinder, by, element, promise, browser } from 'protractor';

export class IFramePage {
    
    private get getFrame(): ElementFinder {
        return element(by.name('iframe1'));
    }

    public changeHeight(height: number): promise.Promise<void> {
        return browser.executeScript(`document.querySelector("#IF1").setAttribute('height', ${height});`);
    }

    public async getHeightFrame(): Promise<number> {
        const height = await this.getFrame.getAttribute('height');
        return Number(height);
    }
}