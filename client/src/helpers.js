function getRandomArbitrary(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

export function mathsville (num) {
	if (num.length <= 3) return num;
	let parsed = parseFloat(num);
	if (num.length === 4) {
		let rounded = parsed.toPrecision(2).toString().slice(0,3);
		return `${rounded}K`
	}
	if (num.length === 5) {
		let rounded = parsed.toPrecision(2).toString().replace(/\./g, "").slice(0,2);
		return `${rounded}K`
	}
	if (num.length === 6) {
		let rounded = parsed.toPrecision(3).toString().replace(/\./g, "").slice(0,3);
		return `${rounded}K`	
	}
	if (num.length === 7) {
		let rounded = parsed.toPrecision(2).toString().slice(0,3);
		return `${rounded}M`	
	}
}

export function repliesRando (){
	let num = getRandomArbitrary(10,99)
	return `${num}K`
}

