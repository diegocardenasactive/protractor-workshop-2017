import​ { $, ElementFinder, promise, /*browser, ProtractorExpectedConditions*/ } from​ 'protractor';

//const EC : ProtractorExpectedConditions = new ProtractorExpectedConditions(browser);

export​ class​ OrderResume {
    
    messageSuccessful: string = '';

    private​ get​ showInformationOrderConfirmation(): ElementFinder {
        return​ $('#center_column > div > p > strong');
    }
    
    public​ orderResume(): promise.Promise<string> {
        //browser.wait(EC.visibilityOf(this​.showInformationOrderConfirmation), 5000);
        return​ this​.showInformationOrderConfirmation.getText();
    }
}