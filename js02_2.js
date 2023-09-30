// 1. Write a function that takes a string and displays statistics about
// it: number of letters, number of digits, and number of other
// characters


// function statistics(inputString){
//     let letterCount = 0;
//     let digitCount = 0;
//     let otherCount = 0;


//     for(let i = 0; i < inputString.length; i++){
//         let char = inputString[i];
//         if(/[a-zA-Z]/.test(char)){
//             letterCount++;
//         }
//         else if(/[0-9]/.test(char)){
//             digitCount++;
//         }
//         else{
//             otherCount++;
//         }
//     }


//     console.log(`Number of Letters: ${letterCount}`);
//     console.log(`Number of Digits: ${digitCount}`);
//     console.log(`Number of Other: ${otherCount}`);

// }


// let inputString = "Hakuna42Matata!";
// statistics(inputString);





// 2. Write a function that takes a two-digit number and returns it in text form.
// For example: 35 – thirty five, 89 – eighty nine, 12 – twelve. 



// function numberToText(num){
//     const units = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
//     const teens = ['eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
//     const tens = ['', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];


//     if (num < 11 || (num > 19 && num % 10 === 0)) {
//         return tens[Math.floor(num / 10)] + units[num % 10];
//     } 
//     else if (num > 10 && num < 20) {
//         return teens[num - 11];
//     } 
//     else {
//         return tens[Math.floor(num / 10)] + ' ' + units[num % 10];
//     }


// }


// let num1 = 19;
// let num2 = 50;
// let num3 = 42;

// console.log(`${num1} - ${numberToText(num1)}`);
// console.log(`${num2} - ${numberToText(num2)}`);
// console.log(`${num3} - ${numberToText(num3)}`);




// 3. Write a function that replaces capital letters with small,
// small with capital, and numbers with underscore in the
// received string. 


// function replaceCharacters(inputString){
//     let result = '';

//     for(let i = 0; i < inputString.length; i++){
//         let char = inputString[i];

//         if(char >= 'A' && char < 'Z'){
//             result += char.toLowerCase();
//         }
//         else if(char >= 'a' && char <= 'z'){
//             result += char.toUpperCase();
//         }
//         else if(!isNaN(char)){
//             result += '_';
//         }
//         else{
//             result += char;
//         }
//     }

//     return result;
// }


// let inputString = "ABCabc123";
// let replacedString = replaceCharacters(inputString);
// console.log(replacedString);



// 4. Write a function that converts names of css styles with a hyphen
// to a name in the CamelCase style: font-size to fontSize,
// background-color to backgroundColor, text-align to
// textAlign.


// function cssToCamelCase(cssName) {
//     return cssName.replace(/-([a-z])/g, function(match, letter) {
//         return letter.toUpperCase();
//     });
// }


// let cssName1 = "font-size";
// let cssName2 = "background-color";
// let cssName3 = "text-align";

// let camelCaseName1 = cssToCamelCase(cssName1);
// let camelCaseName2 = cssToCamelCase(cssName2);
// let camelCaseName3 = cssToCamelCase(cssName3);

// console.log(camelCaseName1); 
// console.log(camelCaseName2); 
// console.log(camelCaseName3); 





// 5. Write a function that takes a phrase and converts it to an abbreviation.
// For example: cascading style sheets to CSS, object-oriented
// programming to OOP


// function abbreviation(inputString){
//     return inputString.split(/[\s-]+/)
//     .map(word => word[0].toUpperCase())
//     .join('');
// }

// let inputString1 = "cascading style sheets";
// let inputString2 = "object-oriented programming";

// let abbreviation1 = abbreviation(inputString1);
// let abbreviation2 = abbreviation(inputString2);


// console.log(abbreviation1);
// console.log(abbreviation2);



// 6. Write a function that takes any number of strings, combines
// them into one long string and returns it.


// function combineString(...strings){
//     return strings.join('');
// }


// let combinedString = combineString("Hakuna", "Matata", "," ,"42");
// console.log(combinedString); 



// 7. Write a calculator function. The function takes a string with
// an example, determines what is to be done (+ – * /), converts
// operands to numbers, solves it, and returns the result. 


// function calculator(expression){
//     const oparators = ['+', '-', '*', '/'];


//     let operator;
//     for(let i = 0; i < oparators.length; i++){
//         if(expression.includes(oparators[i])){
//             operator = oparators[i];
//             break;
//         }
//     }


//     if(!operator){
//         return 'Error: Operator not found in the expression';
//     }


//     let operands = expression.split(operator).map(Number);

//     let result;
//     switch(operator){
//         case '+':
//             result = operands[0] + operands[1];
//             break;
//         case '-':
//             result = operands[0] - operands[1];
//             break;
//         case '*':
//             result = operands[0] * operands[1];
//             break;
//         case '/':
//             if (operands[1] !== 0) {
//                 result = operands[0] / operands[1];
//             } else {
//                 return 'Error: Division by zero';
//             }
//             break;
//     }
    

//     return result;
// }

// let result1 = calculator('5 + 3'); 
// let result2 = calculator('10 * 2'); 
// let result3 = calculator('8 / 4');  
// let result4 = calculator('6 - 2'); 

// console.log(result1);
// console.log(result2);
// console.log(result3);
// console.log(result4);






// 8. Write a function that gets a url and displays detailed information about it.
// For example: url “https://itstep.org/ua/about”, “protocol:
// https, domain: itstep.org, path: /ua/about”.


// function analyzeUrl(url){
//     const urlObject = new URL(url);

//     const protocol = urlObject.protocol;
//     const domain = urlObject.hostname;
//     const path = urlObject.pathname;

//     return `Protocol: ${protocol}, Domain: ${domain}, Path: ${path}`;
// }


// let urlInfo = analyzeUrl("https://itstep.org/ua/about");
// console.log(urlInfo);





// 9. Write a function that takes a string and delimiter and returns
// an array of substrings that are broken up using the specified delimiter.
// For example: line “10/08/2020”, separator “/”, the result: “10”, “08”, “2020”.
// While performing the task, do not use the split() function.



// function customSplit(inputString, delimiter){
//     let result = [];
//     let startIndex = 0;

//     for(let i = 0; i < inputString.length; i++){
//         if(inputString[i] === delimiter){
//             result.push(inputString.slice(startIndex, i));
//             startIndex = i + 1;
//         }
//     }

//     result.push(inputString.slice(startIndex));
//     return result;
// }



// let inputString = "10/08/2020";
// let delimiter = "/";
// let result = customSplit(inputString, delimiter);

// console.log(result); 







// 10. Write a function to output text according to a given template.
// As the first parameter, the function takes a template that can
// use % in the text, index of the input parameter is specified after
// the % sign. When outputting index instead of %, output value
// of the corresponding input parameter.
// For example: print(“Today is %1 %2.%3.%4”, “Monday”,
// 10, 8, 2020) must print “Today is Monday 10.8.2020”.


function print(template, ...values) {
    let result = template;

    for (let i = 1; i <= values.length; i++) {
        const pattern = new RegExp(`%${i}`, 'g');
        result = result.replace(pattern, values[i - 1]);
    }

    return result;
}


let output = print("Today is %1 %2.%3.%4", "Monday", 10, 8, 2020);
console.log(output); 