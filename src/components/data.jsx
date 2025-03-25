function reverseString(str){
    return str.split('').reverse().join("");

}
const input = "JAVASCRIPT";
const reversed = reverseString(input);
console.log(reversed)