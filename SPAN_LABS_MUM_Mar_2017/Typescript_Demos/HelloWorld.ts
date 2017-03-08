//let x = 10; // type inference
////x = true;

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


enum Category {
    Inspirational,
    Autobiography,
    Fiction,
    Comedy
}


interface IBook {
    id: number;
    title: string;
    author: string;
    available: boolean;
    category: Category;
}


function GetAllBooks():IBook[] {

    let books:IBook[] = [
        { id: 1, title: 'Wings Of Fire', author: 'Dr. APJ kalam', available: false,category:Category.Inspirational },
        { id: 2, title: 'Playing It My Way', author: 'Sachin Tendulkar', available: false,category:Category.Autobiography },
        { id: 3, title: 'Caged Wings', author: 'Adam Helios', available: true,category:Category.Fiction },
        { id: 4, title: 'I am Malala', author: 'Malala', available: true,category:Category.Autobiography }
    ]
    return books;
}

let allBooks: IBook[] = GetAllBooks();

function LogFirstAvailableBook(): void {
    for (let book of allBooks) {
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

function GetBooksByCategory(categoryFilter: Category): string[] {
    console.log('Getting books for category : ' + Category[categoryFilter]);
    let filteredBooks: string[] = [];
    for (let book of allBooks) {
        if (book.category == categoryFilter) {
            filteredBooks.push(book.title);
        }
    }
    return filteredBooks;
}

let biographyBooks: string[] = GetBooksByCategory(Category.Autobiography);

biographyBooks.forEach((item) => {
    console.log(item);
});

/// Function Type
var IdGenerator: (str_id: number, str_name: string) => string;

function EmpIDGenerator(id: number, name: string): string {
    return id + name;
}

IdGenerator = EmpIDGenerator; // assignment;

console.log(IdGenerator(10, 'XYZ'));

function ProductIDGenerator(id: number, name: string): string {
    // some more biz logic !
    return "prod_" +  id + name ;
}

IdGenerator = ProductIDGenerator; // assignment;

// Function Overloading

function GetTitles(author:string): string[];
function GetTitles(id: number,name:string): string[];
function GetTitles(bookProp :any,name?:any):string[]
{
    let foundTitles: string[] = [];

    if (typeof bookProp == 'string') {
        //for - of
    }

    if (typeof bookProp == 'number') {
        // for - of 
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


class Car {
    name: string;
    speed: number;
    constructor(n: string, s: number) {
        this.name = n;
        this.speed = s;
        console.log('Within Car ctor !');
    }
}

class JamesBondCar extends Car {
    canFly: boolean;
    canSubmerge: boolean;
    constructor(n: string, s: number, canFly: boolean, canSub: boolean) {
        super(n, s);
        this.canFly = canFly;
        this.canSubmerge = canSub;
        console.log('Within JBC ctor !');
    }
}

let jbc = new JamesBondCar('Houston', 300, true, false);

interface Person {
    name: string;
    age: number;
    address?: string;
    getDetails: (msg: string) => void;
}


class OldPerson implements Person {
    name: string ;
    age: number;  
    getDetails(msg: string): void {
        console.log(`${this.name} is ${this.age} years old !`);
    }
}

function Swap<T>(x: T, y: T) {
    let temp: T;
    temp = x;
    x = y;
    y = temp;
}


Swap<number>(10, 20);
Swap<string>('Hello', 'Bye');

let arr: Array<string> = ['BMW', 'Audi'];


interface PersonDetails {
    firstName: string;
    lastName: string;   
}

var json = '{"firstName":"Sumeet","lastName":"Wajpe","Age":30}';

var myJSON = {
    parse: function <T>(data: string):T {
        return JSON.parse(data);
    }
}

let jsObj = myJSON.parse<PersonDetails>(json);
console.log(jsObj);


