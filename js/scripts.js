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
  return reverseColor;
}

fourthFunc(favColor);



//Code for Image Click

//event handler
function changeText() {
  document.querySelector("h3").innerHTML = favColor;
}

function changeSecretText() {
  document.querySelector("h3").innerHTML = fourthFunc(favColor);
}
//event listener
document.querySelector("#original").onclick = changeText;

document.querySelector("#encoded").onclick = changeSecretText;