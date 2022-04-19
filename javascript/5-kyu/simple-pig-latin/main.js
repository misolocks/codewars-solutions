/************************************************************ 
Simple Pig Latin

Task:
Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

Examples
    pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
    pigIt('Hello world !');     // elloHay orldway !
*************************************************************/

function pigIt(str){
    let ponctuation='!?.,;:'
    return str.split(' ').map( s => {  return  ponctuation.includes(s) ? s : s.slice(1) + s.slice(0,1) + 'ay'  }).join (' ')
}
