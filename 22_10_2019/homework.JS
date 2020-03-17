// ข้อที่ 1

let arrOld1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let arrNew1 = arrOld1.filter(function (num) { return num % 2 == 1 });

console.log(arrNew1);


// ข้อที่ 2

let arrOld2 = [0, 9, 1, 8, 2, 7, 3, 6, 4, 5];
let arrNew2 = arrOld2.sort(function (a, b) { return a - b });
console.log(arrNew2);


// ข้อที่ 3
let arrOld3 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let i = 0;

while (i <= arrOld3.length) {

    if ((arrOld3[i] % 2) == 0) {
        arrOld3.splice(i, 1);
    }
    i++;
}
console.log(arrOld3)


// ข้อที่ 4
let myMap = new Map();

let keyAdam = "Adam";
let keySophie = "Sophie";
let keyAorum = "Aorum";

myMap.set(keyAdam, 28);
myMap.set(keySophie, 22);
myMap.set(keyAorum, 13);

// getting the values
console.log(myMap.get(keyAdam));


// ข้อที่ 5

let arrOld5 = [0, 9, 1, 8, 2, 7, 3, 6, 4, 5];
let i = 0;
let j = 0;

for (i = 0; i < arrOld5.length; i++) {
    for (j = 0; j < arrOld5.length; j++) {
        let temp = arrOld5[j + 1];
        if (arrOld5[j] >= arrOld5[j + 1]) {
            arrOld5[j + 1] = arrOld5[j];
            arrOld5[j] = temp;
        }
    }
}
console.log(arrOld5);

