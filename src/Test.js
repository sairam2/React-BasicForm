let myFun = function(){
  if(true){
  console.log(varMe);
  console.log(letMe);
  
  var varMe = 2;
  let letMe = 1;
  }
  }
  
  myFun();
  

  (function(){ 
    setTimeout(()=> console.log(1),0); 
    console.log(2); 
    setTimeout(()=> console.log(3),0); 
      console.log(4); 
  })()

let a = true;
let x = 1;
setTimeout(()=>{
a = false;
}, 2000)

while(a){
console.log(x++);
}


Convert Date Format:
Input: 18/12/2021
Output: Dec18, 2021
let d = new Date(Input);
d.Format('Md, Y');
d.Format('mmmdd, yyyy');


Style1 {
  text-size:16px;
  color:red;
}

Style2 {
  text-size:18px;
  color:green;
}

Style3 {
  text-size:20px;
  color:blue;
}

div#root > p > Style1, Style2, Style3 {
  text-size:16px !important;
}

Var student ={school: ‘KVS’}
var student1 = Object.create(student);
Delete student1.school 
console.log(student1.school);

output: KVS -: because Prototype property
Throttling & Denouncing
