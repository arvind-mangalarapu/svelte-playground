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

	function greet(name, owner) {
		// Add code here
		if (name === owner) {
			return 'Hello boss';
		} else {
			return 'Hello guest';
		}
	}

	let n = greet('abhi', 'abhi');

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

<div class="flex justify-center items-center flex-wrap h-screen w-screen bg-black text-white">
	<h1 class="text-5xl">{n}</h1>
</div>
