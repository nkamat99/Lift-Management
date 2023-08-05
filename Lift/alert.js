// const check=()=>{
//   const  isAlert=localStorage.getItem('isAlert');
// console.log(isAlert)
// var pop=document.getElementsByClassName("pop-div");
// if(isAlert)
// {
//     pop.style.visibility="visible";
//     localStorage.setItem('isAlert',false);
// }
// }

// setInterval(check, 1000);
function trigger(){
  console.log('hey');
  document.getElementById('profile-sidebar').classList.toggle('display');

}
