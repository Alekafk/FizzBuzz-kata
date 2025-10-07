describe('String Calculator', function() {
	beforeEach(function() {
		calculator = new StringCalculator();
	});

	it('should return numbers 1-100', function() {
		expect(calculator.add('').length).toEqual(100);
	});

	it('should return every 3rd nr with Fizz', function() {
		expect(calculator.add('')[2]).toEqual('Fizz');
		expect(calculator.add('')[5]).toEqual('Fizz');
		expect(calculator.add('')[26]).toEqual('Fizz');
		expect(calculator.add('')[56]).toEqual('Fizz');
		expect(calculator.add('')[98]).toEqual('Fizz');
	});

	it('should return every 5th nr with Buzz', function() {
		expect(calculator.add('')[4]).toEqual('Buzz');
		expect(calculator.add('')[14]).toEqual('Buzz');
		expect(calculator.add('')[54]).toEqual('Buzz');
		expect(calculator.add('')[74]).toEqual('Buzz');
		expect(calculator.add('')[89]).toEqual('Buzz');
	});

});
