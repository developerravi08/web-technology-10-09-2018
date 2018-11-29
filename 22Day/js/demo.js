function myFun() {

    var v1 = 10;

    var name = 'Jhon', lastName = 'Dev', v2 = 10;

    var fullName = name + " " + lastName;

    var total = v1 * v2;
    document.getElementById('demo').innerHTML = 'Welcome to Java Script  ' + total + fullName;
    console.log('fullName', fullName);


    var myNumber = 10;
    var myString = 'New';
    var Obk = { name: 'Raj', age: 28 }

    var concat = myNumber + myNumber + myString;

    console.log('concat', concat)
    var concat = myString + myNumber + myNumber;

    console.log('concat', concat)

    var x = 10;
    var y = 10;
    var z = 20;

    var SName = 'SName';


    var car;
    var myCar = null

    console.log(typeof (car), typeof (myCar))

    console.log(car, myCar);


    console.log(x == y)
    console.log(x == z)






}


// console.log('Log ...');

var myArry = ['fName', 'lName'];


function ChangeArray() {

    myArry.push('Raj')

    console.log('myArry', myArry)
}



// var total = myFunction(5, 6);
// console.log('total', total);

function myFunction(p1, p2) {




    // console.log(p1 + p2);
    return p1 + p2;




}


var loginObj = {
    userName: 'Raj',
    password: 'Dev',
}


function myAdd() {





    var p1 = document.getElementById('v1').value;
    var p2 = document.getElementById('v2').value;



    document.getElementById('result').innerHTML = parseInt(p1) + parseInt(p2);



}



var a = [];  // Array;
var b = {};  // Object

// var c = ();  // function
var d = '';

var d = 10;



// [{}]  