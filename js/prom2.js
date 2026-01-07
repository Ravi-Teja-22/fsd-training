function dt(){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            const suc=true;
            if(suc){
                res("data fetched");
            }else{
                rej("error fetching data");
            }},2000);
        });
}
dt().then((msg)=>{
    console.log(msg);
})
.catch((msg)=>{
    console.error(msg);
});