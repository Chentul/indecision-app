
// sorting strings
const colors = ['black','yellow','blue','red','green','gray','white'];
console.log(colors);
console.log(colors.sort());


console.log();

// sorting numbers
const numbers = [100, 99, 1, 77, 83, 45];
console.log(numbers);
console.log(numbers.sort((a, b) => {
	return a - b;
}));

console.log();

// objects
const items = [
  { name: 'Edward', value: 21 },
  { name: 'Sharpe', value: 37 },
  { name: 'And', value: 45 },
  { name: 'The', value: -12 },
  { name: 'Magnetic' },
  { name: 'Zeros', value: 37 }
];

console.log(items.sort(( a, b) => {
	if(a.name > b.name)
		return 1;
	else
		return -1;
	// a must be equal to b
	return 0;
}));	