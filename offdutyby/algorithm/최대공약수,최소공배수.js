function solution(n, m) {
	const GCD = (a, b) => {
		if (b === 0) return a;
		return GCD(b, a % b);
	};
	const LCM = (a, b) => (a * b) / GCD(a, b);
	return [GCD(n, m), LCM(n, m)];
}
