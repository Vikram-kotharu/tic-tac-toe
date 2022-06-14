let r = document.getElementById('form1');
let r1 = document.getElementById('name');
let r2 = document.getElementById('email');
let r3 = document.getElementById('error');
let r4 = document.getElementById('error1');

r.addEventListener('submit',(event)=>{
    event.preventDefault();
    console.log('hello');
})

r1.addEventListener('blur',(event)=>{
    if(event.target.value === ''){
        r3.textContent = '*Required';
    }
    else{
        r3.textContent = '';
    }
})

r2.addEventListener('blur',(event)=>{
    if(event.target.value === ''){
        r4.textContent = '*Required';
    }
    else{
        r4.textContent = '';
    }
})
    

