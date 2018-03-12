import { browser } from 'protractor';

describe('Given a SDET learning protractor', () => {
	describe('when open google page', () => {
		beforeEach(async() => {
			browser.get('http://www.google.com'); 	
		});
		
		it('then should have a title', ()=> {
			expect(browser.getTitle()).toEqual('Google');
		});
	});
});