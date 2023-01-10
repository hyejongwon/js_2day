var num = 1 ; //전역변수
if(true){
    var num = 100 ; 
    //전역변수  
    //var 함수안에서만 지역변수
}

console.log(num); //100

let hello = '안녕하세요'; //전역변수 ;

if(true){
    let hello="hello" ;  
    console.log(hello); 
    //지역변수 
    //let 코드블록 안에서 지역변수
}

console.log(hello);