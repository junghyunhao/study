function solution (n, arr1, arr2) {
    function changeDecimalToBinary(arr){
      return arr.map(el=>{
      const binary = el.toString(2);
      let zero = '';
      if(binary.length < n){
        for(let z=0; z < n-binary.length; z++){
          zero += '0';  
        }
        
        return `${zero}${binary}`;
      }
      return binary;
      })
    }

    const newArr1 = changeDecimalToBinary(arr1);
    const newArr2 = changeDecimalToBinary(arr2);
    
    const answer = [];
  
    for(let i=0; i< n; i++){
      let element = '';

      for(let j=0; j<n; j++){
        element += (+newArr1[i][j] + +newArr2[i][j]) ? '#' : ' ';
      }

      answer.push(element);
    }

    return answer;
  }