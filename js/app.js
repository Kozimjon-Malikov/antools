// navigation
const navigation = document.querySelector(".navigation");
navigation.addEventListener("click", () => {
  let navbar = document.querySelector(".navbar>ul");
  navbar.classList.toggle("active__navbar");
  navigation.classList.toggle("active__dots");
});
    function scrollHandler() {
      // Handle scroll for button
      var mybutton = document.querySelector(".btn-arrow");
      var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;

      if (scrollTop > 20) {
        mybutton.style.display = "block";
      } else {
        mybutton.style.display = "none";
      }

      // Handle scroll for header
      let header = document.querySelector('header');
      if (scrollTop > 20) {
        header.classList.add('fixed');
      } else {
        header.classList.remove('fixed');
      }
    }
    window.addEventListener('scroll', scrollHandler);

    // Initial call to handle the scroll position when the page loads
    scrollHandler();
  function header(){
    let header=document.querySelector('header');
    if(document.documentElement.scrollTop>20 || document.body.scrollTop>20){
        header.classList.add('fixed');
    }else{
        header.classList.remove('fixed')
    }
  }
  // Attach the function to the window's scroll event

  window.onscroll=header;
  // Initial call to handle the scroll position when the page loads

  header();
