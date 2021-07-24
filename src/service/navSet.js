const navHeader = document.getElementById('nav-haed');
const nav = document.getElementById('nav-list');
const buttonClose = document.getElementById('btn-close');
const buttonShow = document.getElementById('btn-show');
const topScroll = document.querySelector(".top-link");
// const barSpan = document.querySelectorAll('#info');
// const progressLine = document.querySelectorAll('#animate');
// const progressLineSpan = document.querySelectorAll('#animate2');
// const progressLineSpanBefore = window.getComputedStyle(progressLineSpan, '::before');
// const progressLineSpanAfter = window.getComputedStyle(progressLineSpan, '::after');
// var heightScreen = document.body.scrollTop;
// var heightScreen2 = document.documentElement.scrollTop;

buttonClose.addEventListener('click', ()=> {
  nav.classList.remove('nav__active');
})

buttonShow.addEventListener('click', ()=> {
  nav.classList.add('nav__active');
})

window.onscroll = ()=> {
  if(document.body.scrollTop > 35 || document.documentElement.scrollTop > 35) {
    navHeader.className = "sticky";
  } else {
    navHeader.className = navHeader.className.replace("sticky","");
  }

  if(document.body.scrollTop > 450 || document.documentElement.scrollTop > 450) {
    topScroll.classList.add("show-link");
  } else {
    topScroll.classList.remove("show-link");
  }

  console.log(document.body.scrollTop);

  // if(document.body.scrollTop > 2888 || document.documentElement.scrollTop > 2888) {
  //   barSpan.classList.add("showText");
  //   progressLine.classList.add("animate");
  //   progressLineSpan.classList.add("animate2");
  //   progressLineSpanBefore.add("showText2");
  //   progressLineSpanAfter.add("showText2");
  // } else {
  //   barSpan.classList.remove("showText");
  //   progressLine.classList.remove("animate");
  //   progressLineSpan.classList.remove("animate2");
  //   progressLineSpanBefore.remove("showText2");
  //   progressLineSpanAfter.remove("showText2");
  // }
}