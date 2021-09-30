/* Get elements */
var cookiebtn = document.getElementByID("CookieBtn");
var cookiedisplay = document.getElementByID("CookieDisplay");

/* Set variables */
var clicks = 0;

/* Functions */
function setCookie(cname,cvalue,exdays) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  let expires = "expires=" + d.toGMTString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function checkCookie(input) {
  /* Get cookie amount */
  let data = getCookie(input);
  /* Check if user has cookies */
  if (data != "") {
    /* User has cookies, set cookies to the amount they saved */
    cookies = saved
  } else {
    /* User does not have cookies, Set cookies to 0 */
    cookies = 0;
  }
}

function addCookie(amount) {
  cookies = cookies + amount;
  cookiedisplay.innerHTML = cookies;
}

/* Check if cookies have been clicked before */
(checkCookie("saved");
 
/* Main game */
CookieBtn.addEventListener("click", () => {
  addCookie("1");
});
