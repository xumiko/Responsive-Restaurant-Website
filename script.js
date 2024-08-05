let menu= document.querySelector("nav");
let menu_btn=document.querySelector(".menu-btn");
let close_btn=document.querySelector(".close-btn");

menu_btn.addEventListener("click", function(){
    menu.classList.add("active")
})

close_btn.addEventListener("click", function(){
    menu.classList.remove("active")
})


//swiper js code

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    centeredSlides: false,
    slidesPerGroupSkip: 1,
    grabCursor: true,
    keyboard: {
      enabled: true,
    },
    breakpoints: {
      769: {
        slidesPerView: 2,
        slidesPerGroup: 1,
      },
    },
    scrollbar: {
      el: ".swiper-scrollbar",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints:{
        0: {
            slidesPerView: 1,
        },
        768:{
            slidesPerView: 2,
        },
        968:{
            slidesPerView: 3,
        },
    },
  });

//dynamic images

const SectionCenter=document.querySelector(".menu_items_container")
const FilterBtns=document.querySelectorAll(".btn-cat")

FilterBtns.forEach(function(btn){
  btn.addEventListener("click", function(e){
    const category=e.currentTarget.dataset.id;
    const menuCategory=menus.filter(function(menuItem){
      if (menuItem.category==category){
        return menuItem;
      }
    });
    if(category=="all"){
      displayMenuItem(menus);
    }
    else{
      displayMenuItem(menuCategory);
    }
  })

});

const menus = [
  {
  id:1,
  title: "yumyum",
  category: "Main_course",
  price:"30$",
  img: "deal2.jpg",
},
{
id:2,
title: "yumyum",
category: "Starter",
price:"30$",
img: "new3.jpg",
},
{
  id:3,
  title: "yumyum",
  category: "Starter",
  price:"30$",
  img: "new2.jpg",
},
{
  id:4,
  title: "yumyum",
  category: "Main_course",
  price:"30$",
  img: "f11.jpg",
},
{
  id:5,
  title: "yumyum",
  category: "Starter",
  price:"30$",
  img: "food3.jpg",
},
{
  id:6,
  title: "yumyum",
  category: "Starter",
  price:"30$",
  img: "food9.jpg",
},
{
  id:7,
  title: "yumyum",
  category: "Main_course",
  price:"30$",
  img: "deal1.jpg",
},
{
  id:8,
  title: "yumyum",
  category: "Main_course",
  price:"30$",
  img: "nwe4.jpg",
},
{
  id:9,
  title: "yumyum",
  category: "Main_course",
  price:"30$",
  img: "nwe5.jpg",
},
{
  id:10,
  title: "yumyum",
  category: "Main_course",
  price:"30$",
  img: "deal3.jpg",
},
{
  id:11,
  title: "yumyum",
  category: "Main_course",
  price:"30$",
  img: "nwe3.jpg",
},
{
  id:12,
  title: "yumyum",
  category: "Starter",
  price:"30$",
  img: "starter2.jpg",
},
{
  id:13,
  title: "yumyum",
  category: "Starter",
  price:"30$",
  img: "starter3.png",
},


{
  id:14,
  title: "yumyum",
  category: "Dessert",
  price:"30$",
  img: "des4.jpeg",
},

{
  id:15,
  title: "yumyum",
  category: "Dessert",
  price:"30$",
  img: "des6.jpg",
},
{
  id:16,
  title: "yumyum",
  category: "Beverage",
  price:"30$",
  img: "bev2.png",
},
{
  id:17,
  title: "yumyum",
  category: "Beverage",
  price:"30$",
  img: "bev7.webp",
},
{
  id:18,
  title: "yumyum",
  category: "Beverage",
  price:"30$",
  img: "bev4.jpg",
},

{
  id:19,
  title: "yumyum",
  category: "Beverage",
  price:"30$",
  img: "bev3.jpg",
},
{
  id:20,
  title: "yumyum",
  category: "Dessert",
  price:"30$",
  img: "des1.webp",
},
{
  id:21,
  title: "yumyum",
  category: "Dessert",
  price:"30$",
  img: "des5.png",
},
{
  id:22,
  title: "yumyum",
  category: "Dessert",
  price:"30$",
  img: "des3.jpg",
},
{
  id:23,
  title: "yumyum",
  category: "Dessert",
  price:"30$",
  img: "des2.jpg",
},

]

window.addEventListener("DOMContentLoaded",function(){
displayMenuItem(menus);
});

function displayMenuItem(menuItem){
  let displayMenuItem= menuItem.map(function(item){
    return `<div class="img_cards">
                    <img src=${item.img} alt="">
                    <p class="price">${item.price}</p>
                    <p>${item.title}</p>
                </div>`;
  })

  displayMenuItem=displayMenuItem.join("");
  SectionCenter.innerHTML=displayMenuItem;
}

//static counter number start

const counterEl=document.querySelectorAll(".num");

counterEl.forEach((counterEl)=>{
  counterEl.innerText="0";
  increamentCounter();

  function increamentCounter(){
    let currentNum= +counterEl.innerText;
    const dataCeil= counterEl.getAttribute("data-ceil")
    const increament= dataCeil/15;
    currentNum=Math.ceil(currentNum+increament);

    if(currentNum<dataCeil){
      counterEl.innerText=currentNum;
      setTimeout(increamentCounter,70)
    }
    else{
      counterEl.innerHTML=dataCeil;
    }
  }

});

//static counter number close

// sticky menu start

const nav=document.querySelector("header")

window.addEventListener("scroll",function(){
  
  if(this.document.documentElement.scrollTop >20){
    nav.classList.add("sticky");
  }
  else{
    nav.classList.remove("sticky");
  }
})

// sticky menu close

//parallax effect

const parallax=document.querySelector("#showcase")
window.addEventListener("scroll",function(){
  let offset=window.pageYOffset;
  parallax.style.backgroundPositionY= offset * 0.7 + "px"
})