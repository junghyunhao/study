// *https://programmers.co.kr/learn/courses/30/lessons/64061

function solution (board, moves){
    let arr = [];
    moves.forEach(m=>{
      for(let i=0; i<board.length; i++){
        for(let j=0; j<board[i].length; j++){
          if(m===j+1){
            if(board[i][j]!==0){
              arr.push(board[i][j]);
              board[i][j] = 0;
              return;
            }
          }
        }
      }
    })
   
    let stack = [];
    for(let l=0; l<arr.length; l++){
      if(stack.length === 0){
        stack.push(arr[l]);
      }else{
        if(stack[stack.length-1] === arr[l]){
          stack.pop();
        }else{
          stack.push(arr[l]);
        }
      }
    }
    return arr.length - stack.length;
}


// ! refactoring

function solution (board, moves){
    let stack = [];
    let count = 0;
    for(let j=0; j<moves.length; j++){
      for(let i=0; i<board.length; i++){
          const value = board[i][moves[j]-1]
            if(value!==0){
              if(stack.length === 0){
                stack.push(value);
              }else{
                if(stack[stack.length-1] === value){
                  stack.pop();
                  count+=2;
                }else{
                  stack.push(value);
                }
              }
              board[i][moves[j]-1] = 0;
              break;
            }
          
        }
    }
    return count;
}