const nav = document.querySelector("nav");
const sectionone = document.querySelector(".section1");
const brandlogo = document.querySelector(".logo");
const backtotop = document.querySelector("#back-to-top");
const sectiononeOptions ={
    rootMargin:"-300px 0px 0px 0px"
};
const backtotopOptions = {
    rootMargin: "-50px 0px 0px 0px"
};



const sectiononeObserver = new IntersectionObserver(function (entries,sectiononeOptions) {
entries.forEach(entry=>{
   if (!entry.isIntersecting) {
       nav.classList.remove("bg-transparent");
      nav.classList.add("bg-primary");
   } else {
       nav.classList.remove("bg-primary");
       nav.classList.add("bg-transparent");    
   }
});
},
sectiononeOptions);
sectiononeObserver.observe(sectionone);

const backtotopObserver = new IntersectionObserver(function (entries, backtotopOptions) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {   
            backtotop.style.opacity = 1;
        } else {
            backtotop.style.opacity = 0;
        }
    });
},
backtotopOptions);
backtotopObserver.observe(sectionone);