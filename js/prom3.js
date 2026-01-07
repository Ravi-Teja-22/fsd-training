function s1(){
    return new Promise((resolve) => {
        setTimeout(()=>{
            console.log("step 1 completed");
            resolve("step 1 completed");
        },1000);
    });
}
function s2() {
  return new Promise((resolve) => {
    setTimeout(() => {
    console.log("step 2 completed");
      resolve("step 2 completed");
    }, 1000);
  });
}
function s3(){
  return new Promise((resolve) => {
    setTimeout(() => {
        console.log("step 3 completed");
      resolve("step 3 completed");
    }, 1000);
  });   
}

s1().then(()=>s2().then(()=>s3()))
.then(()=>{
    setTimeout(()=>{
        console.log("all steps completed");
    },1000);
})