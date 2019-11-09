/*
  --- Question ---

Consider the following pattern:
A → D M → P X → A
a → d m → p x → a
Now, write a program to solve the following message
Vrphwklqj phdqlqjixo
Hint: The answer is something meaningful.

*/

// Answer =>

let decode = (message, secretKey) => {
  let decodedMessage = '';
  for(let index = 0; index < message.length; index ++){
    if(message.charCodeAt(index) !== 32)
      decodedMessage += String.fromCharCode(message.charCodeAt(index) - secretKey);
    else{
      decodedMessage += ' ';
    }
  }
  return decodedMessage;
}
  
console.log(decode('Vrphwklqj phdqlqjixo', 3));