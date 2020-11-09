const myForm=document.querySelector('#my-form');
const msg=document.querySelector('.msg');
const num=document.querySelector('#Enter-num');
const sqr=document.querySelector('#sqr');



// document.getElementById("per").addEventListener("mouseover", mouseOver);
// document.getElementById("per").addEventListener("mouseout", mouseOut);

// function mouseOver() {
//     document.getElementById("per").innerHTML="check your answer here ";
//   }

// function mouseOut() {
//     document.getElementById("per").innerHTML="Answer";
//   } 




myForm.addEventListener('submit',onSquare);

function onSquare(e)
{
  e.preventDefault();
    console.log(num.value);
    if(num.value==="")
    {
        msg.classList.add('error')
        msg.innerHTML="Please enter the Number !";

        setTimeout(()=>msg.remove(),4000);
    }

  else{
  let m=num.value;
  let n=m*m;
  document.getElementById('sqr').innerHTML=`Square of ${num.value} is = ${n.toPrecision(4)}  `;
}
}



