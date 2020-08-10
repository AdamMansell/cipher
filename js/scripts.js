let favColor = prompt("What's your favorite color?");

function firstAndLast(sentence) {
  let first = sentence.charAt(0);
  let last = sentence.charAt(sentence.length-1);
  let upperFirst = first.toUpperCase();
  let upperLast = last.toUpperCase();
  console.log(upperFirst + upperLast);
return upperFirst + upperLast;
}

// capLetter = firstAndLast(favColor);

function reversing(color) {
  reverseColor = color.split("").reverse().join("");
  console.log(reverseColor)
  return reverseColor;
}
// reversing(capLetter);

function thirdFunc(sentence) {
  newSent = firstAndLast(sentence);
  superSent = reversing(newSent);
  console.log("superSent = " + sentence + superSent)
  return sentence + superSent;
}

//thirdFunc(favColor);

function fourthFunc(sentence) {
  sentenceLength = sentence.length;
  sentenceCalc = sentenceLength / 2;
  output = sentence.charAt(sentenceCalc);
  newSent = firstAndLast(sentence);
  superSent = reversing(newSent);
  reverseColor = (output + sentence + superSent).split("").reverse().join("");


  console.log("BigsuperSent = " + output + sentence + superSent)
  console.log("RevberseBigSuperSent = " + reverseColor)
  return output + sentence + superSent;
}

fourthFunc(favColor);







//console.log(upperLast,upperLast);

//function stringRev()

//alert(favColor);




/*Create a JavaScript file and an HTML file in VS Code for this project so that you can load your JavaScript in the browser.

Start by prompting your user to enter a sentence. Then, store the sentence in a variable and print it to the console.

Next, create a function that will take the first and last letter of the sentence, capitalize them, and return this as a new string.

Create another function that will reverse the order of these two letters and return the result.

Create a third function that calls the other two functions you've just created. For example, if I enter the sentence "I am a sentence", it should enter your first function (which should output "IE"), then call your second function, passing in the output value from the previous. It would return "EI" to me.

Add code to your third function to concatenate the new two-letter string together with the original phrase. It should add the two-letter string at the end, forming the final result "I am a sentenceEI."

Create a fourth function to count the number of letters in the original sentence, divide it by two (rounding down if necessary), and output the letter at this index. Concatenate this letter at the beginning of the original sentence. For example, if "I am a sentence" is my original input, and it has 15 total characters in it. If I divide this by 2, I get 7.5, which rounds down to 7. The letter at the 7th position in the sentence is "s". So my final result is "sI am a sentenceEI". */