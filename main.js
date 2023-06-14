console.log('aaa');
let start = document.getElementById('start');
let wait = document.getElementById('wait');
const MsgUpdate = () => {
    start.hidden = true;
    wait.hidden = false;
}
setTimeout(MsgUpdate,10000)
window.addEventListener("load", () => {
    location.href = 'http://222.148.192.61/';
});