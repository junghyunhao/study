function solution(n) {
	const isInt = Number.isInteger(Math.sqrt(n));

	return isInt ? (Math.sqrt(n) + 1) ** 2 : -1;
}
