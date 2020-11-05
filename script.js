const myForm=document.querySelector('#my-form');
const a=document.querySelector('#Enter-value-a');
const b=document.querySelector('#Enter-value-b');
const msg=document.querySelector('.msg');
const Ans=document.querySelector('#ans');


const cgpa=document.querySelector('#Enter-cgpa');
const per=document.querySelector('#per');




document.getElementById("ans").addEventListener("mouseover", mouseOver);
document.getElementById("ans").addEventListener("mouseout", mouseOut);

function mouseOver() {
    document.getElementById("ans").innerHTML="check your answer here ";
  }

function mouseOut() {
    document.getElementById("ans").innerHTML="Answer";
  } 


myForm.addEventListener('submit',onCalculate);

function onCalculate(e)
{
    e.preventDefault();
    console.log(a.value);
    console.log(b.value);

    if(a.value===""||b.value==="")
    {
        msg.classList.add('error')
        msg.innerHTML="Please enter two Numbers";

        setTimeout(()=>msg.remove(),4000);
    }

    else{
       let x=a.value;
       let y=b.value;
       let z=x%y;
       document.getElementById('ans').innerHTML=`
       ${a.value} % ${b.value} = ${z}`;
    }
      
}












