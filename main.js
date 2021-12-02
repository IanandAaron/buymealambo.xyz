
function doTheRestOfTheStuff() {
const isPhantomInstalled = window.solana && window.solana.isPhantom
let btn = document.createElement("button");
console.log("wtf")
console.log(isPhantomInstalled);
console.log(window.solana)
if(isPhantomInstalled == true) {
  btn.innerHTML = "Phantom Wallet Present";
}else{
  btn.innerHTML = "Phantom Wallet Not Present";
}
document.body.appendChild(btn);}

window.addEventListener('load', (event) => {
  doTheRestOfTheStuff();
});