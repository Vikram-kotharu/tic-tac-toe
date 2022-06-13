let vikram = 12;

function multi(){
    let res = vikram*2;
    return res;
}

//let r = 10;

if(r>1){
    console.log('greater than 1')

}
else{
    console.log('less than 10')
}
let r = 10;
switch(r){
    case r>=10:
        console.log('yes');
        break;
    case r<10:
        console.log('no');
        break;
    default:
        console.log('okay');        
}


//for in loop
// gives indexes

let d = [1,2,3,4];
for(let e in d){
    console.log(d[e]);
}
//for of loop ..gives direct elements
for(let e1 in d){
    console.log(e1);
}

//for each loop
//combinaiton of for in and for of loops
d.forEach(element,index,array => {
    console.log(element);
    console.log(index);
    
});

//sort
// sort method defaulty works on strings...its treats them as strings...
let w = [1,2,3,14,5];
console.log(w.sort());