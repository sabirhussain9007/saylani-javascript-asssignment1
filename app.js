


//Question 1

// function revNum(){
//     var x = 32243;
    
// var num = x.toString().split("").reverse().join("");

//     console.log(num);
// }

// revNum();

//=========≠==≠=============

//Question 2

// function palindrome(){

//     var myWord = prompt("Enter your word");

//     var mySt = myWord.toLowerCase().replace(/[^a-zA-Z0-9]+/g, '');
//     var myStr = mySt.split("").reverse().join("");

//     if (mySt === myStr){
//         console.log("Your word is a palindrome");
//     } else {
//         console.log("No it is not a palindrome");
//     }
// }


//==============================

//Question3


// function combinator (word) {
//   myResult = [];
//   for(i=0;i<word.length;i++) {
//       for(j=i+1;j<word.length+1;j++) {
//           myResult.push(word.slice(i, j));
//       }
//   }
//   return myResult;
// }

// console.log(combinator("dog"));


//============================


//Question4

// function alphabet(word)
//   {
// return word.split("").sort().join("");
//   }
// console.log(alphabet("webmaster"));


//==============≠===========


//Question5

// function first_letter_uppercase(){
//     var myStr = "the quick brown fox";
// var str = myStr.split(" ");
// for(var i = 0; i < str. length; i++){
//     console.log(str[i][0].toUpperCase());
// }
// }
// first_letter_uppercase();


//==========================

// Question6



// var myStr = "web developement course";

// var words = myStr.split(" ");
// var show = words.sort(function (a,b){
//   return b.length - a.length; 
//             })
            
//     console.log(show[0]);        


//========================


//Question7

// function vowel_count(str1)
// {
//   var vowel_list = 'aeiouAEIOU';
//   var vcount = 0;
  
//   for(var x = 0; x < str1.length ; x++)
//   {
//     if (vowel_list.indexOf(str1[x]) !== -1)
//     {
//       vcount += 1;
//     }
  
//   }
//   return vcount;
// }
// console.log(vowel_count("The quick brown fox"));


//===============================



 //  Question8 


// function isPrime(num) {

//   if (num === 2) {
//     return true;
//   } else if (num > 1) {
//     for (var i = 2; i < num; i++) {

//       if (num % i !== 0) {
//         return true;
//       } else if (num === i * i) {
//         return false
//       } else {
//         return false;
//       }
//     }
//   } else {
//     return false;
//   }

// }

// console.log(isPrime(11));


//=============================


//   Question9


// function checkTypes() {

// var def;
// var checkTypes = [{
//     names : "sabir"
// },

//     "strings",2315,true,
//     function() {
        
//     },
    
//     def
    
//     ]

// for (var i = 0; i < checkTypes.length; i++) {
//   console.log(typeof(checkTypes[i])); 
// }
// }
// checkTypes();


//=========================≠====


//  Question 10



// function sortNumber(){
// var sampleArray = [3,5,4,1,2]
// var resultArr = [];
// var sortedArray = sampleArray.sort();
//   resultArr.push(sortedArray[1],sortedArray[sortedArray.length-2]);
//   console.log(resultArr);

// }
// sortNumber();