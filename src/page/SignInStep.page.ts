import​ { $, ElementFinder, promise/*, browser, ProtractorExpectedConditions*/ } from​ 'protractor';

//const EC : ProtractorExpectedConditions = new ProtractorExpectedConditions(browser);

export​ class​ SignInStep {
    
    email: string = 'aperdomobo@gmail.com';
    password: string = 'WorkshopProtractor';

    private get inputEmail() : ElementFinder {
        return $('#email');
    }

    private get inputPassword() : ElementFinder {
        return $('#passwd');
    }

    private get submitLogin() : ElementFinder {
        return​ $('#SubmitLogin > span');
    }

    public​ signInAccount(): promise.Promise<void> {
        //browser.wait(EC.elementToBeClickable(this​.submitLogin), 5000);
        return​ this​.submitLogin.click();
    }

    public setEmail() : void {
        //browser.wait(EC.visibilityOf(this.inputEmail), 5000);
        this.inputEmail.sendKeys(this.email); 
        //browser.wait(EC.textToBePresentInElement(this.inputEmail, this.email), 5000);
    }

    public setPassword() : void {
        //browser.wait(EC.visibilityOf(this.inputPassword), 5000);
        this.inputPassword.sendKeys(this.password);
        //browser.wait(EC.textToBePresentInElement(this.inputPassword, this.password), 5000);
    }
}