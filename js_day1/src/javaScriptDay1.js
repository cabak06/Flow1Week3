
//#####JavaScript Functions and callbacks#####

//1) Create a new JavaScript file and add these three functions

//Function Declaration
function add(n1, n2) {
    return n1 + n2;
}

//Function Expression
var sub = function (n1, n2) {
    return n1 - n2;
};

//Callback example
var cb = function (n1, n2, callback) {
    return "Result from the two numbers: " + n1 + "+" + n2 + "=" + callback(n1, n2);
};



//2) Call the functions above as sketched below. It’s not about doing it as fast as you can, but about 
//   understanding what's happening, so make sure you understand each line.

console.log(add(1, 2));
//1. It will print 3, as the add function sums up the two numbers. n1 + n2 = 3.

console.log(add);
//2. It will print [Function : add]. It represents a reference to the function.

console.log(add(1, 2, 3));
//3. It will print 3, as only the first two arguments are accepted. The third argument is ignored.

console.log(add(1));
//4. It will print NaN (Not a number). There must be at least two arguments when the function is invoked.

console.log(cb(3, 3, add));
//5. It will print "Result from the two numbers: 3+3 = 6". (callback/add)

console.log(cb(4, 3, sub));
//6. It will print "Result from the two numbers: 4+3 = 1". (callback/sub) OBS-> (4+3) is actually what it prints, eventhough it is wrong.

//console.log(cb(3,3,add())); 
//7. It will print "TypeError: callback is not a function". ?

console.log(cb(3, "hh", add));
//8. it will print "3hh". in JS you can concatenate different types of variables when they are added together.



//3)  Error Handling

var cb = function (n1, n2, callback) {
    if (typeof n1 === "number" && typeof callback === "function") {
        return "Result from the two numbers: " + n1 + "+" + n2 + "=" + callback(n1, n2);
    } else {
        throw new Error("Remember to always use two numbers and only to do a callback");
    }
};

try {
    console.log(cb(3, 3, add()));
} catch (e) {
    if (e instanceof Error) {
        console.error(e.name + ': ' + e.message);
    } else if (e instanceof RangeError) {
        console.error(e.name + ': ' + e.message);
    }

}


//4)  Write a mul(n1, n2) function (inspired by add and sub) and use it as the callback for the cb function
var mul = function (n1, n2) {
    return n1 * n2;
};
console.log(cb(3, 3, mul));


//5) Call cb, this time with an anonymous function that divides the first argument with the second
console.log(cb(3, 3, function (n1, n2) {
    return n1 / n2;
}));





//#########Callbacks (with map, filter and forEach)###########

//1) Declare a JavaScript array and initialize it with some names (Lars, Jan, Peter, Bo, Frederik)

var names = ["Lars", "Jan", "Peter", "Bo", "Frederik"];
var shortenedNames = names.filter(names => names.length <= 3);
console.log(shortenedNames);

names.forEach(element => {
    console.log(element);
});

shortenedNames.forEach(element => {
    console.log(element);
});



//2) Use the names-array created above, and, using its map method, create a new array with all names uppercased.
var upperCase = names.map(function (x) {
    return x.toUpperCase();
});
console.log(upperCase);


//3
function returnHTML(names) {

    var result;

    names.forEach(element => {
        result += "<li>" + element + "</li>";
    });
    return  "<ul>" + result + "</ul>";

}

console.log(returnHTML(names));


//4a
var cars = [
    {id: 1, year: 1997, make: 'Ford', model: 'E350', price: 3000},
    {id: 2, year: 1999, make: 'Chevy', model: 'Venture', price: 4900},
    {id: 3, year: 2000, make: 'Chevy', model: 'Venture', price: 5000},
    {id: 4, year: 1996, make: 'Jeep', model: 'Grand Cherokee', price: 4799},
    {id: 5, year: 2005, make: 'Volvo', model: 'V70', price: 44799}
];


//Cars newer than 1999
var carsNewerThan1999 = cars.filter(function (e) {
    return e.year > 1999;
});
console.log(carsNewerThan1999);



// All Volvo’s
var carsAreVolvo = cars.filter(function (e) {
    return e.make === "Volvo";
});
console.log(carsAreVolvo);


//   All cars with a price below 5000 
var carsBelow5000 = cars.filter(function (e) {
    return e.price < 5000;
});
console.log(carsBelow5000);


  

//######Asynchronous Callbacks########


//I expect the order to be:
//aaaaaaaaaa
//dddddddddd
//ffffffffff
//eeeeeeeeee
//bbbbbbbbbb

//The reason for the change in the flow order is that the function uses delay milliseconds (2000) and (1000).

msgPrinter = function(msg,delay){
setTimeout(function(){
 console.log(msg);
  },delay);
};
console.log("aaaaaaaaaa");
msgPrinter ("bbbbbbbbbb",2000);
console.log("dddddddddd");
msgPrinter ("eeeeeeeeee",1000);
console.log("ffffffffff");

