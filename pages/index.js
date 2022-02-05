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
    navbarItems.forEach((navbarItem) => {
      navbarItem.classList.remove("text-slate-100");
      navbarItem.classList.add("text-gray-900");
    });
    isChecked = true;
  }
  if (window.scrollY <= window.innerHeight * 0.8 && isChecked) {
    navbarItems.forEach((navbarItem) => {
      navbarItem.classList.remove("text-gray-900");
      navbarItem.classList.add("text-slate-100");
    });
    isChecked = false;
  }
});


fetch("data.json")
  .then((response) => {
    return response.json();
  }).then(jsondata => {
      console.log(jsondata.workExperience)
        const workExperience = jsondata.workExperience
        
        const workExperienceSection = document.querySelector("#work-experience");

        workExperience.forEach((work)=>{
            let element = document.createElement('div')
            element.innerHTML = `
            <div id="phn-industry">
            
            <!-- position -->
            <div class="font-sans font-semibold text-xl text-slate-100">
            ${work.position}
            <!-- linkable company name -->
            <span class="text-yellow-400 text-sm cursor-pointer"><a href="http://">@${work.companyName}</a></span>
            </div>
            <!-- date in date out -->
            <div class="font-mono font-semibold text-sm text-slate-200 py-2">
            ${work.workingPeriod}
            </div>
            <!-- job description -->


            <ul id='experience-list' class="font-sans font-semibold text-slate-200 text-sm text-justify">
            </ul>
                
            </div>`
            workExperienceSection.appendChild(element) 
        })
        const experienceListSection =document.querySelector('#experience-list')
        let experienceLists = []
        workExperience.forEach((el) => {
            el.jobDescription.forEach((data)=> {
                experienceLists.push(data)
            })
        })
        console.log(experienceLists)

        experienceLists.forEach(list =>{
            let elemencChild = document.createElement('div')
            elemencChild.innerHTML = `<li class="flex items-start w-full my-2 tracking-wide">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z"
                clip-rule="evenodd" />
            </svg>
            <div class="ml-3 w-9/12">${list}
            </div>
        </li>`
            experienceListSection.appendChild(elemencChild)
        })
         
        

  });



