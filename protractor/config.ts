import { browser, Config } from 'protractor';
import { reporter } from​ './helpers/reporter';

export const config: Config = {
	framework: 'jasmine',
	SELENIUM_PROMISE_MANAGER: false,
	specs: ['../test/google.spec.js'],
	noGlobals: true,
	capabilities: {
		browserName: 'chrome',
		chromeOptions: {
			args: ['--headless', '--disable-gpu', '--window-size=800,600']
		}
	}, 
	onPrepare: () => {
		browser.ignoreSynchronization = true;
		reporter();
	}
}
