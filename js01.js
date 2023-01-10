function hello(){
    console.log('hello world')
}

hello();

function num(a,b){
    console.log(`${a} ${b}`)
}

num(10,20);

function sum(a,b){
    console.log('함수');
    return a+b
}

const result = sum(1,2) ;
console.log(result)

function userInfo(name,age){
    return `이름은${name} 나이는${age}`  
}

const profile = userInfo('홍길동',20)
console.log(profile)

// 두개의 매개변수를 받아서 두 값을 곱해서 출력 하는 함수  

function muti(num1,num2){
    return  num1*num2
}

const resultMuti1 =  muti(5,30)
console.log(resultMuti1) //150 

function outNum(num){
    if(num<0){
        return;
    }
    console.log(num)
}

outNum(12)