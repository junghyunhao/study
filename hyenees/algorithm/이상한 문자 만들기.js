// https://programmers.co.kr/learn/courses/30/lessons/12930

function solution (s) {
    let answerArr = [];
    const sArr = s.split(' ');
    for(let i=0; i<sArr.length; i++){
      let word='';
      for(let j=0; j<sArr[i].length; j++){
        if(j%2){
          word+=sArr[i][j].toLowerCase();
        }else{
          word+=sArr[i][j].toUpperCase();
        }
      }
      answerArr.push(word);
    }
    return answerArr.join(' ');
}

// ! word+=sArr[i][j][(j%2) ? "toLowerCase" : "toUpperCase"]()