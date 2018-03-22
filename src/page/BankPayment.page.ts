import​ { $, ElementFinder, promise/*, browser, ProtractorExpectedConditions */} from​ 'protractor';

//const EC : ProtractorExpectedConditions = new ProtractorExpectedConditions(browser);

export​ class​ BankPayment {
    
    private​ get​ confirmOrder(): ElementFinder {
        return​ $('#cart_navigation > button > span');
    }
    
    public​ completeConfirm(): promise.Promise<void> {
        //browser.wait(EC.elementToBeClickable(this​.confirmOrder), 5000);
        return​ this​.confirmOrder.click();
    }
}