// ? Task 2

const numbers = [5,12, 98, 5, 41, 23, 78, 46];
for(let i=0; i<numbers.length; i++){
    if(numbers[i]%2 == 1){
        continue;
    }
    console.log(numbers[i]);
}
