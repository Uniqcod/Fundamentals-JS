function buildWall(arr) {
  let sectionHeights = arr.map(Number);

  let concrete = [];
  let pesos = 0;
  let isFinished = false;
  // let newArr = [];

  while (!isFinished) {
      let curConcrete = 0;

      for (let index = 0; index < sectionHeights.length; index++) {
          let sectionHeight = sectionHeights[index];

          if (sectionHeight < 30) {
              sectionHeight++;
              sectionHeights.splice(index, 1, sectionHeight);
              // newArr.push(sectionHeight);
              curConcrete += 195;
          }
      }

      concrete.push(curConcrete);
      pesos += curConcrete * 1900;
      
      if (sectionHeights.every(s => s === 30)) {
        isFinished = true;
      }
      // sectionHeights = newArr;
    }

  console.log(concrete.join(', '));
  console.log(`${pesos} pesos`);
}
buildWall([21, 25, 28]);
buildWall([17]);
buildWall([17, 22, 17, 19, 17]);
