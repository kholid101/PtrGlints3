// dark dan light
const mode = document.querySelector('.mode');
let body = {
    'helo': document.querySelector('body'),
    'dark': false
}

mode.addEventListener('click', ()=>{
    if(body.dark === false){
        body.dark = true;
        body.helo.className = 'dark';
        mode.textContent = 'light';
    }
    else{
        body.dark = false;
        body.helo.className = 'light';
        mode.textContent = 'dark';
    }
});

const btns = document.querySelectorAll('li > button');
btns.forEach(btn =>{
    btn.addEventListener('click', ()=>{
        btn.classList.toggle('active');
    });
});