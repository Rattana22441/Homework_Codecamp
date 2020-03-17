const _=require('lodash');
const arr=[[1,2,3,4,5]];
console.log(_.flatten(arr));

const arr2 =arr.reduce(function(previousValue,currentValue){
    return previousValue+currentValue
})

console.log(arr2)


let result;
let age=0;

if (result<4){
    result='Below';
} else{
    result='Over';
}

// ลองทำ 1
let result;
let age=0;

(age < 4)? result='Below':result='Over';
