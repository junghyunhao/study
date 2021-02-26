function slice(array, start, end) {
  let length = array == null ? 0 : array.length
  //length 0일 때
  if (!length) {
    return []
  }
  
  // start, end가 값이 존재하는지 판단
  start = start == null ? 0 : start
  end = end === undefined ? length : end

// 확인해야할 조건
  //start < 0 배열의 끝에서부터의 길이
  if (start < 0) {
    start = -start > length ? 0 : (length + start)
    
  }
  console.log("start", start)
  // end가 배열의 길이와 비교했을 때
  end = end > length ? length : end
  
  // end가 0보다 작을 때 배열의 끝에서부터의 길이
  if (end < 0) {
    end += length
  }
    console.log("end",end)
    
  // start와 end의 비교를 통해 length 결정
  length = start > end ? 0 : ((end - start) >>> 0)
  start >>>= 0
  console.log("length",length)
  
  let index = -1
  // 길이가 length인 빈배열을 만들어 원소를 하나씩 넣어주는 로직
  const result = new Array(length) 
  console.log(result)
  while (++index < length) {
    result[index] = array[index + start]
    console.log("re",result[0])
  }
  return result
}
