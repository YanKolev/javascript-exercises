// const removeFromArray = function (arr) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === 3) {
//       arr.splice(i, 1);
//       i--;
//     }
//   }

//   return arr;
// };

const removeFromArray = function (arr, ...args) {
  let arr2 = arr.filter((a) => !args.includes(a));

  return arr2;
};

// Do not edit below this line
module.exports = removeFromArray;
