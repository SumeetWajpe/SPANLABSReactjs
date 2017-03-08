//let x = 10; // type inference
////x = true;
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
//let str;
//str = 'Hello !';
//str = 10;
//enum Designations {
//    Trainer,
//    Developer ,
//    Tester,
//    Architect
//}
//let myDesgn: Designations;
//myDesgn = Designations.Tester;
//console.log(myDesgn);
//var stringArray: string[] = ['BMW', 'Audi', 'Honda', 'Hyundai'];
//var anotherStringArray: Array<string> = ['BMW', 'Audi', 'Honda', 'Hyundai'];
//var arrayOfAny: any[] = ['Hi', 10, true];
//var anyVar: any;
//function SimpleTypescriptFunc():void {
//   // return 'Return this';
//}
//function Add(x: number, y: number): number {
//    return x + y;
//}
//function Add(x: number, y: number):number {
//    return x + y;
//}
//var result = Add(10, 20);
//function TestAdd(): Designations {
//    return;
//}
var Category;
(function (Category) {
    Category[Category["Inspirational"] = 0] = "Inspirational";
    Category[Category["Autobiography"] = 1] = "Autobiography";
    Category[Category["Fiction"] = 2] = "Fiction";
    Category[Category["Comedy"] = 3] = "Comedy";
})(Category || (Category = {}));
function GetAllBooks() {
    var books = [
        { id: 1, title: 'Wings Of Fire', author: 'Dr. APJ kalam', available: false, category: Category.Inspirational },
        { id: 2, title: 'Playing It My Way', author: 'Sachin Tendulkar', available: false, category: Category.Autobiography },
        { id: 3, title: 'Caged Wings', author: 'Adam Helios', available: true, category: Category.Fiction },
        { id: 4, title: 'I am Malala', author: 'Malala', available: true, category: Category.Autobiography }
    ];
    return books;
}
var allBooks = GetAllBooks();
function LogFirstAvailableBook() {
    for (var _i = 0, allBooks_1 = allBooks; _i < allBooks_1.length; _i++) {
        var book = allBooks_1[_i];
        if (book.available) {
            console.log('First available book : ' + book.title);
            break;
        }
    }
}
LogFirstAvailableBook();
/*
//var Add = function (x, y) {
//    return x + y;
//}

// Arrow functions !

//var Add = (x:number, y:number):number => {
//    return x + y;
//}

//var Square = (x) => { return x * x; }
//var Square = x => x * x;

//var SomeMethodWithNoParams = () => {

//}
//console.log(Add(20, 40));

//var stringArray = ['BMW', 'Audi', 'Honda', 'Hyundai'];

//stringArray.forEach(function (item, index) {
//    console.log(item + ' - ' + index);
//});

//stringArray.forEach((item, index) => {
//    console.log(item + ' - ' + index);
//});
*/
function GetBooksByCategory(categoryFilter) {
    console.log('Getting books for category : ' + Category[categoryFilter]);
    var filteredBooks = [];
    for (var _i = 0, allBooks_2 = allBooks; _i < allBooks_2.length; _i++) {
        var book = allBooks_2[_i];
        if (book.category == categoryFilter) {
            filteredBooks.push(book.title);
        }
    }
    return filteredBooks;
}
var biographyBooks = GetBooksByCategory(Category.Autobiography);
biographyBooks.forEach(function (item) {
    console.log(item);
});
/// Function Type
var IdGenerator;
function EmpIDGenerator(id, name) {
    return id + name;
}
IdGenerator = EmpIDGenerator; // assignment;
console.log(IdGenerator(10, 'XYZ'));
function ProductIDGenerator(id, name) {
    // some more biz logic !
    return "prod_" + id + name;
}
IdGenerator = ProductIDGenerator; // assignment;
function GetTitles(bookProp, name) {
    var foundTitles = [];
    if (typeof bookProp == 'string') {
    }
    if (typeof bookProp == 'number') {
    }
    return foundTitles;
}
//GetTitles();   // error !
// Types Of Parameters
// Default Parameters
//function Print(noOfPages: number, author: string, typeOfPrint: string = 'B/W') {
//    console.log(noOfPages);
//    console.log(author);
//    console.log(typeOfPrint);
//}
//Print(100, 'J Parate');
//Print(100, 'Ranjit Desai', 'Colour');
// Optional Parameters
//function Print(noOfPages: number, author: string, typeOfPrint?: string) {
//    console.log(noOfPages);
//    console.log(author);
//    console.log(typeOfPrint);
//}
//Print(100, 'J Parate');
//Print(100, 'Ranjit Desai', 'Colour');
// Rest of args (functions)
//function Print(noOfPages: number, ...restOfArgs: any[]) {
//console.log(...restOfArgs);
//}
//Print(10,'Pune','Ranjit',60,'India');
//function Print(noOfPages: number, author: string, typeOfPrint: string) {
//}
//Print(...[100, 'ABC', 'B/W']);
// Interfaces
//interface Person {
//    name: string;
//    age: number;
//    address?: string;
//    getDetails: (msg: string) => void;
//}
//var person: Person;
//person = {
//    name: 'Aniket', age: 30, getDetails: (msg:string) => void {
//    }
//};
//interface Emp extends Person {
//    id: number;
//}
//class Car {
// // private  name: string;
// //  protected  name: string;
//    name: string;
//    speed: number;
//    constructor(n: string, s: number) {
//        this.name = n;
//        this.speed = s;
//    }
//}
// OR
//class Car {
//    constructor(private name: string, private speed: number) {
//    }
//   accelerate() {
//        console.log('VVRROMMMM..');
//    }
//}
//var c = new Car('i30', 300);
var Car = (function () {
    function Car(n, s) {
        this.name = n;
        this.speed = s;
        console.log('Within Car ctor !');
    }
    return Car;
}());
var JamesBondCar = (function (_super) {
    __extends(JamesBondCar, _super);
    function JamesBondCar(n, s, canFly, canSub) {
        _super.call(this, n, s);
        this.canFly = canFly;
        this.canSubmerge = canSub;
        console.log('Within JBC ctor !');
    }
    return JamesBondCar;
}(Car));
var jbc = new JamesBondCar('Houston', 300, true, false);
var OldPerson = (function () {
    function OldPerson() {
    }
    OldPerson.prototype.getDetails = function (msg) {
        console.log(this.name + " is " + this.age + " years old !");
    };
    return OldPerson;
}());
function Swap(x, y) {
    var temp;
    temp = x;
    x = y;
    y = temp;
}
Swap(10, 20);
Swap('Hello', 'Bye');
var arr = ['BMW', 'Audi'];
var json = '{"firstName":"Sumeet","lastName":"Wajpe","Age":30}';
var myJSON = {
    parse: function (data) {
        return JSON.parse(data);
    }
};
var jsObj = myJSON.parse(json);
console.log(jsObj);
