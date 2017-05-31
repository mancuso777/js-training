let numbers = [1,2,3,4,5,6,7,8,9,10], filtered = numbers.filter(evenNumbers);


function evenNumbers (number) {
    console.log(number);
    console.log(number % 2 === 0);
    return number % 2 === 0;
}
console.log(filtered);