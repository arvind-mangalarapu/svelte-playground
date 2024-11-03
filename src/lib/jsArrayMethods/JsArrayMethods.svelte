<script>
	let names = ['Alice', 'Bob', 'Charlie']; // Initial array of names
	let names2 = ['David', 'Eve', 'Frank']; // Second array of names
	let names3 = ['Grace', 'Heidi', 'Ivan']; // Third array of names

	// .toString converts the array into a string
	let stringNames = names.toString(); // Converts to "Alice,Bob,Charlie"

	// .join joins the array into a string using a specified separator
	let stringNamesJoin = names.join(' & '); // Joins to "Alice & Bob & Charlie"

	// .concat combines two or more arrays into one
	let namesJoined = names.concat(names2); // Combines to ["Alice", "Bob", "Charlie", "David", "Eve", "Frank"]
	let namesJoined2 = names.concat(names2, names3); // Combines to ["Alice", "Bob", "Charlie", "David", "Eve", "Frank", "Grace", "Heidi", "Ivan"]

	// .push adds an element to the end of the array
	names.push('Jack'); // Adds 'Jack' to the end: ["Alice", "Bob", "Charlie", "Jack"]

	// .pop removes the last element from the array and returns it
	let removedName = names.pop(); // Removes 'Jack', resulting in ["Alice", "Bob", "Charlie"]

	// .shift removes the first element from the array and returns it
	let firstNameRemoved = names.shift(); // Removes 'Alice', resulting in ["Bob", "Charlie"]

	// .unshift adds an element to the beginning of the array
	names.unshift('Zara'); // Adds 'Zara' at the start: ["Zara", "Bob", "Charlie"]

	// .slice creates a shallow copy of a portion of an array
	let slicedNames = names.slice(1, 3); // Copies elements from index 1 to 2: ["Bob", "Charlie"]

	// .splice changes the contents of an array by removing or replacing existing elements
	names.splice(1, 1, 'Ben'); // Removes 1 element at index 1 and adds 'Ben': ["Zara", "Ben", "Charlie"]

	// .filter creates a new array with all elements that pass the test implemented by the provided function
	let filteredNames = names.filter((name) => name.length > 3); // Returns names longer than 3 characters: ["Zara", "Charlie"]

	// .map creates a new array populated with results of calling a provided function on every element in the calling array
	let mappedNames = names.map((name) => name.toLowerCase()); // Converts all names to lowercase: ["zara", "ben", "charlie"]

	// .reduce executes a reducer function on each element of the array, resulting in a single output value
	let reducedNames = names.reduce((acc, curr) => acc + ' | ' + curr); // Concatenates all names: "Zara | Ben | Charlie"
</script>

<main class="bg-black h-full w-screen">
	<div class="h-full w-full flex flex-col gap-3 max-w-[90%] mx-auto pt-5">
		<h1>JavaScript Array Methods</h1>

		<p class="!text-white">
			let names = ['Alice', 'Bob', 'Charlie'];
			<br />
			let names2 = ['David', 'Eve', 'Frank'];
			<br />
			let names3 = ['Grace', 'Heidi', 'Ivan'];
		</p>

		<h2>1). toString converts the array into a string</h2>
		<p>
			let stringNames = names.toString();
			<br />
			This method converts the array into a comma-separated string.
		</p>
		<pre>  => {stringNames}</pre>

		<h2>2). join joins the array into a string</h2>
		<p>
			let stringNamesJoin = names.join(' & ');
			<br />
			This method joins all elements of the array into a single string using '&' as a separator.
		</p>
		<pre>  => {stringNamesJoin}</pre>

		<h2>3). concat combines two arrays</h2>
		<p>
			let namesJoined = names.concat(names2);
			<br />
			This method combines two arrays into one.
			<br />
			let namesJoined2 = names.concat(names2, names3);
			<br />
			This combines three arrays into one.
		</p>
		<pre>  => {namesJoined}</pre>
		<pre>  => {namesJoined2}</pre>

		<h2>4). push adds an element to the end of the array</h2>
		<p>
			names.push('Jack');
			<br />
			This method adds a new element ('Jack') at the end of the array.
		</p>
		<pre>  => {names}</pre>

		<h2>5). pop removes the last element from the array</h2>
		<p>
			let removedName = names.pop();
			<br />
			This method removes and returns the last element from the array.
		</p>
		<pre>  => {removedName}</pre>

		<h2>6). shift removes the first element from the array</h2>
		<p>
			let firstNameRemoved = names.shift();
			<br />
			This method removes and returns the first element from the array.
		</p>
		<pre>  => {firstNameRemoved}</pre>

		<h2>7). unshift adds an element to the beginning of the array</h2>
		<p>
			names.unshift('Zara');
			<br />
			This method adds a new element ('Zara') at the beginning of the array.
		</p>
		<pre>  => {names}</pre>

		<h2>8). slice creates a shallow copy of a portion of an array</h2>
		<p>
			let slicedNames = names.slice(1, 3);
			<br />
			This method creates a new array containing elements from index 1 up to (but not including) index
			3.
		</p>
		<pre>  => {slicedNames}</pre>

		<h2>9). splice changes the contents of an array</h2>
		<p>
			names.splice(1, 1, 'Ben');
			<br />
			This method removes one element at index 1 and inserts 'Ben' in its place.
		</p>
		<pre>  => {names}</pre>

		<h2>10). filter creates a new array with elements that pass the test</h2>
		<p>
			let filteredNames = names.filter(name => name.length > 3);
			<br />
			This method creates a new array with elements that have more than three characters.
		</p>
		<pre>  => {filteredNames}</pre>

		<h2>11). map creates a new array with results of calling a function</h2>
		<p>
			let mappedNames = names.map(name => name.toLowerCase());
			<br />
			This method creates a new array with all elements converted to lowercase.
		</p>
		<pre>  => {mappedNames}</pre>

		<h2>12). reduce executes a reducer function on each element</h2>
		<p>
			let reducedNames = names.reduce((acc, curr) => acc + ' | ' + curr);
			<br />
			This method concatenates all elements into a single string separated by '|'.
		</p>
		<pre>  => {reducedNames}</pre>
	</div>
</main>

<style>
	h1 {
		font-size: 24px;
		font-weight: 600;
		color: red;
		text-decoration: underline;
	}
	h2 {
		font-size: 24px;
		font-weight: 600;
		color: greenyellow;
		text-decoration: underline;
	}

	p {
		font-size: 18px;
		font-weight: 600;
		color: blueviolet;
	}

	pre {
		font-size: 18px;
		font-weight: 600;
		color: aqua;
	}
</style>
