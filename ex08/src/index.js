function myMutation(arr) {
  newArr1 = Array.from(arr[0]);
  newArr2 = Array.from(arr[1]);

  if (newArr1.contains(newArr2)){
      return true;
  }
  return false;

  
}

console.log(myMutation(["Hello", "Women"]));
module.exports = myMutation;
