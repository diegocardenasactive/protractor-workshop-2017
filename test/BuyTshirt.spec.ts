import​ {  $,   browser, ProtractorExpectedConditions } from​ 'protractor';
import​ { MenuContentPage } from​ '../src/page';
import { AddressStepPage } from '../src/page';
import { BankPayment } from '../src/page';
import { OrderResume } from '../src/page';
import { PaymentStep } from '../src/page';
import { ProductAddedModal } from '../src/page';
import { ProductDetail } from '../src/page';
import { ProductList } from '../src/page';
import { ShippingStep } from '../src/page';
import { SignInStep } from '../src/page';
import { SummaryStep } from '../src/page';

const EC : ProtractorExpectedConditions = new ProtractorExpectedConditions(browser);

describe('Buy a t-shirt', () => {
    const​ menuContentPage: MenuContentPage = new​ MenuContentPage();
    const​ productList: ProductList = new​ ProductList();
    const​ productDetail: ProductDetail = new​ ProductDetail();
    const​ productAddedModal: ProductAddedModal = new​ ProductAddedModal();
    const​ summaryStep: SummaryStep = new​ SummaryStep();
    const​ signInStep: SignInStep = new​ SignInStep();
    const​ addressStepPage: AddressStepPage = new​ AddressStepPage();
    const​ shippingStep: ShippingStep = new​ ShippingStep();
    const​ paymentStep: PaymentStep = new​ PaymentStep();
    const​ bankPayment: BankPayment = new​ BankPayment();
    const​ orderResume: OrderResume = new​ OrderResume();
    
    it('then should be bought a t-shirt', async​ () => {

        await​ browser.get('http://automationpractice.com/');
        //browser.wait(EC.elementToBeClickable($('#block_top_menu > ul > li:nth-child(3) > a')),5000);
        await menuContentPage.goToTShirtMenu(); 
        browser.wait(EC.visibilityOf($('#center_column > ul > li > div > div.left-block > div > a.product_img_link > img')),5000);
        await productList.goToTShirtDetail();

        browser.wait(EC.elementToBeClickable($('#add_to_cart > button > span')), 5000);
        await productDetail.addToCart();

        browser.wait(EC.visibilityOf($('#layer_cart .button-container > a')), 5000);
        browser.wait(EC.elementToBeClickable($('#layer_cart .button-container > a')), 5000);
        await productAddedModal.proceedCheckout();

        browser.wait(EC.elementToBeClickable($('.cart_navigation span')),5000);
        await summaryStep.sumaryProceedCheckout();

        //await browser.wait(EC.visibilityOf(this.inputEmail),5000);
        await signInStep.setEmail();
        //await browser.wait(EC.visibilityOf(this.inputPassword),5000);
        await signInStep.setPassword();
        //await browser.wait(EC.elementToBeClickable(this​.submitLogin),5000);
        await signInStep.signInAccount();
        //await browser.wait(EC.elementToBeClickable(this.proceedCheckout),5000);
        await addressStepPage.chooseAddress();
        //await browser.wait(EC.elementToBeClickable(this.checkTermsService),5000);
        await​ shippingStep.agreeTermsService();
        //await browser.wait(EC.elementToBeClickable(this.proceedCheckout),5000);
        await shippingStep.continueCheckout();
        //await browser.wait(EC.elementToBeClickable(this​.payBankWire),5000);
        await paymentStep.payOrder();
        //await browser.wait(EC.elementToBeClickable(this​.confirmOrder),5000);
        await bankPayment.completeConfirm();
        //await​(browser.sleep(5000));
        await​ expect(orderResume.orderResume()).toBe('Your order on My Store is complete.');

        //browser.wait(EC.elementToBeClickable(this.tShirtMenu));
        //await $('#block_top_menu > ul > li:nth-child(3) > a').click;

    })
});
