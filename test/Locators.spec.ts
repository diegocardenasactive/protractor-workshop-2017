import​ { $, browser/*, ProtractorExpectedConditions*/, ExpectedConditions } from​ 'protractor';

import { PersonalInformation } from​ '../src/page';


describe ('Llenar formulario', () => {

    const personalInformationPage : PersonalInformation = new PersonalInformation();

    it('Practice Automation Form', async () => {
        await browser.get('http://toolsqa.com/automation-practice-form/');

        await​ personalInformationPage.fillForm({
            firstName: 'Alejandro',
            lastName: 'Perdomo',
            sex: 'Male',
            experience: 7,
            profession: ['Automation Tester'],
            tools: ['Selenium Webdriver'],
            continent: 'South America',
            commands: [
                'Browser Commands',
                'Navigation Commands',
                'Switch Commands',
                'Wait Commands',
                'WebElement Commands'
            ]
            });
    })
})
