// ex 1
function showDate(){
    document.getElementById('date').innerHTML = Date();
}
// ex 2
function changeText(){
    document.getElementById('c_text').innerHTML = "hello world";
}
// ex 3
function changeFontSize(){
    document.getElementById('ch_font').style.fontSize = "30px" ; 
}

// ex 4
function changeColor(){
    document.getElementById('ch_color').style.color = "red";
}

// ex 5
function hideText(){
    document.getElementById('hide').style.display = "none";
}

// ex 6
function showText(){
    document.getElementById('show').style.display = "block";
}

// ex 7
function windowAlert(){
  window.alert("hello world");
}

// ex 8
function printPage(){
    window.print();
}

// ex 9 to 12
function statment(){
    var x = 5;
    var y = 6;
    var z = x + y;
    var m = x * y;
    var n = m - 10;
    var p = m / 3;
   document.getElementById('plus').innerHTML = z;
   document.getElementById('into').innerHTML = m;
   document.getElementById('minus').innerHTML = n;
   document.getElementById('devide').innerHTML = p;
}

// ex 13 to 16
function numPlus(){
    let x = 10;
    let y = 5;
    let w = x + y;
    let a = (w + 5) * 2;
    let b = a / y;
    let c = a % y;
    document.getElementById('l_plus').innerHTML = w;
    document.getElementById('l_into').innerHTML = a;
    document.getElementById('l_divide').innerHTML = b;
    document.getElementById('l_per').innerHTML = c;
}
// ex 17
function carName(){
    const cars = ["honda", "toyota", "pazaro"]
    document.getElementById('car').innerHTML = cars;
}
// ex 18
function numIncrease(){
    let x = 30;
    let y = (x + 2) * 5;
    document.getElementById('incriment').innerHTML = y ; 
}
// ex 19
function hoverElement(){
    document.getElementById('2nd').style.backgroundColor = "red";
}
function hoverElementOut(){
    document.getElementById('2nd').style.backgroundColor = "white";
}

// ex 20
let car = "volvo";
let result = 10 +  car;
document.getElementById('data').innerHTML = result;

// ex 21
let ab = 50;
let cb = 40;
let xy = ab ++> cb;
document.getElementById('num').innerHTML = xy;

// ex 22 23
function funtion( a, b){
    return a * b;
}
let answer = funtion( 10, 5);

function jsFuntion(){
document.getElementById('fun').innerHTML = answer;
}

// ex 24
let x = funSecond(50, 50);
function funtionResult(){
 document.getElementById('jsfun').innerHTML = x;
}

 function funSecond(m, n){
    return m + n;
 }

//  ex 25
const person = {
    firstName: "abu ",
    lastName: "jafor ",
    age: 22 ,
    favColor: "white "
}
    function showObject(){
    document.getElementById('j_object').innerHTML = person.firstName + person.lastName + "is " + person.age + " years old . " + "his favourite color " + person.favColor + ".";
}

// ex 26
function family( first, last, age, city){
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.city = city;
}
const myFather = new family("abc", "def", 55, "chittagong");
const myMother = new family("xyz", "mnp", 45, "chittagong");

document.getElementById('con').innerHTML = "my father is " + myFather.age + " years old ";

// ex 27
let text = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum deserunt tenetur aut! Quibusdam quia quae, atque itaque optio maiores dolorum!"
function textCount(){
    document.getElementById('st_num').innerHTML = text.length;
}
// ex 28
let name = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis tempora, laboriosam quam debitis nobis repellendus rem aut quibusdam pariatur! Velit eos error, sint saepe dolor sunt rem maiores placeat provident laboriosam quia laudantium optio dolorem. Quo doloribus atque minus facilis praesentium, dolor odio, corrupti odit, inventore nihil ea accusamus tempore eum! Nesciunt distinctio magnam architecto veritatis aliquam delectus perferendis sint possimus. Minus dicta consequatur pariatur rerum adipisci ipsa mollitia magnam ducimus possimus cupiditate sapiente perferendis facilis ab autem, voluptates beatae odit qui, nam deleniti recusandae. Vero dicta quas suscipit voluptate. Molestias debitis porro, non eaque corporis error mollitia reprehenderit provident aspernatur culpa est eligendi consectetur necessitatibus vero iste ullam, tempora vitae. Sed nemo magnam eos facere illum, iste aut "
function textShow(){
    document.getElementById('st_more').innerHTML = text.charCodeAt(6);
}

// ex 29
let greatings = "hello world ";
let resulting = greatings.repeat(3);
function reText(){
    document.getElementById('re_text').innerHTML = resulting;
}

// ex 30
let tex1 = "microsogt is the famous and fasdt site";
function cngText(){
    document.getElementById('chtext').innerHTML = tex1.replace( "microsogt is the famous and fasdt site", "chat gpt is now famous for blog writying and others");

}