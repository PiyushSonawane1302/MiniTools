const myForm=document.querySelector('#my-form');
const msg=document.querySelector('.msg');
const cgpa=document.querySelector('#Enter-cgpa');
const per=document.querySelector('#per');



// document.getElementById("per").addEventListener("mouseover", mouseOver);
// document.getElementById("per").addEventListener("mouseout", mouseOut);

// function mouseOver() {
//     document.getElementById("per").innerHTML="check your answer here ";
//   }

// function mouseOut() {
//     document.getElementById("per").innerHTML="Answer";
//   } 




myForm.addEventListener('submit',onPercentage);

function onPercentage(e)
{
  e.preventDefault();
    console.log(cgpa.value);
    if(cgpa.value==="")
    {
        msg.classList.add('error')
        msg.innerHTML="Please enter the CGPA !";

        setTimeout(()=>msg.remove(),4000);
    }

  else{
  let p=cgpa.value;
  let q=p*(9.5);
  document.getElementById('per').innerHTML=`${cgpa.value} CGPA = ${q.toPrecision(4)} % `;
}
}



