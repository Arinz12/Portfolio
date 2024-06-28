//


const ele=document.getElementById("menu");
const covv =document.getElementById("cov");
ele.style.display="none";
function show(){

        covv.style.display="block";
        ele.style.display="inline-block";
    }
function clo(){
    covv.style.display="none";
        ele.style.display="none";
}

// Select the element you want to animate
const element = document.querySelectorAll('.y');

// Function to check if an element is in viewport
function isInViewport(aa) {
  const rect = aa.getBoundingClientRect();
  return (
    rect.top >=0 &&
    rect.left >= 0 &&
    //rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Function to handle scroll event
function handleScroll() {
  element.forEach((a)=>{
    if(a.classList.contains(".src")){
        return;
    }
    else{if (isInViewport(a)) {
        a.classList.add('scr'); // Add a class to trigger CSS animation or transition
        // window.removeEventListener('scroll', handleScroll); // Remove event listener once animation is triggered
      }}
  })  
  
}

// Add scroll event listener to trigger animation
//window.addEventListener('scroll', handleScroll);
function addd(a){
  const prev=document.getElementsByClassName("ski");
 if(prev.item(0)!=null){prev.item(0).classList.remove("ski");}
  const elem=document.getElementById(a);
  elem.classList.add('ski');
}
