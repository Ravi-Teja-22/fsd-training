// function greet(message,greet) {
//     console.log(`${greet} ${this.name} ${message}`);
// }

// let p1={ name: "Alice" };
// let p2={ name: "Bob" };
// greet.call(p2, "Hello", "Welcome to the platform!");

//output :Welcome to the platform! Bob Hello

// function greet(greet,message) {
//      console.log(`${greet} ${this.name} ${message}`);
//  }
// let p2 = { name: "Bob" };
// greet.apply(p2, ["Hello", "Welcome to the platform!"]);

//output :Hello Bob Welcome to the platform!

function greet(greet, message) {
  console.log(`${greet} ${this.name} ${message}`);
}
let p2 = { name: "Bob" };
const f=greet.bind(p2, "Hello", "Welcome to the platform!");
f();

//output :Hello,Bob,Welcome to the platform!