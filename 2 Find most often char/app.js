function findMostIdenticalChars(string) {
  let biggestCount = 0;
  let mostCommonChar = '';

  for (let i = 0; i < string.length; i++) {
    let currChar = string[i];
    let tempCount = 0;
    for (let j = i; j < string.length; j++) {
      if (currChar === string[j]) {
        tempCount++;
      }
    }
    if (tempCount > biggestCount) {
      biggestCount = tempCount;
      mostCommonChar = string[i];
    }
  }

  console.log(`Most common char : ${mostCommonChar}\nNumber of repeats :${biggestCount}`);
}

findMostIdenticalChars('szxzshpswxspklxixrxtxaxlx');
