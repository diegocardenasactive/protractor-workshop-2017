import​ { $, ElementFinder, promise/*, browser, ProtractorExpectedConditions*/ } from​ 'protractor';

//const EC : ProtractorExpectedConditions = new ProtractorExpectedConditions(browser);

export​ class​ ProductAddedModal {
    
    private​ get​ proceedCheckoutItem(): ElementFinder {
        return​ $('#layer_cart .button-container > a');
    }
    
    public​ proceedCheckout(): promise.Promise<void> {
        //browser.wait(EC.elementToBeClickable(this​.proceedCheckoutItem), 5000);
        return​ this​.proceedCheckoutItem.click();
    }
}