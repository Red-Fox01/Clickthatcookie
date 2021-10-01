/* Get elements */
var aboutbtn = document.getElementById("AboutBtn");
var aboutdiv = document.getElementById("AboutDiv");
var storebtn = document.getElementById("StoreBtn");
var storediv = document.getElementById("StoreDiv");

/* Buttons */
aboutbtn.addEventListener("click", () => {
  if (window.getComputedStyle(aboutdiv).display === "none") {
    aboutdiv.style.display = "block";
    aboutdiv.className = 'tooltiptext';
  } else if (window.getComputedStyle(aboutdiv).display === "block") {
    aboutdiv.style.display = 'none';
    aboutdiv.className = 'tooltiptext';
  }
});
storebtn.addEventListener("click", () => {
  if (window.getComputedStyle(aboutdiv).display === "none") {
    aboutdiv.style.display = "block";
    aboutdiv.className = 'tooltiptext';
  } else if (window.getComputedStyle(aboutdiv).display === "block") {
    aboutdiv.style.display = 'none';
    aboutdiv.className = 'tooltiptext';
  }
});
