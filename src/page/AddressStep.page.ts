import​ { $, ElementFinder, promise/*, browser, ProtractorExpectedConditions */} from​ 'protractor';

//const EC : ProtractorExpectedConditions = new ProtractorExpectedConditions(browser);

export​ class​ AddressStepPage {
    
    private​ get​ proceedCheckout(): ElementFinder {
        return​ $('#center_column > form > p > button > span');
    }
    
    public​ chooseAddress(): promise.Promise<void> {
        //browser.wait(EC.elementToBeClickable(this.proceedCheckout), 5000);
        return​ this​.proceedCheckout.click();
    }
}
