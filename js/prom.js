const a=new Promise((res, rej) => {
    const ag=10;
    if(ag>=18){
        res("access granted");
    }    else{ 
        rej("access denied");
    }
});
a.then((message) => {
    console.log(message);
})
.catch((message) => {
    console.error(message);
});