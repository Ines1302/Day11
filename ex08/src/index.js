function myMutation(arr) {
  var string1 = arr[0];
  var string2 = arr[1];

  string1.toLowerCase();
  string2.toLowerCase();

  return { string1, string2 };
}

console.log(myMutation(["Hello World", "Pretty Women"]));
module.exports = myMutation;
