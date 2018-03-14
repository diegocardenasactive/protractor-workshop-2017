import { browser, Config } from 'protractor';
<<<<<<< HEAD
import { reporter } from​ './helpers/reporter';
=======
import {reporter } from './helpers/reporter';
>>>>>>> master

export const config: Config = {
	framework: 'jasmine',
	SELENIUM_PROMISE_MANAGER: false,
	specs: ['../test/google.spec.js'],
	noGlobals: true,
	onPrepare: () => {
		browser.ignoreSynchronization = true;
		reporter();
	}
}
