document.getElementById("add-users").addEventListener("click",function(){
    document.getElementsByClassName("popup")[0].classList.add("active");
  });
  
  document.getElementById("add-popup-btn").addEventListener("click",function(){
    document.getElementsByClassName("popup")[0].classList.remove("active");
  });