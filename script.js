function indexOfIgnoreCase(s1, s2) {
	if(s1.length == 0 || s2.length == 0){
		return -1
	}
	return s1.toUpperCase().indexOf(s2.toUpperCase())
}

// Please do not change the code below
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
alert(indexOfIgnoreCase(s1, s2));
