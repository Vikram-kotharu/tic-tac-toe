let r = document.getElementById('form1');
let r1 = document.getElementById('name');
let r2 = document.getElementById('email');
let r3 = document.getElementById('error');
let r4 = document.getElementById('error1');
let r5 = document.getElementById('status');
let r6 = document.getElementById('male');
let r7 = document.getElementById('female');
let formData = {
    name:'',
    email:'',
    status:'Active',
    gender:'Male',
}
//form submission by post request
function submitform(formData){
    let options = {
        method:'POST',
        headers:{
            'Content-type': 'application/json',
            Authorization: 'Bearer a8adf7bfddc1545c624922a0e089607c9cf23df7946fae245ebe499ee3cc21e4'
        },
        body: JSON.stringify(formData)
    }
    let url = 'https://gorest.co.in/public-api/users'

    fetch(url,options)
    .then(function(response){
        return response.json()
    })
    .then(function(jsonData){
        console.log(jsonData);
    })

}
//select
r5.addEventListener('change',(event)=>{
    formData.status=event.target.value;

})
//submit button
r.addEventListener('submit',(event)=>{
    event.preventDefault();
    console.log(formData)

    submitform(formData);
    
})
//radio button
r6.addEventListener('change',(event)=>{
    formData.gender = event.target.value;
})
r7.addEventListener('change',(event)=>{
    formData.gender = event.target.value;
})

// input element
r1.addEventListener('change',(event)=>{
    if(event.target.value === ''){
        r3.textContent = '*Required';
    }
    else{
        r3.textContent = '';
    }
    formData.name = event.target.value
})

r2.addEventListener('change',(event)=>{
    if(event.target.value === ''){
        r4.textContent = '*Required';
    }
    else{
        r4.textContent = '';
    }
    formData.email = event.target.value
})
    

