(function(){
var t=document.querySelector(".menu-toggle"),m=document.getElementById("mobile-menu");
if(t&&m){t.addEventListener("click",function(){var o=m.classList.toggle("open");t.setAttribute("aria-expanded",o?"true":"false");t.setAttribute("aria-label",o?"Close menu":"Open menu");document.documentElement.style.overflow=o?"hidden":"";});}
var f=document.querySelector(".floatcall"),ft=document.querySelector(".site-footer");
if(f&&ft&&"IntersectionObserver" in window){new IntersectionObserver(function(e){f.classList.toggle("hide",e[0].isIntersecting);}).observe(ft);}
var bs=document.querySelectorAll(".navlinks>li>button");
for(var i=0;i<bs.length;i++){(function(b){var li=b.parentNode;
li.addEventListener("mouseenter",function(){b.setAttribute("aria-expanded","true");});
li.addEventListener("mouseleave",function(){b.setAttribute("aria-expanded","false");});
li.addEventListener("focusin",function(){b.setAttribute("aria-expanded","true");});
li.addEventListener("focusout",function(){b.setAttribute("aria-expanded","false");});})(bs[i]);}
})();
