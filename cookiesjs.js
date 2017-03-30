// SUGAR COOKIE
var sugarPicture = document.querySelector("#picture1");
var sugarClicks = 0;
var sugarCount = document.querySelector("#count1");
sugarPicture.addEventListener("click", function(){
  sugarClicks++
  Cookies.set("sugarCookie", sugarClicks)
})
function sugar(){
sugarCount.innerHTML = Cookies.get("sugarCookie")
}

// CHOCOLATE COOKIE
var chocolatePicture = document.querySelector("#picture2");
var deleteButton2 = document.querySelector("#delete2");
var sugarClicks2 = 0;
var sugarCount2 = document.querySelector("#count2");
chocolatePicture.addEventListener("click", function(){
  sugarClicks2++
  Cookies.set("chocolateCookie", sugarClicks2)
})
  function chocolate(){
  sugarCount2.innerHTML = Cookies.get("chocolateCookie")
}

// LEMON COOKIE
var lemonPicture = document.querySelector("#picture3");
var sugarClicks3 = 0;
var sugarCount3 = document.querySelector("#count3");

lemonPicture.addEventListener("click",function(){
  sugarClicks3++
  Cookies.set("lemonCookie", sugarClicks3)
})
  function lemon(){
  sugarCount3.innerHTML = Cookies.get("lemonCookie")
}

// DELETE BUTTON
var deleteButton = document.querySelector("#DELETE");
var deleteClicks = 0;
deleteButton.addEventListener("click",function(){
  Cookies.set("sugarCookie", 0);
})
var deleteButton = document.querySelector("#DELETE");
var deleteClicks = 0;
deleteButton.addEventListener("click",function(){
  Cookies.set("chocolateCookie", 0);
})
var deleteButton = document.querySelector("#DELETE");
var deleteClicks = 0;
deleteButton.addEventListener("click",function(){
  Cookies.set("lemonCookie", 0);
})


// SHOWS DATA STORED ON NEW ONLOAD
window.onload = sugar()
window.onlod = chocolate()
window.onload = lemon()
