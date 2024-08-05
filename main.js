const btn = document.querySelector("button");
btn.addEventListener("click", ()=>{
    const inputvalue=document.querySelector('input').value;
    document.querySelector('p').innerText=inputvalue;
})

