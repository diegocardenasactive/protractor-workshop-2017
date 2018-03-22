import​ { $, ElementFinder, promise/*, browser, ProtractorExpectedConditions */ } from​ 'protractor';

//const EC : ProtractorExpectedConditions = new ProtractorExpectedConditions(browser);

export​ class​ ShippingStep {
    
    private​ get​ checkTermsService(): ElementFinder {
        return​ $('#cgv');
    }

    private​ get​ proceedCheckout(): ElementFinder {
        return $('#form > p > button > span')​;
    }

    public agreeTermsService(): promise.Promise<void>{
        //browser.wait(EC.elementToBeClickable(this.checkTermsService), 5000);
        return this​.checkTermsService.click();
    }

    public continueCheckout(): promise.Promise<void>{
        //browser.wait(EC.elementToBeClickable(this.proceedCheckout), 5000);
        return this​.proceedCheckout.click();
    }
}