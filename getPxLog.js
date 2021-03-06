let cdf = 0;
let minLength = 1;
let maxLength = 9;

Array.apply(null, Array(maxLength - minLength + 1))
	.map(() => {
		minLength++;
		return minLength - 1;
		// create array with number between minLength and maxLength (inclusive)
	})
	.map((x) => {
		let p = Math.log10((x+1)/x);
		console.log(`P(${x}): ` + p.toFixed(3));
		cdf += p;
		console.log(`f(${x}): ` + cdf.toFixed(3) + '\n');
	});
