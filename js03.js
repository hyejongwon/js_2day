const hello = function(){
    console.log('hello')
}

hello();
//ES6 표기 
const goodbye = () =>{
    console.log('goodbye')
}

goodbye();

/* const num = (a,b) => {
    return a+b
}
 */
const num = (a,b) => a+b

console.log(num(10,20))