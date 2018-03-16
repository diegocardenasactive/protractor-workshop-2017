import​ { $, ElementFinder, promise } from​ 'protractor';

export​ class​ SignInStep {
    
    private​ get​ tShirtImage(): ElementFinder {
        return​ $('#center_column > ul > li > div > div.left-block > div > a.product_img_link > img');
    }
    
    public​ goToTShirtImage(): promise.Promise<void> {
        return​ this​.tShirtImage.click();
    }
}