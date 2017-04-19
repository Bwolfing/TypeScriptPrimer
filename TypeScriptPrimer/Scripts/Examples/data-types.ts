// Any data type
let myAny: any = "start as string";
logToScreen("typeof myAny: " + typeof myAny);
myAny = `Current string: ${myAny}`; // Interpolated
logToScreen("typeof myAny: " + typeof myAny);
myAny = 5;
logToScreen("typeof myAny: " + typeof myAny);
myAny = {};
logToScreen("typeof myAny: " + typeof myAny);
myAny.member = "message";
myAny["otherMember"] = {};


// Functions
let myAnonymousFunc = () => logToScreen("hello world from myAnonymousFunc()!");
logToScreen("typeof myAnonymousFunc: " + typeof myAnonymousFunc);
myAnonymousFunc();

let multilineAnonymousFunc = (msg?: string) => {
    if (msg) {
        logToScreen(msg);
    } else {
        logToScreen("No message provided");
    }
};
logToScreen("typeof multilineAnonymousFunc: " + typeof multilineAnonymousFunc);
multilineAnonymousFunc();
multilineAnonymousFunc("Example message!");

function logMessage(msg: string, timeOut?: number): void {
    if (timeOut) {
        setTimeout(() => logToScreen(`Time out of ${timeOut}ms: ` + msg), timeOut);
    } else {
        logToScreen(msg);
    }
}

// Object
let myObj = { availableKey: "hello" };
console.log(myObj.availableKey); 
myObj["indexedKey"] = "success"; // Okay
// myObj.unavailableKey = "failure"; // Error, undefined key

let myPersonObj: { name: string, age: number };
myPersonObj = { name: "John", age: 10 }; // Okay
// myPersonObj = { name: "Sally", }; // Error, missing age key
function foo() {
    return {
        name: "Bob",
        age: 14,
        ssn: "xxx-xx-xxxx"
    };
}
myPersonObj = foo(); // Okay, has name and age properties

// Enums
enum DeviceType {
    Touch,
    Touch2,
    Gen2,
    Gen3
}
logToScreen(DeviceType.Gen2.toString());

// Interfaces
interface Device {
    readonly deviceType: DeviceType;
    mdn: string;
    account?: any; // optional property
}

interface Phone extends Device {
    sendText(message: string): void;
}

let myPhone: Phone = {
    deviceType: DeviceType.Touch2,
    mdn: "555-555-5555",
    sendText: (message: string) => { /* code */ },
};
logToScreen("myPhone.mdn: " + myPhone.mdn);
// Interfaces (and classes) support polymorphic assignment
let currentDevice: Device = myPhone;

// Classes
class Person {
    // Can explicitly define properties
    protected ssn: string;
    public givenAge: number;
    public name: string;

    constructor(name: string,
        givenAge: number,
        // We can also specify properties in the constructor arguments
        private actualAge: number,
        ssn: string,
        public nickName?: string) {
        this.ssn = ssn;
        this.name = name;
    }
}

let myPerson = new Person("John Doe", 21, 18, "xxx-xx-xxxx", "Johnny");
logToScreen(myPerson.nickName); // Okay
//myPerson.actualAge; // Error, not a public property