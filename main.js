
// This code creates a button. 
var existCondition = setInterval(function() {
  if (window.solana) {
     console.log("Exists!");
     clearInterval(existCondition);
     doTheRestOfTheStuff()
  } else {console.log("no")}
 }, 10); // check every 100ms


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
