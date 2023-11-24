//Declaring variables
let Output = document.getElementById('output');
let Btn = document.getElementById('btn');
let i = 0
//Creating array
let numArray = [1, 4, 7, 11, 22, 44, 77, 99, 101, 111];
//function, if i is less than the array length then it will cycle through the array
function nextNum(){
    if(i<numArray.length,i++){
    next = numArray[i];Output.value = next
    }
}
Btn.addEventListener('click', nextNum)