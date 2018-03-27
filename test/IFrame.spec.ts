import​ { browser,/*, ProtractorExpectedConditions*/} from​ 'protractor';
import { IFramePage } from '../src/page';

describe ('Ejecución de código javascript', () => {

    const iFramePage : IFramePage = new IFramePage();

    /*it('Cambiar altura de IFrame', async () => {
        await browser.get('http://toolsqa.com/automation-practice-form/');

        await browser.wait(EC.visibilityOf(element(by.name('iframe1'))), 5000);
        await iFramePage.changeHeight(200);
    
        await browser.wait(EC.visibilityOf(element(by.name('iframe1'))), 5000);
        expect(await iFramePage.getHeightFrame()).toBe(200);
    })*/

    beforeAll(async () => {
        await browser.get('http://toolsqa.com/iframe-practice-page/');
    });
    
    /*it('then should be a title', async () => {
        expect(await iFramePage.getTitle()).toBe('Sample Iframe page');
    });*/
    
    describe('when set the height of iframe', () => {
        beforeAll(async () => {
            await iFramePage.changeHeight(600);
        });
    
        it('then the height of iframe should be changed', async () => {
            expect(await iFramePage.getHeightFrame()).toBe(600);
        });
    
        /*describe('and switch to iframe', () => {
            const personalInformationPage = new PersonalInformationPage();
            
            beforeAll(async () => {
                await iFramePage.switchToFrame();
            });
        
            it('then should be have other title', async () => {
                expect(await personalInformationPage.getPageTitle()).toBe('Practice Automation Form');
            });
        
            describe('and return to main frame', () => {
                beforeAll(async () => {
                    await iFramePage.switchToMainPage();
                });

                it('then should be a title', async () => {
                    expect(await iFramePage.getTitle()).toBe('Sample Iframe page');
                });
            });
        });*/
    });
});