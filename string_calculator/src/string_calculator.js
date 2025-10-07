// StringCalculator.js
function StringCalculator() {}
StringCalculator.prototype.add = function(string_numbers) {
	let zahlen = [];
	for(let i = 1; i <= 100; i++){
		let x = i;

		if(i % 3 === 0){
			x = 'Fizz';
		}
		if(i % 5 === 0){
			x = 'Buzz';
		}
		zahlen.push(x);
        console.log(x);
    }
	return zahlen;
};
