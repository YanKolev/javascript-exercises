const repeatString = function (string, num) {
  //since we need to repeat a string we will need to start with a variable that
  //holds empty sting

  let repString = ""; // will store the final repeated string

  if (num < 0) {
    return "ERROR";
  }

  for (let i = 0; i < num; i++) {
    repString += string;
  }

  return repString;
};
// Do not edit below this line
module.exports = repeatString;
