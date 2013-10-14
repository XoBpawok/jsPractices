function Pi (n) {
	var i, pi;
	if (n <= 20) {
		pi = 0;
		for (i = 0; i <= n; i++) {
			pi += ( 1 / Math.pow(16, i) ) * ( 4 / ( 8 * i + 1 ) - 2 / ( 8 * i + 4 ) - 1 / ( 8 * i + 5 ) - 1 / ( 8 * i + 6 ));
		};	
		console.log(pi.toFixed(n));
		return pi;
	} else {
		console.log('Sorry, n must be between 0 and 20 ');
		return -1;
	}
}

function fibonacciSequence (n) {
	var fibonacciSequence = [1,2];
	for (var i = 2; i <= n; i++) {
		fibonacciSequence[i] = fibonacciSequence[i-1] + fibonacciSequence[i-2];
	}
	console.log(fibonacciSequence);
	return fibonacciSequence;
}

function tileCost (h, w, cost) {
	var result = w * h / cost;
	console.log (result)
	return result;
}

function converter(number, numericSystem) {
	var result;
	switch(numericSystem) {
		case 2: 
			result = toBinnary(number);
			break;
		case 10:
			result = toDecimal(number);
			break;
		default:
			console.log("Sorry, we don't support your numeric system");
			result = -1
	}

	console.log(result);
	return result;

	function toDecimal (number) {
		var result = 0,
			numArray,
			numArrayLength;

		numArray = new String(number);

		numArray = numArray.split('');
		numArrayLength = numArray.length;
		for (var i = numArrayLength; i != 0; i--) {
			if (numArray[i] > 1 ) {
				console.log("it's not binary format");
				result = undefined;
				return result;
			}
			result += numArray[i - 1] == 1 ? Math.pow(2, i - 1) : 0;
		}

		return result;
	}

	function toBinnary (number) {
		var result;
		
		if (number % 1 == 0) {
			result = stringReverse(calculate(number));
			result = Number(result);
		} else {
			console.log('Please, enter integer value');
		}

		return result;

		function calculate (number) {
			var result = '';

			if (number >= 1) {
				result += number % 2 + calculate(parseInt(number / 2));
			}

			return result;
		}

		function stringReverse (string) {
			return string.split("").reverse().join("");
		}
	}
}


function factorial (number) {

	var result;
	if (number % 1 == 0) {
		result = factorialCalc(number);
	} else {
		console.log('Number must be integer!');
		result = -1;
	}
	

	console.log(result);
	return result;

	function factorialCalc (number) {
		var result = number;
		if (number > 1) {
			result *= factorial(number-1);
		} else {
			result = 1;
		}
		return result;
	}
}

function matrixMultiplication (mat1, mat2) {
	var result = [],
		i=0,
		j=0,
		k=0,
		n=mat2.length;
	for (i; i < n; i++) {
		result[i] = []
		for (j = 0; j < n; j++) {
			result[i][j] = 0;
			for (k = 0; k < n; k++) {
				result[i][j] += mat1[i][k] * mat2[k][j];
			}
			
		}
	}
	console.log(result);
	return result;
}

function bubbleSotring (array, callback) {
	var i, j, tmp,
		arrayLength = array.length;
	for (i = 0; i < arrayLength - 1; i++) {
		for (j = 0; j < arrayLength - i; j++) {
			if (callback(array[j], array[j + 1])) {
				tmp = array[j];
				array[j] = array[j + 1];
				array[j + 1] = tmp;
			}
		}
	}
	console.log(array);
	return array;
}

function bubbleIntCallback (a,b) {
	if (a > b) {
		return 1;
	} else {
		return 0;
	}
}

