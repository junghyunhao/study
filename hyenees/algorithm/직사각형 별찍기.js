// * https://programmers.co.kr/learn/courses/30/lessons/12969

process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const n = data.split(" ");
    const a = Number(n[0]), b = Number(n[1]);
    for (var i = 0; i < b; i++) {
        const arr = [];
        for (var j = 0; j < a; j++) {
            arr.push('*');
        }
        console.log(arr.join(''));
    }
});
