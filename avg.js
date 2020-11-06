const myForm=document.querySelector('#my-form');
const a=document.querySelector('#Entera');
const b=document.querySelector('#Enterb');
const msg=document.querySelector('.msg');
const Ans=document.querySelector('#ans-avg');




// document.getElementById("ans-avg").addEventListener("mouseover", mouseOver);
// document.getElementById("ans-avg").addEventListener("mouseout", mouseOut);

// function mouseOver() {
//     document.getElementById("ans-avg").innerHTML="check your answer here ";
//   }

// function mouseOut() {
//     document.getElementById("ans-avg").innerHTML="Answer";
//   } 


myForm.addEventListener('submit',onAverage);

function onAverage(e)
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
       const x=a.value;
       const y=b.value;
       const avg=(Number(x)+Number(y))/Number(2);
       document.getElementById('ans-avg').innerHTML=`
       Average of ${a.value} & ${b.value} = ${avg.toPrecision(2)}`;
    }
      
}











