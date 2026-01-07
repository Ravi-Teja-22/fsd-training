const cont=document.querySelectorAll("button");
cont.forEach((ele)=>{
    ele.style.backgroundColor="green";
    ele.style.width="100px";
    ele.style.height="40px";
});

const hel=document.getElementById("hel");
hel.textContent="Welcome to FSD training";

const m=document.querySelector("#m");
m.innerHTML=`<h2>This is my first div modified using JS</h2><div><p>It contains a paragraph</p></div><img src="download.jpg"alt="image not found" width="500px" height="350px"><h1 style="background-color:lightgreen">Happy Learning</h1>`;
m.style.backgroundColor="lightblue";

const p=document.getElementById("12");
p.style.fontFamily="cursive";

const ma=document.getElementById("ma");
const cr=document.createElement("div");
cr.innerHTML=`<h3 style="color:red">This is created using createElement</h3>`;
ma.appendChild(cr);

const ei=document.getElementById("ei");
ei.setAttribute("src","download (1).jpg");

const bt=document.getElementById("bt");
bt.addEventListener("click",()=>{
    const name="ravi"
    alert(`Button clicked by ${name}`);
});
const bt2 = document.getElementById("bt2");
bt2.addEventListener("mouseenter", () => {
  const name = "teja";
  alert(`Button clicked by ${name}`);
});
const bt3 = document.getElementById("bt3");
bt3.addEventListener("dblclick", () => {
  const name = "ravi";
  alert(`Button clicked by ${name}`);
});