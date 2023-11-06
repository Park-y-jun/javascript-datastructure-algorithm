// 해시 테이블은 key와 value로 데이터를 저장하는 자료구조.
//key값에 해시함수를 적용해서 고유의 index를 만들고, 이 index로 값을 저장, 탐색한다. 
// 실제 값이 저장되는 장소를 버킷, 슬롯 이라고 칭함
// 해시 방식으로 저장된 데이터를 이용할 때는 해시함수를 1번만 이용하면 됨으로 시간복잡도는 O(1)의 매우 빠른 데이터 처리를 할 수 있다.

class HashTable {
  constructor(size = 53) {
    this.keyMap = new Array(size);
  }

  hash(key) {
    //해시 반환 값 string의 요소 하나하나를 모두 더할 것
    let total = 0;
    // 소수를 사용해서 두개이상의 키가 같은 값을 가지는 것을 방지
    // 31은 일반적으로 충돌이 덜한 표본
    const multiplier = 31;
    // 해시 연산 대상 string의 최대 길이 제한 (처리속도)
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      //알파벳의 순서 도출 공식
      let value = char.charCodeAt(0) - 96;
      total = (total * multiplier + value) % this.keyMap.length;
    }
    return total;
  }

  //separate chaining
  //해댕 key에 해당하는 index가 이미 존재하는 경우를 대비하기 위해 하나의 인덱스에 중첩으로 여러개의 데이터가 존재할 수 있도록 배열의 형태를 구축
  set(key, value) {
    // 해시 함수 처리
    let index = this.hash(key);
    // 해당 버켓이 비어있는 상태면 배열(버켓) 생성
    if (!this.keyMap[index]) {
      this.keyMap[index] = [];
    }
    // 배열의 해당 인덱스에 키, 값 넣기
    this.keyMap[index].push([key, value]);
  }

  get(key) {
    // 해시 함수로 key 인덱스 파악
    let index = this.hash(key);
    //해당 인덱스에 해당하는 버켓의 [키, 값 탐색]
    if (this.keyMap[index]) {
      for (let i = 0; i < this.keyMap[index].length; i++) {
        if ((this.keyMap[index][i][0] === key)) {
          return this.keyMap[index][i][1];
        }
      }
    }
    return undefined;
  }
}
