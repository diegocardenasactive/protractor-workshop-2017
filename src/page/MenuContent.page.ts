import​ { $, ElementFinder, promise /*, browser, ProtractorExpectedConditions*/} from​ 'protractor';

//const EC : ProtractorExpectedConditions = new ProtractorExpectedConditions(browser);

export​ class​ MenuContentPage {
     
    public get​ tShirtMenu(): ElementFinder {
        return​ $('#block_top_menu > ul > li:nth-child(3) > a');
    }

    public​ goToTShirtMenu(): promise.Promise<void> {
        //browser.wait(EC.elementToBeClickable(this.tShirtMenu), 5000);
        return​ this.tShirtMenu.click();
    }

}
