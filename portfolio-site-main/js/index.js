const menu = document.querySelector(".menu");
const menuList = document.getElementById("menu-list");
const container = document.querySelector(".container");
menu.addEventListener("click", () => {
   menuList.classList.toggle("open-menu");
   container.classList.toggle("overlay");
   document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.removeEventListener("click", smoothScrollHandler);
   });
});
menuList.addEventListener("click", (e) => {
   if (e.target.tagName === "A") {
      menuList.classList.remove("open-menu");
      container.classList.remove("overlay");
   }
});

const options = {
   origin: "left",
   distance: "100px",
   duration: 1000,
   easing: "ease-in-out",
   reset: true,
   delay: 300,
};

ScrollReveal().reveal(".slide-left", options);
ScrollReveal().reveal(".slide-right", { ...options, origin: "right" });

function smoothScrollHandler(e) {
   e.preventDefault();
   const target = document.querySelector(this.getAttribute("href"));
   const offset = 80;
   window.scrollTo({
   top: target.offsetTop - offset,
   behavior: "smooth",
   });
}

if(window.innerWidth>480){
   document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", smoothScrollHandler);
   });
}
window.addEventListener("resize", () => {
   if (window.innerWidth > 480) {
      document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
         anchor.addEventListener("click", smoothScrollHandler);
      });
   }
});
