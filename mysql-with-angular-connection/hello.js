let str = "sumit";
let str2 = "asdfdsa";
let arr = [12, 34, 56, 11, 9];

function palindrome(s){
    let length= s.length;

    for(let i=0; i<length/2; i++){
        if(s[i]!==s[length-1-i]){
            return false;
        }
    }
    return true;
}

console.log(`${str}is ${palindrome(str)?'':'not'} a palindrome`);

console.log(`${str2}is ${palindrome(str2)?'':'not'} a palindrome`);