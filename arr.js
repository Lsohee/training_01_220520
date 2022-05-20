const arr =["a","b","c","d","e","f"];
// memo a를 c 다음에 두고 싶다 -> 어떻게 해야할까?
// memo 1. a를 지운다
// arr.splice(0,1);
// memo 2. c뒤에 a를 새로 만든다
// arr.push("a") // * 성공!
// 마찬기지로 c를 a앞에 놓는 방법은
// arr.splice(2,1);
// arr.unshift("c")



// element1을 첫번째로 옮기는 함수
// function comefirst(element1){
//   let vlaue = arr.indexOf(element1);
//   arr.splice(vlaue,1)
//   arr.unshift(element1);
//   console.log(arr);
// }

// comefirst(arr[3]);

// element2를 마지막으로 옮기는 함수 
function comeLast(element2){
  let vlaue = arr.indexOf(element2);
  arr.splice(vlaue,1)
  arr.push(element2)
  console.log(arr)
}
comeLast(arr[2]);