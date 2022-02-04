let body = document.querySelector("body");
let navbarItems = document.querySelectorAll(".navigationItem");
let isChecked = false;
// console.log(navbarItem);
// console.log(body.clientHeight);
// console.log(window.innerHeight * 0.8);
// console.log(window.scrollY);
document.addEventListener("scroll", function (e) {
//   console.log(window.scrollY, window.innerHeight);
  if (window.scrollY >= window.innerHeight * 0.8 && !isChecked) {
    navbarItems.forEach(navbarItem => {
        navbarItem.classList.remove('text-slate-100');
        navbarItem.classList.add("text-gray-900");
    });
    isChecked = true;
  }
  if (window.scrollY <= window.innerHeight * 0.8 && isChecked) {
    navbarItems.forEach(navbarItem => {
        navbarItem.classList.remove("text-gray-900");
        navbarItem.classList.add('text-slate-100');
    });
    isChecked = false;
  }
});

const cenergi = document.querySelector('#cenergi-sea')
const phn = document.querySelector('#phn-industry')
// const cenergiButton = document.querySelector('#cenergiButton')
// const phnButton = document.querySelector('#phnButton')

const workButtons = document.querySelectorAll(".workButton")
const workResButtons = document.querySelectorAll(".workResButton")

let prevJD = document.querySelector('#iium1Button-response')
let clickedJD
console.log(workButtons)

workButtons.forEach((el)=>{
    el.addEventListener('click', ()=>{
        workResButtons.forEach((res)=>{
            // console.log(res.id.substr(0, res.id.length - 9))
            if (res.id.substr(0, res.id.length - 9) == el.id){
                console.log(res)
                clickedJD = res
            }
        })
        
        if(prevJD !== clickedJD){ 
            clickedJD.classList.remove('hidden')
            prevJD.classList.add('hidden')
            prevJD = clickedJD
        }
        
        
    })
})

function getElement(el){
    return document.querySelector(el)
}