const poke = {
  a:"꿈이 아파 잠들지 못하는밤",
  b:"작은 숨소리 마저 아려와",
  c:"그림자 뒤로 숨고만 싶은 밤",
  d: "누군가의 온기가 필요한 밤",
  e:"홀로 외로운 날 받아줄",
  f:"따스한 품이 그리운 밤",
  g:"눈을 감고 떠올려봐",
  h:"지금 저바다 한 가운데",
  i:"파도를 타고",
  j:"달을 등지고",
  k:"별빛 수놓은 옷을 입은",
  l:"여신님을"
}

// console.log(poke.a);
// // *이게 원형
// console.log(poke["a"]);


// 객체의 키값은 문자열이다

// .접근자에는 점만있는게 아님
let pokeArr = [];

for(let props in poke ){
  // console.log(poke[props]);
  // console.log(props.a)
  pokeArr.push(poke[props])
}
console.log(pokeArr);