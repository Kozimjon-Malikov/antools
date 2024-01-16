// navigation
const navigation = document.querySelector(".navigation");
navigation.addEventListener("click", () => {
  let navbar = document.querySelector(".navbar>ul");
  navbar.classList.toggle("active__navbar");
  navigation.classList.toggle("active__dots");
});
  // Wrap your code in a function
  function handleScroll() {
    var mybutton = document.querySelector(".btn-arrow");
    // Use both properties to cover all browsers
    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;

    if (scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
  }
  function header(){
    let header=document.querySelector('header');
    if(document.documentElement.scrollTop>20 || document.body.scrollTop>20){
        header.classList.add('fixed');
    }else{
        header.classList.remove('fixed')
    }
  }
  // Attach the function to the window's scroll event
  window.onscroll = handleScroll;
  window.onscroll=header;
  // Initial call to handle the scroll position when the page loads
  handleScroll();
  header();