const arr =["a","b","c"];
// memo a를 c 다음에 두고 싶다 -> 어떻게 해야할까?
// memo 1. a를 지운다
// arr.splice(0,1);
// memo 2. c뒤에 a를 새로 만든다
// arr.push("a") // * 성공!
// 마찬기지로 c를 a앞에 놓는 방법은
arr.splice(2,1);
arr.unshift("c")

console.log(arr);