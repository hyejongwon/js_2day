// 생성자 함수를 사용해서 여러개의 오브젝트를 만들어서 사용
// prototype 을 이용해서 상속을 받아서 값을 참조 
// => ES6 클래스 Class 

class User{
    constructor(name,age){
        this.name=name;
        this.age=age;
        /* this.hi = function(){
            console.log('이름은'+this.name+'나이는'+this.age)
        } */
    }
    hi(){
        console.log('이름은'+this.name+'나이는'+this.age)
    }
}
const user1 = new User('김길동',10);
const user2 = new User('이순희',15);
user1.hi();

//extends
class AddUserLocation extends User{
    constructor(name,age,location){
        super(name,age);
        this.location=location;
    }
    hi(){
        console.log('유저의 위치는' + this.location) //덮어쓰기 오버라이딩
    }
}

const userlocation = new AddUserLocation('JACK',20,'NY');
console.log(userlocation);
userlocation.hi();


class Dog {
    constructor (color,weight,gender){
        this.color=color;
        this.weight=weight;
        this.gender=gender;
    }
}
const dog1 = new Dog('black',3.5,'male');
console.log(dog1)
//class Dog  을 확장해서  cat 만들고 name 속성을 추가 한다. 
class Cat extends Dog {
    constructor(color,weight,gender,name)  {
        super(color,weight,gender);
        this.name=name;
    }
}

const cat1 = new Cat('black',4.5,'female','순둥이');
console.log(cat1)