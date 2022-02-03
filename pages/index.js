let body = document.querySelector("body");
let navbarItems = document.querySelectorAll(".navigationItem");
let isChecked = false;
// console.log(navbarItem);
// console.log(body.clientHeight);
// console.log(window.innerHeight * 0.8);
// console.log(window.scrollY);
document.addEventListener("scroll", function (e) {
  console.log(window.scrollY, window.innerHeight);
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