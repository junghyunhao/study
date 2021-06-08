process.stdin.setEncoding('utf8');
process.stdin.on('data', (data) => {
	const n = data.split(' ');
	const a = Number(n[0]);
	const b = Number(n[1]);

	let row = '';
	for (let i = 0; i < a; i++) {
		row += '*';
	}
	// repeat 매서드를 사용해서 풀었지만 너무 속도가 느려서 for loop와 foreach로 해결하는 것이 성능상 좋음
	// let row = '*';
	// row.repeat(a);

	for (let i = 0; i < b; i++) {
		console.log(row);
	}
});
