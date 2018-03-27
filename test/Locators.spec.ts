import​ { browser/*, ProtractorExpectedConditions*/} from​ 'protractor';

import { PersonalInformationPage } from​ '../src/page';
import { DownloadService } from '../src/service/Download.service';

describe ('Llenar formulario', async () => {

    const personalInformationPage : PersonalInformationPage = new PersonalInformationPage();

    it('Practice Automation Form', async () => {
        await browser.get('http://toolsqa.com/automation-practice-form/');

        await personalInformationPage.fillForm({
            firstName: 'Diego',
            lastName: 'Cardenas',
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
            ],
            file: './resources/descarga.jpg',
            downloadFile: true
        });
    });

    it('Cargar el archivo al servidor', async () => {
        expect(await personalInformationPage.getFilename()).toBe('descarga.jpg');
    });

    it('then should be created a file', async () => {
        const service = new DownloadService();
        const file = await service.readFileFromTemp('test-document.xlsx');
        expect(file.byteLength).toBeGreaterThanOrEqual(8000);
    });
})
