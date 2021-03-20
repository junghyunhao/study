function basePullAt(array, indexes) {
    // 제거할 인덱스배열의 길이
    var length = array ? indexes.length : 0,
    // 제거할 인덱스배열의 마지막인덱스
        lastIndex = length - 1;
    
    // 제거할 인덱스배열의 가장 마지막 원소부터
    while (length--) {
      var index = indexes[length];
      // 제거할 인덱스배열의 마지막인덱스 이거나 이전의 index값이 현재 index값과 같지 않을 때
      if (length == lastIndex || index !== previous) {
        var previous = index;

        if (isIndex(index)) {
          // array의 index번째에서 1개 제거
          splice.call(array, index, 1);
        } else {
        // array에서 index의 제거 여부(boolean)
          baseUnset(array, index);
        }
      }
    }
    return array;
}