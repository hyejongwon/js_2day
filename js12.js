const user = {
    get nameOut(){
        return this.name;
    },
    set nameIn(value){
        if(value.length < 5){
            console.log("글자수를 다시 확인해주세요");
            return;
        }
        this.name = value
    }
}
//get => return 값이 반드시 있어야 한다. 
//set => 반드시 매개변수 1개 있어야 한다. 
user.nameIn = "benjack"
console.log(user.nameOut);


//class get set 
class Student{
    constructor(name){
        this.name = name;
    }
    get getEndYear(){
        return `${this.name}의 졸업년도는 ${this.startYear + 4}`
    }
    set setStartYear(year){
        this.startYear = year ; 
    }
}

const student1 =new Student('김철수');
student1.setStartYear = 2020;
console.log(student1.getEndYear)

// 숫자를 입력 받아서 set  +  get 10  출력 
const num = {
    get outputNum(){
        return `출력값은 ${this._num+10} `;
    },
    set inputNum(value){
        this._num = value;
    }
 }

num.inputNum = 20;
console.log(num.outputNum)