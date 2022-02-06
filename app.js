const bar = document.querySelector('.element');
bar.addEventListener('click', toggled);
const active = document.querySelector('.active')
const last = document.querySelector('.last')
function toggled () {
   bar.classList.toggle('animation')
   active.classList.toggle('actived')
   last.classList.toggle('lasted')
   
}
