// let arr = [1, 2, 3, 4, 5, 6, 7];
// let tong = (item) => item + item
// function sum(arr,tong) {
//     let newArray = [];
//     arr.forEach(index => { newArray.push(tong(index))})
//     return newArray
// }
// console.log(sum(arr,tong))


let arr = [1, 2, 3, 4, 5, 6, 7];
let square = (item) => item * item;

function arraySq(func, arr) {
    let newArr = [];
    arr.forEach((index) => {
        newArr.push(func(index));
    });
    return  newArr;
}

console.log(arraySq(square, arr));