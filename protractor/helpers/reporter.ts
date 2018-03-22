import { DisplayProcessor, SpecReporter } from "jasmine-spec-reporter";

export let reporter = () => {
	jasmine.getEnv().addReporter(new SpecReporter({
		customProcessors: [DisplayProcessor],
	}));

	const { AwesomeReport } = require('jasmine-awesome-report');

	const configJasmineAwesome = {
		fullPath: 'C:/Users/user/Documents/Proyectos GitHub/Capacitacion protractor/protractor-workshop-2017/reports',
		fileName: 'awesome',
		merge: false
	};

	jasmine.getEnv().addReporter(AwesomeReport.getReport(configJasmineAwesome));
};


