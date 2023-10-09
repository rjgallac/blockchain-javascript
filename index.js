const { Block, Blockchain } = require("./functions.js");

const RobBlock = new Blockchain();
// Add a new block
RobBlock.addBlock(new Block(Date.now().toString(), { from: "John", to: "Bob", amount: 100 }));

RobBlock.addBlock(new Block(Date.now().toString(), { from: "Bob", to: "Ed", amount: 100 }));

RobBlock.addBlock(new Block(Date.now().toString(), { from: "Ed", to: "Bart", amount: 100 }));

RobBlock.addBlock(new Block(Date.now().toString(), { from: "Bart", to: "Joe", amount: 100 }));



// (This is just a fun example, real cryptocurrencies often have some more steps to implement).

// Prints out the updated chain
console.log(RobBlock.chain); 

console.log(RobBlock.isValid());

