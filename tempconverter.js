const myForm=document.querySelector('#my-form');
const msg=document.querySelector('.msg');
const Temperature=document.querySelector('#Enter-temp');
const temp=document.querySelector('#temp');



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
    console.log(Temperature.value);
    if(Temperature.value==="")
    {
        msg.classList.add('error')
        msg.innerHTML="Please enter the Temperature !";

        setTimeout(()=>msg.remove(),4000);
    }

  else{
  let p=Temperature.value;
  let q=(p-Number(32))*Number(0.5555);
  document.getElementById('temp').innerHTML=`${Temperature.value} Fahrhanite = ${q.toPrecision(4)} Celsius `;
}
}



