import​ { $, ElementFinder, promise/*, browser, ProtractorExpectedConditions */} from​ 'protractor';

//const EC : ProtractorExpectedConditions = new ProtractorExpectedConditions(browser);

export​ class​ ProductList {
    
    private​ get​ tShirtImage(): ElementFinder {
        return​ $('#center_column > ul > li > div > div.left-block > div > a.product_img_link > img');
    }
    
    public​ goToTShirtDetail(): promise.Promise<void> {
        //browser.wait(EC.visibilityOf(this.tShirtImage), 5000);
        return​ this​.tShirtImage.click();
    }
}