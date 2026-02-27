// promise is most important for mid term 



// 7. clousers ->  function + its lexical scope of varibale 
//  Encapsulation in js is achived by clousers 
function outer(){
let count = 0;
return function inner (){
    count++;
    console.log(count);
}
}

let ans = outer();
ans()
ans()
ans()


