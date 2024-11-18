<script lang="ts">
	function digitize(n) {
		return n.toString().split('').reverse().join('');
	}

	function positiveSum(arr) {
		let result = 0;
		for (let i = 0; i < arr.length; i++) {
			if (arr[i] > 0) {
				result += arr[i];
			}
		}
		return result;
	}

	function repeatStr(n, s) {
		let result = '';
		for (let i = 0; i < n; i++) {
			result += s;
		}
		return result;
	}

	function booleanToString(b) {
		//your code here
		return b.toString();
	}

	function rentalCarCost(d) {
		// Your solution here
		if (d < 3) {
			return d * 40;
		} else if (d < 7) {
			return d * 40 - 20;
		} else {
			return d * 40 - 50;
		}
	}

	function setAlarm(employed, vacation) {
		return employed && !vacation;
	}

	const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
		// TODO
		return distanceToPump <= mpg * fuelLeft;
	};

	function squareSum(numbers) {
		let sum = 0;
		for (let i = 0; i < numbers.length; i++) {
			sum += Math.pow(numbers[i], 3);
		}
		return sum;
	}

	function disemvowel(str) {
		str = str.replace(/[aeiou]/gi, '');

		return str;
	}
	function descendingOrder(n) {
		//...
		return Number(String(n).split('').sort().reverse().join(''));
	}
	function sumTwoSmallestNumbers(numbers) {
		numbers.sort((a, b) => a - b);
		return numbers[0] + numbers[1];
	}
	function nbYear(p0, percent, aug, p) {
		// your code
		let years = 0;
		while (p0 < p) {
			p0 += Math.floor((p0 * percent) / 100) + aug;
			years++;
		}
		return years;
	}

	function printerError(s) {
		// your code

		let errors = 0;
		for (let i = 0; i < s.length; i++) {
			if (s[i] < 'a' || s[i] > 'm') {
				errors++;
			}
		}
		return errors + '/' + s.length;
	}

	function findShort(s) {
		return Math.max(...s.split(' ').map((word) => word.length));
	}

	function litres(time) {
		return Math.floor(time * 3);
	}

	function invert(array) {
		for (let i = 0; i < array.length; i++) {
			array[i] = array[i] * -1;
		}
		return array;
	}
	const reverseSeq = (n) => {
		let arr = [];
		for (let i = n; i > 0; i--) {
			arr.push(i);
		}
		return [...arr];
	};

	function getGrade(s1, s2, s3) {
		// Code here
		let avg = (s1 + s2 + s3) / 3;
		if (avg >= 90) return 'A';
		else if (avg >= 80) return 'B';
		else if (avg >= 70) return 'C';
		else if (avg >= 60) return 'D';
		else return 'F';
	}

	function past(h, m, s) {
		return h * 3600000 + m * 60000 + s * 1000;
	}

	function stringToArray(string) {
		return string.split('  ').map((word) => word.charAt(0).toUpperCase() + word.slice(1));
	}

	// function greet() {
	// 	/*
	// 	⢰⣿⣯⠷⠶⠶⣤⣄⣀⣀⠀⠀⠠⢄⣀⣀⣠⣤⣤⠤⣤⣤⣤⣤⣤⣄⣀
	// ⠀⠈⢽⣆⢿⣿⣟⢲⣮⣭⣭⣝⢛⣛⣩⣭⡵⢖⢶⣖⣒⣚⣖⣚⣃⠻⡷⢈⡷⣄
	// ⠀⠀⠀⠹⢮⣿⣿⡿⢛⡍⣘⢸⡿⣎⣾⡥⡧⢈⣼⢷⠶⠭⡘⡣⣞⢲⠞⠳⠾⢈⣆
	// ⠀⠀⠀⣠⢖⡼⢣⣴⣿⡷⡿⡏⡗⡻⠩⢱⠿⣬⢱⠻⠺⠓⠍⡻⢸⠂⣟⣸⠅⡚⢙⡆
	// ⠀⠀⣾⣳⢛⣼⣿⣿⠫⠉⣧⡼⡊⢒⣱⢺⣃⣿⠰⡇⢀⠂⠂⠁⠝⣦⣏⣼⣆⠃⠰⢷
	// ⠀⣾⣻⢧⣿⣿⣿⣿⡷⠞⡟⠐⠏⡀⠈⠁⡀⠂⠉⡀⠈⡀⠄⢶⠙⠳⡅⢨⡽⣄⢁⡸⡄
	// ⢸⣇⡿⢾⣹⣿⣻⠏*/ return 'hello world!'; /*⠒⠘⠣⠤⠇
	// ⢸⢿⡇⣿⣿⣿⣼⣃⡧⡬⡅⣧⠅⡀⡀⠈⢇⣉⡸⠃⡀⡀⡀⢻⡒⢤⢉⠏⡁⡏⠙⠛⡇
	// ⢸⢸⡿⢋⣿⣿⣿⣗⣞⡠⠤⢤⡀⡀⡀⡀⡀⠘⡀⡀⡀⡀⡀⠘⣇⡗⠸⡅⡳⢘⣞⢠⡇
	// ⢸⣾⡇⣾⣿⣿⡿⡿⠒⢪⣈⣁⣀⣀⣀⣐⠒⡖⠲⠄⡀⡀⢀⡀⠠⠌⣛⢤⣏⡿⣾⢸⠃
	// ⢸⣿⣧⣿⣿⠶⠛⠛⠉⠉⠉⠀⠀⠀⠀⠉⠉⠉⠙⠛⠛⠓⠦⢵⣉⠛⢯⠻⠹⣳⢬⢻⡀
	// ⠘⡇⣿⠟⢁⣴⣶⣶⣶⣤⣤⡀⡀⡀⡀⠀⠴⠶⠿⠟⠛⠛⠓⠦⠌⠒⠾⣎⢣⠚⣶⢸⡇
	// ⠀⢳⢹⡄⡹⠉⣴⡶⣴⣌⡹⢽⡄⡀⠀⡀⢀⡴⠟⢻⣷⠦⣵⡀⡀⡀⡀⠈⢣⡍⢿⢸⡇
	// ⠀⠈⡏⣇⠱⠚⢿⡄⠈⠋⠀⠘⣿⡀⠀⡀⡀⠠⣔⣂⣀⡀⠤⡀⡀⡀⡀⡀⢸⠛⣷⢸⠇
	// ⠀⠀⣧⢹⠸⡀⠙⠓⠂⡀⡀⡀⣟⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⠳⢸⡀⠂⢸
	// ⠀⠀⣽⢸⡇⡀⡀⡀⡀⡀⡀⡀⠇⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⢸⡃⠀⡞
	// ⠀⠀⢹⢸⣇⣹⡀⡀⡀⡀⡀⠘⡀⡀⡀⡀⠀⠀⡀⡀⡀⢀⡀⡀⡀⡀⡀⡀⢸⡋⠁⣷
	// ⠀⠀⠈⡏⣿⢳⢆⡀⡀⡀⠁⢶⣤⡀⢀⠐⠊⠛⡀⡀⡀⡀⡀⠑⡀⡀⡀⢀⣼⡇⡀⢿⡀
	// ⠀⠀⠀⢹⣹⣎⣷⣦⡀⡀⡀⡀⠉⠉⠁⡀⡀⠀⠀⢀⣀⡔⠂⡀⡀⡀⡀⣼⣿⡀⢠⣏⣷⣄
	// ⠀⠀⠀⠀⢷⣿⡼⣿⣧⡀⣀⣀⣀⣠⣤⣤⡤⠖⠋⠉⠁⡀⡀⡀⡀⢀⡠⣿⡟⡀⣬⣶⣿⣯⣓⢦⣄
	// ⠀⠀⠀⠀⠈⠻⣿⣽⣿⣯⡙⢫⣉⡁⡀⡀⡀⡀⠄⡀⡀⡀⡀⡀⡘⢹⣷⠋⡀⢴⠿⣿⠟⠡⠌⠑⠨⠙⠶⣄⡀
	// ⠀⠀⠀⠀⠀⠀⠘⢿⣿⣿⣷⣤⠙⠳⢶⣶⢞⠃⡀⡀⡀⡀⣤⣈⣰⡟⠁⡀⢠⠎⠠⡿⡀⡀⡀⡀⡀⡀⡀⡀⠉⠓⢦⣄
	// ⠀⠀⠀⠀⠀⠀⠀⠀⠹⣿⣿⣿⣡⡀⠈⡉⡀⡀⡀⡀⡀⢀⣼⡾⢏⡀⡀⣠⠏⡀⡀⡇⡀⡀⡀⡀⡀⡀⡀⡀⠂⠈⡀⠈⠛⢦⡀
	// ⠀⠀⠀⠀⠀⠀⠀⠀⠀⢹⣿⣿⣿⣷⣾⣷⡀⠤⡀⢀⣤⣿⣿⠄⡡⡠⢞⠡⡀⡀⢠⣇⡞⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⠹⣆
	// ⠀⠀⠀⠀⠀⠀⠀⠀⠀⣴⣿⣿⣿⣿⣿⣿⣷⣶⣿⣿⣿⡾⣋⢄⡞⢡⠞⠐⡀⡀⡀⣷⣷⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡘⢧⡀
	// ⠀⠀⠀⠀⠀⠀⠀⣠⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣟⣵⠋⡴⢛⡀⡀⡀⡀⠠⣿⢿⠆⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⢀⣀⡀⡀⠂⢙⠳⢦⡀
	// ⠀⠀⠀⠀⠀⠀⢸⣿⣿⣿⣿⣿⣿⣿⡿⣿⣿⣿⣿⣿⣿⡟⣡⠞⠐⠁⡀⠇⡀⡀⣤⣿⡿⠞⠋⠁⡀⡀⡀⡀⡀⡀⡀⡀⠈⠛⠻⣿⣰⣆⣀⡀⠙⢦⡀
	// ⠀⠀⠀⠀⠀⠀⣿⣿⣿⣿⣿⣿⣿⣿⣿⣯⡻⢿⣿⣿⠋⡴⢫⣆⡴⠞⠁⡀⣀⠲⡀⡀⢀⣰⠶⢿⠟⠛⠛⠛⠚⠓⡀⡀⡀⡀⡀⡀⠉⢹⠿⣷⠄⠤⠙⣆
	// ⠀⠀⠀⠀⠀⢠⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣻⣷⡟⠡⡞⠽⠓⠁⡀⢀⣰⡾⠇⡀⡀⢠⣿⡁⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⢸⣇⠘⡀⠘⣧⢂
	// ⠀⠀⠀⠀⠀⢸⣿⣿⣿⣿⣿⣿⣿⣿⡿⣿⣿⣿⣿⡷⠉⠁⡀⡀⣴⣾⠟⡀⡀⡀⢰⡟⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⠈⢹⡆⡀⡀⠸⡆⢆
	// ⠀⠀⠀⠀⠀⣿⣿⣿⣿⣿⣿⣿⣿⡟⣿⣿⣿⣿⣿⠢⡀⠚⡀⢼⣿⢣⡀⡀⡀⡀⢼⡇⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⢰⢸⡇⡀⡀⠆⢿⢸⡀
	// ⠀⠀⠀⠀⢸⣿⣿⣿⣿⣿⣿⣿⣿⣼⣿⣿⣿⡆⠉⡀⡀⠆⡀⢸⡷⠂⡀⡀⡀⡀⣾⠇⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⠈⠺⠅⡀⡀⠈⠸⣇⢇
	// ⠀⠀⠀⠀⣿⣿⣿⣿⣿⣿⣿⣻⣿⣿⣿⣟⠳⠁⠁⡀⣸⡀⡀⢸⣧⡀⡀⡀⡀⡀⣿⣇⡀⡀⡀⡀⡀⡀⡀⡀⡀⠀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡖⡀⡀⡀⡀⠠⢻⡸⡄
	// ⠀⠀⠀⠀⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡷⡀⡀⡁⣸⢁⣌⣻⡀⡀⡀⡀⡀⡀⣿⣿⡀⡀⡀⡀⡀⡀⡀⡀⠀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⢀⡿⡀⡀⡀⡀⢸⡘⡇⣷
	// ⠀⠀⠀⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⢻⡏⣿⣢⣖⢻⣴⣿⣼⣧⡀⡀⡀⡀⡀⣟⣿⡀⡀⡀⡀⡀⡀⡀⠀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⣸⠃⡀⡀⡀⢀⠠⡇⡇⣿
	// ⠀⠀⠀⠸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣝⣿⡹⣿⣿⣿⣿⣿⣿⣿⣗⡀⡀⡀⡀⣿⡅⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⣿⡀⡀⡀⡀⢈⢰⢳⡇⣿
	// ⠀⠀⠀⠀⣿⣻⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⡀⠃⢛⣿⣿⣿⣿⣿⣿⣿⣶⡀⡀⡀⣿⠁⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡏⡀⡀⣠⣋⣼⣿⣸⣇⣿
	// ⠀⠀⠀⠀⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡗⣧⠸⣨⡹⢿⣿⣿⣿⣿⣿⣿⣆⡀⠰⣿⠂⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⣧⣤⣬⣶⣿⣿⣿⣿⢸⡏
	// ⠀⠀⠀⠀⠀⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣴⣶⠛⣮⣇⣿⣿⣿⣿⣿⣿⠆⠘⠛⠃⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⣿⣿⣿⣿⣿⣿⣿⣻⣿⡇
	// ⠀⠀⠀⠀⠀⠈⢻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⢿⠟⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⠀⠀⠀⡀⡀⡀⡀⡀⡀⡀⡀⢠⣿⣿⣿⣿⣿⣿⣿⣿⣿⣧
	// ⠀⠀⠀⠀⠀⠀⠀⠙⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡟⠈⢠⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⠀⠀⡀⠀⡀⡀⡀⡀⡀⡀⡀⡀⢠⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡆
	// ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣧⣤⠤⠄⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⠚⢃⣴⣿⣿⡷⣟⡿⣿⣿⣿⣧
	// 							⠙⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣧⣤⠤⠄⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⠚⢃⣴⣿⣿⡷⣿⣿⣧

	// */
	// }

	function filter_list(l) {
		return l.filter((item) => typeof item === 'boolean');
	}
	const validatePIN = (pin) => /^\d{4}$|^\d{6}$/.test(pin);

	function greet2(name, owner) {
		// Add code here
		if (name === owner) {
			return 'Hello boss';
		} else {
			return 'Hello guest';
		}
	}

	function isIsogram(str) {
		str = str.toLowerCase();
		for (let i = 0; i < str.length; i++) {
			for (let j = i + 1; j < str.length; j++) {
				if (str[i] === str[j]) {
					return false;
				}
			}
		}
		return true;
	}

	function countSheeps(sheep) {
		let count = 0;
		for (let i = 0; i < sheep.length; i++) {
			if (sheep[i] === true) {
				count++;
			}
		}
		return count;
	}

	function greet3(name) {
		//your code here
		return 'Hello, ' + name + ' how are you doing today?';
	}

	function removeSmallest(numbers) {
		let min = Math.min(...numbers);
		let index = numbers.indexOf(min);
		return [...numbers.slice(0, index), ...numbers.slice(index + 1)];
	}

	function likes(names) {
		// TODO
		let num = names.length;
		if (num === 0) {
			return 'no one likes this';
		} else if (num === 1) {
			return names[0] + ' likes this';
		} else if (num === 2) {
			return names[0] + ' and ' + names[1] + ' like this';
		} else if (num === 3) {
			return names[0] + ', ' + names[1] + ' and ' + names[2] + ' like this';
		} else {
			return names[0] + ', ' + names[1] + ' and ' + (num - 2) + ' others like this';
		}
	}

	function getCount(str) {
		let count = 0;
		for (let i = 0; i < str.length; i++) {
			if (str[i] === 'a' || str[i] === 'e' || str[i] === 'i' || str[i] === 'o' || str[i] === 'u') {
				count += 1;
			}
		}
		return count;
	}

	let n = getCount(
		'aeiouuhbdefkfvjhwdkjhnnvdkjn;vjklwnljksdqwnqlhddohieaouieuueoiaeaueioaueoaieuiaoaeioueaduoiieuieauiuo'
	);

	// let n = likes(['Alex', 'Jacob', 'Mark', 'Max']);
	// let n = removeSmallest([2, 3, 1, 4, 5, 2, 5]);
	// let n = greet3('abhi');
	// let n = countSheeps([
	// 	false,
	// 	false,
	// 	true,
	// 	false,
	// 	true,
	// 	true,
	// 	true,
	// 	true,
	// 	true,
	// 	false,
	// 	true,
	// 	false,
	// 	true,
	// 	false,
	// 	false,
	// 	true,
	// 	true,
	// 	true,
	// 	true,
	// 	true,
	// 	false,
	// 	false,
	// 	true,
	// 	false
	// ]);
	// let n = isIsogram('mose');
	// let n = greet('abhi', 'abhi');
	// let n = validatePIN('1245');
	// let n = filter_list([
	// 	1,
	// 	2,
	// 	'a',
	// 	'b',
	// 	true,
	// 	false,
	// 	2 + 2 === 4,
	// 	2 - 3 === 1,
	// 	2 * 3 === 6,
	// 	'hello'
	// ]);
	// let n = greet();
	// let n = stringToArray('hello world');
	// let n = past(10, 1, 1);
	// let n = getGrade(65, 90, 93);
	// let n = reverseSeq(5);
	// let n = invert([1, 2, -3, 4, -5]);\
	// let n = litres(2.5);
	// let n = findShort('bitcoin take over the world maybe who knows perhaps');
	// $: n = printerError('aaaxbbbbbbbbyyyyyyyyyyyyhwawwwwwiwjjjwwm');
	// $: n = nbYear(50, 5, 100, 500);
	// $: n = sumTwoSmallestNumbers([5, 8, 12, 19, 22]);
	// $: n = descendingOrder(123411335622);
	// let n = disemvowel('This website is for losers LOL!');
	// $: n = squareSum([1, 2, 3, 4, 88, 99]);
	// $: n = zeroFuel(50, 25, 2);
	// $: n = setAlarm(false, true);
	// let n = rentalCarCost(5);
	// let n = rentalCarCost(8);
	// let n = booleanToString(true);
	// let n = repeatStr(333, '*');
	// $: n = positiveSum([1, 2, 3, -4, -5]);
	// $: n = digitize(12345);
	// $: n = digitize('arvind');
