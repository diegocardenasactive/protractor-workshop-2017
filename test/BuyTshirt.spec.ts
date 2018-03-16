import​ { $, browser } from​ 'protractor';
/*import​ { MenuContentPage } from​ '../src/page';
import { AddressStepPage } from '../src/page';
import { BankPayment } from '../src/page';
import { OrderResume } from '../src/page';
import { PaymentStep } from '../src/page';
import { ProductAddedModal } from '../src/page';
import { ProductDetail } from '../src/page';
import { ProductList } from '../src/page';
import { ShippingStep } from '../src/page';
import { SignInStep } from '../src/page';
import { SummaryStep } from '../src/page';*/

describe('Buy a t-shirt', () => {
    /*const​ menuContentPage: MenuContentPage = new​ MenuContentPage();
    const​ addressStepPage: AddressStepPage = new​ AddressStepPage();
    const​ bankPayment: BankPayment = new​ BankPayment();
    const​ orderResume: OrderResume = new​ OrderResume();
    const​ paymentStep: PaymentStep = new​ PaymentStep();
    const​ productAddedModal: ProductAddedModal = new​ ProductAddedModal();
    const​ productDetail: ProductDetail = new​ ProductDetail();
    const​ productList: ProductList = new​ ProductList();
    const​ shippingStep: ShippingStep = new​ ShippingStep();
    const​ signInStep: SignInStep = new​ SignInStep();
    const​ summaryStep: SummaryStep = new​ SummaryStep();*/

    beforeEach(() => {
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 120000;
    });
    
    it('then should be bought a t-shirt', async​ () => {
        await​ browser.get('http://automationpractice.com/');
        await​(browser.sleep(10000));
        await​ $('#block_top_menu > ul > li:nth-child(3) > a').click();
        await​(browser.sleep(3000));
        await $('#center_column > ul > li > div > div.left-block > div > a.product_img_link > img').click();
        await​(browser.sleep(3000));
        await​ $('#add_to_cart > button > span').click();
        await​(browser.sleep(3000));
        await​ $('#layer_cart .button-container > a').click();
        await​(browser.sleep(3000));
        await​ $('.cart_navigation span').click();
        await​(browser.sleep(3000));
        await​ $('#email').sendKeys('aperdomobo@gmail.com');
        await​ $('#passwd').sendKeys('WorkshopProtractor');
        await​ $('#SubmitLogin > span').click();
        await​(browser.sleep(3000));
        await​ $('#center_column > form > p > button > span').click();
        await​(browser.sleep(3000));
        await​ $('#cgv').click();
        await​(browser.sleep(3000));
        await​ $('#form > p > button > span').click();
        await​(browser.sleep(3000));
        await​ $('#HOOK_PAYMENT > div:nth-child(1) > div > p > a').click();
        await​(browser.sleep(3000));
        await​ $('#cart_navigation > button > span').click();
        await​(browser.sleep(3000));
        await​ expect($('#center_column > div > p > strong').getText()).toBe('Your order on My Store is complete.');
    });
});
