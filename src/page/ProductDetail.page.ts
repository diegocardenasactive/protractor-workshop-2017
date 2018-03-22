import​ { $, ElementFinder, promise/*, browser, ProtractorExpectedConditions */} from​ 'protractor';

//const EC : ProtractorExpectedConditions = new ProtractorExpectedConditions(browser);

export​ class​ ProductDetail {
    
    private​ get​ tShirtAddToCart(): ElementFinder {
        return​ $('#add_to_cart > button > span');
    }
    
    public​ addToCart(): promise.Promise<void> {
        //browser.wait(EC.elementToBeClickable(this.tShirtAddToCart), 5000);
        return​ this​.tShirtAddToCart.click();
    }
}