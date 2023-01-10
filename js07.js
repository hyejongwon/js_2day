//object 객체 
let user = {
    name:'kim',
    age:50,
    address:'seoul',
    tel:'010',
    hello:function(){
        console.log(`안녕하세요 ${this.name} 입니다.`)
    }
}
console.log(user)
console.log(user.name)
console.log(user.age)
user.hello();

// name 모모 gender male age 5 family 러시안블루 sayhello : 냥냥 
const cat = {
    name:'모모',
    gender:'male',
    age:5,
    num:50,
    family:'러시안블루',
    sayHello:function(){
        console.log('냥냥')
    }
}
console.log(cat.name)  
console.log(cat['gender']) 
cat.sayHello();
cat.color = 'gray'; // cat['color'] = "gray"  //속성추가 
delete cat.num; //delete cat['num'] //속성삭제 
console.log(cat)  

function catValue(obj,value) { 
    return obj[value]; // 키 값을 동적으로 받을때는 브라켓 노테이션만 가능 
}
console.log(catValue(cat,'age'))




