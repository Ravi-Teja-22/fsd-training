console.log("a");
setTimeout(() => {
    console.log("b");
},1000);
Promise.resolve().then(() => {
    console.log("c");
});
console.log("d");

// queueMicrotask is a promise which schedules the output for the end
