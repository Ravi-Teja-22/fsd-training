function processsingle(oid){
    return new Promise(resolve=>{
        const processtime=500+Math.random()*100+1000;
        setTimeout(()=>{
            resolve({oid,status:"processed", processtime :Math.round(processtime)});
    },processtime);
});
}

const orders=[101,102,103,104,105];
Promise.all(orders.map(processsingle))
.then(results=>{
    console.log("All orders processed:");
    console.table(results);
    const tt=results.reduce((sum,order)=>sum+order.processtime,0);
    console.log(`Total processing time: ${tt} ms`); 
})
.catch(err=>{
    console.error("Error processing orders:", err);
});