const navbar=document.querySelector(".nav-bars");


navbar.addEventListener("click",() =>
{
   const headermenu=document.querySelector("ul.header-menu");
   const navicon=document.querySelector(".nav-Icon");


   headermenu.classList.toggle("show");

   navicon.forEach((icon) => {
    icon.classList.toggle("hidden");
   });

});


function navbarfixed()
{
   const header=document.querySelector(".header");
   navbar_dom=header.clientHeight+50;
   window.addEventListener("scroll",() =>
{
   let scroll=window.pageYOffset || document.documentElement.scrollup; 
   if(scroll>=navbar_dom)
   {
      header.classList.add("fixed-navbar");
   }
   else{
      header.classList.remove("fixed-navbar");
   }
});
}
navbarfixed();

function setmenuactive()
{
   const sections=document.querySelectorAll("section");
   const navlinks=document.querySelectorAll(".header-menu-item >a");
   window.addEventListener("scroll", () =>
   {
      let current="";
      sections.forEach((section) =>
      {
      const sectiontop=section.offsetTop;
      const sectionheight=section.clientHeight;
      if(pageYOffset >= sectiontop-sectionheight/3)
      {
         current=section.getAttribute("id");
      }
   });
   navlinks.forEach((li) =>
   {
      li.classList.remove("active");
      if(current==li.getAttribute("href").split("#")[1])
      {
         li.classList.add("active");
      }
   
   }); 
 });
}

 setmenuactive();
 
 



 function menuclick()
 {
   for(let i=0;i<navlinks.lenth;i++)
   {
      navlinks[i].addEventListener("click",() =>
      {
         const headermenu=document.querySelector("ul.header-menu");
         const navicon=document.querySelector(".nav-Icon");
      
      
         headermenu.classList.toggle("show");
      
         navicon.forEach((icon) => {
          icon.classList.toggle("hidden");
         });
         });
      
      }
 }

 menuclick();