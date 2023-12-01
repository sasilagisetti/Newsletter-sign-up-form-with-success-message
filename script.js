let mail = document.querySelector("#email");

document.querySelector("#btn").addEventListener('click',()=>{
    if(mail.value.length>0){
        document.getElementById("submitcard").style.display="flex";
        document.getElementById("card").style.display="none";
        document.querySelector(".submit-p").innerHTML=`<p>A confirmation email has been sent to
        <b>${mail.value}</b>. Please open it and click
        the button inside to confirm your subscription.</p>`;
        document.getElementById("email").value="";
    }
})

document.querySelector("#dismiss").addEventListener('click',function(){
    document.getElementById("submitcard").style.display="none";
    document.getElementById("card").style.display="flex";
})  