



function doTheRestOfTheStuff() {
const isPhantomInstalled = window.solana && window.solana.isPhantom
let btn = document.createElement("button");
console.log("wtf")
console.log(isPhantomInstalled);
console.log(window.solana)
if(isPhantomInstalled == true) {
  btn.innerHTML = "Phantom Wallet Present: click her to connect";
}else{
  btn.innerHTML = "Phantom Wallet Not Present";
}
document.body.appendChild(btn);
//btn.onclick = connectWallet();
}

window.addEventListener('load', doTheRestOfTheStuff)


async function connectWallet() {
  try {
    const resp = await window.solana.connect();
    resp.publicKey.toString()
    // 26qv4GCcx98RihuK3c4T6ozB3J7L6VwCuFVc7Ta2A3Uo 
} catch (err) {
    // { code: 4001, message: 'User rejected the request.' }
}
};

