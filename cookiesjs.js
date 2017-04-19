
// SUGAR COOKIE
var sugarPicture = document.querySelector("#picture1");
var sugarClicks = Cookies.get("sugarCookie") || 0
var sugarCount1 = document.querySelector("#count1");
sugarPicture.addEventListener("click", function(){
  sugarClicks++
  // console.log(Cookies.get("sugarCookie"))
  Cookies.set("sugarCookie", sugarClicks)
  sugarCount1.innerHTML = Cookies.get("sugarCookie")
})

function sugar(){
  sugarCount1.innerHTML = Cookies.get("sugarCookie")
}

// CHOCOLATE COOKIE
var chocolatePicture = document.querySelector("#picture2");
var chocolateClicks = Cookies.get("chocolateCookie") || 0
var chocolateCount2 = document.querySelector("#count2");

chocolatePicture.addEventListener("click", function(){
  chocolateClicks ++
  // console.log(Cookies.get("chocolateCookie"))
  Cookies.set("chocolateCookie", chocolateClicks)
  chocolateCount2.innerHTML = Cookies.get("chocolateCookie")
})

  function chocolate(){
    chocolateCount2.innerHTML = Cookies.get("chocolateCookie")
}

// LEMON COOKIE
var lemonPicture = document.querySelector("#picture3");
var lemonClicks = Cookies.get("lemonCookie") || 0
var sugarCount3 = document.querySelector("#count3");

lemonPicture.addEventListener("click",function(){
  lemonClicks ++
  // console.log(Cookies.get("lemonCookie"))
  Cookies.set("lemonCookie", lemonClicks)
  sugarCount3.innerHTML = Cookies.get("lemonCookie")
})

function lemon(){
  sugarCount3.innerHTML = Cookies.get("lemonCookie")
}




// DELETE BUTTON
var deleteButton = document.querySelector("#DELETE");
var deleteClicks = 0;
deleteButton.addEventListener("click",function(){
  Cookies.set("sugarCookie", 0);
  Cookies.set("chocolateCookie", 0);
  Cookies.set("lemonCookie", 0);
})


// SHOWS DATA STORED ON NEW ONLOAD
window.onload = sugar()
window.onload = chocolate()
window.onload = lemon()
