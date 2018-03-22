import​ { $, ElementFinder, promise/*, browser, ProtractorExpectedConditions */} from​ 'protractor';

//const EC : ProtractorExpectedConditions = new ProtractorExpectedConditions(browser);

export​ class​ PaymentStep {
    
    private​ get​ payBankWire(): ElementFinder {
        return​ $('#HOOK_PAYMENT > div:nth-child(1) > div > p > a');
    }
    
    public​ payOrder(): promise.Promise<void> {
        //browser.wait(EC.elementToBeClickable(this​.payBankWire), 5000);
        return​ this​.payBankWire.click();
    }
}