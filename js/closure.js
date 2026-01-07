// function out(){
//     let a = 0;
//     return function inner(){
//         a++;
//         console.log(a);
//     }
// }

// const fn = out();
// fn();
// fn();
// fn();
//output: 1,2,3

function sec(){
    let s="hidden";
    return{
        getSec:()=>s,
        setSec:(val)=>{s=val;}
    }
}
const mySec = sec();
console.log(mySec.getSec());
mySec.setSec("visible");
console.log(mySec.getSec());