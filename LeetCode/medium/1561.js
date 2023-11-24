// Maximum Number of Coins You Can Get
const maxCoins = (piles) => {
   const descArray = piles.sort((a, b) => a - b);
   const bobCoin = descArray.length / 3;
   
   let result = 0;

   for (let i = bobCoin; i < descArray.length; i += 2) {
    result += descArray[i]
   }
   
   return result
};

// 반복문 초기 설정값도 고려