</script>

<div
	class="flex flex-col gap-10 justify-center items-center flex-wrap h-screen w-screen bg-black text-white"
>
	<h1 class="text-5xl">{n}</h1>

	<!-- <div class="h-96 w-96 bg-red-500 border relative after">
		<h1 class="text-5xl">Hello edfcwfcf</h1>
	</div>

	<ul>
		<li class="list-item relative">hello 1</li>
		<li class="list-item relative">hello 2</li>
		<li class="list-item relative">hello 3</li>
		<li class="list-item relative">hello 4</li>
	</ul> -->
</div>

<style>
	.before::before {
		content: '';
		position: absolute;
		top: 0px;
		left: -99px;
		height: 0;
		width: 0;
		border-left: 50px solid transparent;
		border-right: 50px solid #ef4444;
		border-top: 50px solid #ef4444;
		border-bottom: 50px solid transparent;
		border-top-left-radius: 30px;
		z-index: 2;
	}

	.before::after {
		content: '';
		position: absolute;
		top: -1px;
		left: -101px;
		height: 0;
		width: 0;
		border-left: 50px solid transparent;
		border-right: 50px solid #fff;
		border-top: 50px solid #fff;
		border-top-left-radius: 30px;
		border-bottom: 50px solid transparent;
		border-style: dotted dashed solid double sol #ffffff;
		z-index: 1;
	}

	.after::before {
		content: '';
		position: absolute;
		bottom: 0;
		right: -99px;
		height: 0;
		width: 0;
		border-left: 50px solid #ef4444;
		border-right: 50px solid transparent;
		border-top: 50px solid transparent;
		border-bottom: 50px solid #ef4444;
		border-top-right-radius: 30px;
		z-index: 2;
		border-bottom-right-radius: 30%;
		border-top-right-radius: 50%;
	}

	.after::after {
		content: '';
		position: absolute;
		bottom: -1px;
		right: -101px;
		height: 0;
		width: 0;
		border-left: 50px solid #fff;
		border-right: 50px solid transparent;
		border-top: 50px solid transparent;
		border-bottom: 50px solid #fff;
		border-top-right-radius: 30px;
		z-index: 1;
	}

	.list-item {
		list-style-type: none;
		border-left: solid 1px #fff;
		border-top: solid 1px #fff;
		border-bottom: solid 1px #fff;
		width: 200px;
		height: 50px;
		text-align: center;
		line-height: 50px;
		border-top-left-radius: 25px;
		border-bottom-left-radius: 25px;
		margin-bottom: 48px;
	}
	.list-item:not(:first-child)::after {
		content: '';
		position: absolute;
		height: 50px;
		border-top: solid 1px #fff;
		border-bottom: solid 1px #fff;
		border-right: 1px solid #fff;
		width: 50px;
		border-top-right-radius: 25px;
		border-bottom-right-radius: 25px;
		right: -25px;
		top: -50px;
	}
</style>
