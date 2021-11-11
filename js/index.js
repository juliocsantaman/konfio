let containerBtnPurple = document.getElementById('container-btn-purple');
let btnCreate = document.getElementById('btnCreate');

window.addEventListener('scroll', (e) => {
  // console.log(window.scrollY);

  if(window.scrollY == 0) {
    containerBtnPurple.classList.add('hidden');  
    btnCreate.classList.add('hidden');
  }

  if(window.scrollY > 1) {
    containerBtnPurple.classList.remove('hidden');
    btnCreate.classList.remove('hidden');
  }
});