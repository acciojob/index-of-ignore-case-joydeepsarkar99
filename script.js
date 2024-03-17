function indexOfIgnoreCase(s1, s2) {
  let newS1 = s1.toUpperCase()
	let newS2 = s2.toUpperCase()
	return newS1.search(newS2)
}

Please do not change the code below
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
alert(indexOfIgnoreCase(s1, s2));
