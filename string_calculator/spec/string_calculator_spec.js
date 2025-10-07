describe('String Calculator', function() {
	beforeEach(function() {
		calculator = new StringCalculator();
	});

	it('should return numbers 1-100', function() {
		expect(calculator.add('').length).toEqual(100);
	});
});
