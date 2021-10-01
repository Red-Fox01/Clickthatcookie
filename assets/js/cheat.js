/* Check if devtools are open */
if (window.devtools.isOpen == "true") {
  console.log("%cCheating eh?", "background: red; color: yellow; font-size: x-large");
}
window.addEventListener('devtoolschange', event => {
  if (event.detail.isOpen) {
    console.log("%cCheating eh?", "background: red; color: yellow; font-size: x-large");
  }
});
