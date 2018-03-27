import​ { ElementFinder, element, by, browser} from​ 'protractor';
import { existsSync } from 'fs';
import * as remote from 'selenium-webdriver/remote';
import { resolve } from 'path';
import { DownloadService } from '../service/Download.service';

interface PersonalInformation {
    firstName: string;
    lastName: string;
    sex: string;
    experience: number;
    profession: string[];
    tools: string[];
    continent: string;
    commands: string[];
    file?: string;
    downloadFile?: boolean;
}

export​ class​ PersonalInformationPage {

    private get firstNameField(): ElementFinder {
        return element(by.name('firstname'));
    }
    
    private get lastNameField(): ElementFinder {
        return element(by.name('lastname'));
    }

    private get sendButton(): ElementFinder {
        return element(by.id('submit'));
    }

    private get uploadFileInput(): ElementFinder {
        return element(by.id('photo'));
    }

    private sexOption(name: string): ElementFinder {
        return element(by.css(`[name="sex"][value="${name}"]`));
    }

    private experienceOption(years: number): ElementFinder {
        return element(by.css(`[name="exp"][value="${years}"]`));
    }

    private professionOption(name: string): ElementFinder {
        return element(by.css(`[name="profession"][value="${name}"]`));
    }

    private toolsOption(name: string): ElementFinder {
        return element(by.css(`[name="tool"][value="${name}"]`));
    }

    private get linkDownloadFile(): ElementFinder {
        return element(by.linkText('Test File to Download'));
    }

    private continentOption(name: string): ElementFinder {
        return element(by.id('continents')).element(by.cssContainingText('option', name));
    }

    private async download(): Promise<void> {
        const link = await this.linkDownloadFile.getAttribute('href');
        const service = new DownloadService();
        await service.downloadFile(link, 'test-document.xlsx');
    }

    private async uploadFile(relativePath: string): Promise<void> {
        const fullPath = resolve(process.cwd(), relativePath);
    
        if (existsSync(fullPath)) {
            await browser.setFileDetector(new remote.FileDetector());
            await this.uploadFileInput.sendKeys(fullPath);
            await browser.setFileDetector(undefined);
        }
    }

    public async fillForm(form: PersonalInformation): Promise<void> {
        await this.firstNameField.sendKeys(form.firstName);
        await this.lastNameField.sendKeys(form.lastName);
        await this.sexOption(form.sex).click();
        await this.experienceOption(form.experience).click();
    
        for (const name of form.profession) {
          await this.professionOption(name).click();
        }

        if (form.file) {
            await this.uploadFile(form.file);
        }

        if (form.downloadFile) {
            await this.download();
        }

        for (const name of form.tools) {
          await this.toolsOption(name).click();
        }
    
        await this.continentOption(form.continent).click();
    }

    public async submit(form: PersonalInformation): Promise<void> {
        await this.fillForm(form);
        await this.sendButton.click();
    }

    public async getFilename() : Promise<string> {
        const fullPath: string = await this.uploadFileInput.getAttribute('value');
        return fullPath.split(/(\\|\/)/g).pop();
    }
}