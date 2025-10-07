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
		expect(calculator.add('')[19]).toEqual('Buzz');
		expect(calculator.add('')[54]).toEqual('Buzz');
		expect(calculator.add('')[79]).toEqual('Buzz');
		expect(calculator.add('')[94]).toEqual('Buzz');
	});


	it('should return every 3rd AND 5th nr with FizzBuzz', function() {
		expect(calculator.add('')[14]).toEqual('FizzBuzz');
		expect(calculator.add('')[29]).toEqual('FizzBuzz');
		expect(calculator.add('')[59]).toEqual('FizzBuzz');
		expect(calculator.add('')[89]).toEqual('FizzBuzz');
	});

});
