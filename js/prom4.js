function multi(mes,del){
    return new Promise((res) => {
        setTimeout(() => {
            console.log(mes);
            res();
        }, del);
    });
}
console.log("process started");
multi("step 1 fasaked", 1000)
    .then(() => multi("step 2 fasaked", 1000))
    .then(() => multi("step 3 fasaked", 1000))
    .then(() => multi("step 4 fasaked",1000))
    .then(()=>{
    console.log("process completed");
});