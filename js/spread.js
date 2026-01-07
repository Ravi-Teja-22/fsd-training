function a(a,b,c,d){
    const out=a+b+c+d
    console.log(out)
}
const ar=[3,4,5,6]
a(...ar)

const ar2=[7,8,9]
const ar3=[...ar2,10,11,12]
console.log(ar3)

function b(...rest){
    return rest.reduce((acc,val)=>acc+val,0)
}
console.log(b(1,2,3,4))