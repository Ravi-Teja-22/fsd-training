const a=document.getElementById("m1");
const a1=document.createElement("div")
a.setAttribute("style","background-color:lightgrey; width:400px; height:200px;")
a1.innerHTML=`<h2 style="color:blue">This is div created using createElement</h2>`;
a.appendChild(a1);

const b=document.getElementById("m2");
const b1=document.createElement("div")
b.setAttribute("style","background-color:cyan; width:400px; height:200px;")
b1.innerHTML=`<h2 style="color:green">This is div modified using innerHTML</h2>`; 
b.appendChild(b1);

const c=document.getElementById("m3");
const c1=document.createElement("div")
c.setAttribute("style","background-color:lightpink; width:400px; height:200px;")
c1.innerHTML=`<h2 style="color:purple">This is div modified using textContent</h2>`;
c.appendChild(c1);

const d=document.getElementById("m4");
const d1=document.createElement("div")
d.setAttribute("style","background-color:lightcoral; width:400px; height:200px;")
d1.innerHTML=`<h2 style="color:brown">This is div modified using setAttribute</h2>`;
d.appendChild(d1);

const main=document.getElementById("main");
main.style.display="flex";
main.style.flexWrap="wrap";
main.style.gap="5px";  