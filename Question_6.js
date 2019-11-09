/*
  --- Question ---

--- Ref. Question No. 5
Consider the following pattern:
A → D M → P X → A
a → d m → p x → a
Now, write a program to solve the following message
Vrphwklqj phdqlqjixo
Hint: The answer is something meaningful.

---xx-- 

Use the following paragraphs (in italics below) as input to the program you wrote for Question 5.
It should output a meaningful question. Write a program to solve that question.

It should output a meaningful question. Write a program to solve that question.
Zulwh d surjudp (lq Sbwkrq, MdydVfulsw ru Uxeb) wr srsxodwh dqg wkhq vruw d
udqgrpob glvwulexwhg olvw ri 1 ploolrq lqwhjhuv, hdfk lqwhjhu kdylqj d ydoxh >= 1 dqg <=
100 zlwkrxw xvlqj dqb exlowlq/hawhuqdo oleudub/ixqfwlrq iru vruwlqj.
Brxu surjudp vkrxog fduhixoob frqvlghu wkh lqsxw dqg frph xs zlwk wkh prvw hiilflhqw
vruwlqj vroxwlrq brx fdq wklqn ri. Surylgh wkh vsdfh dqg wlph frpsohalwb ri brxu dojrulwkp

*/

// Answer =>

let decode = (message, secretKey) => {
  let decodedMessage = '';
  let whiteSpacePattern = /\W|\d/;
  
  if(secretKey > 26)
    secretKey %= 26;
  
  for(let index = 0; index < message.length; index ++){
    if(!whiteSpacePattern.test(message[index])){
      let currentCharCode = message.charCodeAt(index);
      let backtraceOffset = 0;
      if( (currentCharCode - secretKey) < 97 && (currentCharCode > 96))
      {
        backtraceOffset = 97 - (currentCharCode - secretKey);
        backtraceOffset--;
        decodedMessage += String.fromCharCode(122 - backtraceOffset);
      }
      else
      if( (currentCharCode - secretKey) < 65 && (currentCharCode > 64 && currentCharCode < 91))
      {
        backtraceOffset = 65 - (currentCharCode - secretKey);
        backtraceOffset--;
        String.fromCharCode(90 - backtraceOffset)
        decodedMessage += String.fromCharCode(90 - backtraceOffset);
      }
      else
        decodedMessage += String.fromCharCode(message.charCodeAt(index) - secretKey);
    }
    else{
      decodedMessage += message[index];
    }
  }
  return decodedMessage;
}
  
console.log(decode('Zulwh d surjudp (lq Sbwkrq, MdydVfulsw ru Uxeb) wr srsxodwh dqg wkhq vruw d \
udqgrpob glvwulexwhg olvw ri 1 ploolrq lqwhjhuv, hdfk lqwhjhu kdylqj d ydoxh >= 1 dqg <=\
100 zlwkrxw xvlqj dqb exlowlq/hawhuqdo oleudub/ixqfwlrq iru vruwlqj.\
Brxu surjudp vkrxog fduhixoob frqvlghu wkh lqsxw dqg frph xs zlwk wkh prvw hiilflhqw \
vruwlqj vroxwlrq brx fdq wklqn ri. Surylgh wkh vsdfh dqg wlph frpsohalwb ri brxu dojrulwkp', 3));


// -- Output--

/*

Write a program (in Python, JavaScript or Ruby) to populate and then sort a randomly distributed list 
of 1 million integers, each integer having a value >= 1 and <=100 without using any builtin/external 
library/function for sorting.Your program should carefully consider the input and come up with the most 
efficient sorting solution you can think of. Provide the space and time complexity of your algorithm

*/