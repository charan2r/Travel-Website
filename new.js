/*function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) {
    var result = "";
    // Your code below this line
    result = "The " +myAdjective+ " " +myNoun + " looked around " + myAdverb + " then " + myVerb + " into the house";
    
  
    // Your code above this line
    return result;
  }
  
  // Change the words here to test your function
  console.log(wordBlanks("dog", "big", "ran", "quickly"));
  console.log(wordBlanks("cat", "little", "hit", "slowly"));*/

/*function nextInLine(arr, item) {
    // Your code here
    arr.push(item);
    var a = arr.shift();
    return a;  // Change this line
  }
  
  // Test Setup
  var testArr = [1,2,3,4,5];
  
  // Display Code
  console.log("Before: " + JSON.stringify(testArr));
  console.log(nextInLine(testArr, 5)); // Modify this line to test
  console.log("After: " + JSON.stringify(testArr));*/
  
  var count = 0;

  function cc(card) {
   
    switch(card){
      case 2:
      case 3:
      case 4:
      case 5:
      case 6:
        count++;
        break;
      case 7:
      case 8:
      case 9:
        count=count;
        break;
      case 10:
      case 'A':
      case 'J':
      case 'K':
      case 'Q':
        count--;
        
    }
    if (count > 0) {
      return count + " Bet";
    } else {
      return count + " Hold";
    }
    
  
   
  }
  
  // Add/remove calls to test your function.
  // Note: Only the last will display
  console.log(cc(7));


/*var myArray = [];

var a = 6;
while(a>=6&&a<=10){
  myArray.push(a);
  a++;
}
console.log(myArray[a]);*/

function ourRandomRange(ourMin, ourMax) {

  return Math.floor(Math.random() * (ourMax - ourMin + 1) + ourMin);
}

console.log(ourRandomRange(1, 9));

var a = Math.random();
console.log(a);

function randomRange(myMin, myMax) {

  return Math.floor(Math.random()*(myMax - myMin+1)+ myMin); // Change this line

}

// Change these values to test your function
var myRandom = randomRange(5,15);
console.log(myRandom);


function getShoeSize(footLength, footWidth, gender) {
  if(gender=="female" && footWidth==8){
    return "Women’s UK - 2 Narrow(AA)";
  }
  if(gender=="male" && footWidth==10){
    return "Men’s UK - 9.5 Medium(CD)";
  }
}

console.log(getShoeSize(20.8, 8, "female"));
