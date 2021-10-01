/* Get elements */
var cookiebtn = document.getElementById("CookieBtn");
var cookiedisplay = document.getElementById("CookieDisplay");

/* Set variables */
let cookies = 0;

/* Functions */
function storeData(name,value) {
  localStorage.setItem(name, value);
}

function updateData(name,value) {
  let data = localStorage.getItem(name);
  localStorage.setItem(name, value);
}

function getData(name) {
  let data = localStorage.getItem(name);
  return data;
}

function addCookie(amount) {
  let newval;
  storeData("saved", "true");
  let cookies = Number(getData("Cookies"));
  if (cookies == "null") {
    newval = amount
  } else {
    newval = cookies + amount
  }
  updateData("Cookies", newval);
  console.log("Added cookie");
  cookiedisplay.innerHTML = newval;
}

/* Check if cookie has been clicked before */
if (getData("saved")) {
  let cookiesls = Number(getData("Cookies"));
  if (cookiesls == "null") {
    /* User does not have cookies, Set cookies to 0 */
    cookies = 0;
  } else {
    cookies = cookiesls;
  }
  cookiedisplay.innerHTML = cookies;
} else {
  cookiedisplay.innerHTML = cookies;
}

/* Buttons */
cookiebtn.addEventListener("click", () => {
  addCookie(1);
});
