
// This code creates a button. 
const isPhantomInstalled = window.solana && window.solana.isPhantom
console.log(window.solana)
let btn = document.createElement("button");
console.log("wtf")
console.log(isPhantomInstalled);
if(isPhantomInstalled == true) {
  btn.innerHTML = "Phantom Wallet Present";
}else{
  btn.innerHTML = "Phantom Wallet Not Present";
}
document.body.appendChild(btn);