import​ { $, ElementFinder, promise/*, browser, ProtractorExpectedConditions */} from​ 'protractor';

//const EC : ProtractorExpectedConditions = new ProtractorExpectedConditions(browser);

export​ class​ SummaryStep {
    
    private​ get​ ProceedCheckout(): ElementFinder {
        return​ $('.cart_navigation span');
    }
    
    public​ sumaryProceedCheckout(): promise.Promise<void> {
        //browser.wait(EC.elementToBeClickable(this​.ProceedCheckout), 5000);
        return​ this​.ProceedCheckout.click();
    }
}