const mySelf = {
  name: 'TOwfiq',
  age: 22,
  id: 1243,
  fName: 'Shah Amran',
  mName: 'Nasima Begum',
  profession: 'jobHolder',
  isRich: false,
  friends: ['a','s','d','f','g','h']
}
console.log(mySelf);
console.log(typeof mySelf);
const mySelfJson = JSON.stringify(mySelf)
console.log(mySelfJson);
console.log(typeof mySelfJson);
const mySelfObj = JSON.parse(mySelfJson)
console.log(mySelfObj);
console.log(typeof mySelfObj);


