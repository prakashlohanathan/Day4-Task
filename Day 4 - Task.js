//Do the below programs in anonymous function & IIFE
//1. Print odd numbers in an array

// ((array) => {
//     for(let value of array){
//         if(value % 2 !=0){
//             console.log(value);
//         }
//     }
// })([1,2,3,4,5,6,7,7,8,9,10]);

//2. Convert all the strings to title caps in a string array
// ((fruit) => {
//    for (let value of fruit){
//     console.log(value.toUpperCase());
//    }
    
// })(fruit = ['apple','orange','grapes','blueberry','cherry']);

//3. Sum of all numbers in an array

// ((array) => {
//    let sum = array.reduce((partialSum, value) => partialSum + value);
//     console.log(sum);
//     })([1,2,3,4,5,6,7,8,9,10]);

//4. Return all the prime numbers in an array
// ((array) => {
//          for(let value of array){
//              let factors = 0;
//              for(let divisor = 2; divisor < value; divisor++){
//                 if(value % divisor ==0) {
//                     factors++;
//                 }
//              }
//              if (factors == 0 && value!=1){
//                 console.log(`${value} is a prime`);
//              }else{
//               console.log(`${value} is not a prime`);
//              }
                 
//              }
//          }
//     )([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]);

//5. Return all the palindromes in an array

// ((arr) => {

// const isPalindrome = yes => {
//    const str = String(yes);
//    let i = 0;
//    let j = str.length - 1;
//    while(i < j) {
//       if(str[i] === str[j]) {
//          i++;
//          j--;
//       }
//       else {
//          return false;
//       }
//    }
//    return true;
// };
// const findPalindrome = arr => {
//    return arr.filter(yes => isPalindrome(yes));
// };
// console.log(findPalindrome(arr));

// })(['carecar', 1344, 12321, 'did', 'cannot', 'dad']);

//6. Return median of two sorted arrays of the same size.

// ((array1, array2) => {
//      let middle = array1.length;
//      let totalArray = array1.concat(array2).sort((a, b) => a - b);
//      console.log((totalArray[middle - 1] + totalArray[middle])/2);
//     })([1, 2, 3, 4, 5], [5, 6, 7 ,8, 9]);
    
 //7. Remove duplicates from an array
 
//      ((arr) => {
//         var unique = [];
//         for(let i=0; i < arr.length; i++){ 
//             if(unique.indexOf(arr[i]) === -1) { 
//                 unique.push(arr[i]); 
//             } 
//           }   
//              console.log(unique);
// })(["apple", "mango","apple", "orange", "mango", "mango"]);
 
// 8. Rotate an array by k times
//    ((nums,k) => {  
//         for (let i = 0; i < k; i++) {
//         nums.unshift(nums.pop());
//        }
//         console.log(nums);
//         })([1, 2, 3, 4, 5],4);

//  3.Do the below programs in arrow functions.
//  1. Print odd numbers in an array
// // let OddNo = (array) => {
//     for(let value of array){
//         if(value % 2 != 0){
//             console.log(value);
// } }} 
// (OddNo([1,2,3,4,5,6,7,8,9,10]));

//  2. Convert all the strings to title caps in a string array
//  let ToUpperCase = (fruit) => {
//        for (let value of fruit){
//    console.log(value.toUpperCase());
       
// }}
//        (ToUpperCase(['apple','orange','grapes','blueberry','cherry']));
 
//  3. Sum of all numbers in an array
//  let SumofArray = (numbers) => {  
//        var sum = 0;
//     for(var i=0 ; i<numbers.length; i++){
//     var sum = sum + numbers[i];
//     }
//    console.log(sum);
//     }
//     (SumofArray([45, 34, 12, 10, 8, 9]));
   
   //  4. Return all the prime numbers in an array
// let PrimeNo = (array) => {
//               for(let value of array){
//                  let factors = 0;
//                  for(let divisor = 2; divisor < value; divisor++){
//                     if(value % divisor ==0) {
//                          factors++;
//                      }
//                  }
//                   if (factors == 0 && value!=1){
//                      console.log(`${value} is a prime`);
//                   }else{
//                    console.log(`${value} is not a prime`);
//                   }
                     
//                   }
//                }
//          (PrimeNo([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]));
//   5. Return all the palindromes in an array
 
//  let Palindrome =(arr) => {

//  const isPalindrome = yes => {
//     const str = String(yes);
//     let i = 0;
//     let j = str.length - 1;
//     while(i < j) {
//        if(str[i] === str[j]) {
//           i++;
//           j--;
//        }
//        else {
//           return false;
//        }
//     }
//     return true;
//  };
//  const findPalindrome = arr => {
//     return arr.filter(yes => isPalindrome(yes));
//  };
//  console.log(findPalindrome(arr));
//  }
//  (Palindrome(['carecar', 1344, 12321, 'did', 'cannot', 'dad']));