import​ { $, ElementFinder, promise,/*, browser, ProtractorExpectedConditions */
ElementArrayFinder,
$$} from​ 'protractor';

//const EC : ProtractorExpectedConditions = new ProtractorExpectedConditions(browser);

export​ class​ ProductList {
    
    private get productContainerList(): ElementArrayFinder {
        return $$('.product-container');
    }
    
    private findByProduct(productName: string): ElementFinder {
        return this.productContainerList.filter(
            (item: ElementFinder) =>
                item.$('.product-name').getText().then(
                    (text: string) => text.includes(productName)
                )
            )
            .first();
    }
    
    public selectProduct(productName: string): promise.Promise<void> {
        return this.findByProduct(productName).$('img').click();
    }



    private​ get​ tShirtImage(): ElementFinder {
        return​ $('#center_column > ul > li > div > div.left-block > div > a.product_img_link > img');
    }
    
    public​ goToTShirtDetail(): promise.Promise<void> {
        //browser.wait(EC.visibilityOf(this.tShirtImage), 5000);
        return​ this​.tShirtImage.click();
    }
}