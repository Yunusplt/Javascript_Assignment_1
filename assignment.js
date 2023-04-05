//todo Question_1   ###############################

let score=+prompt("Input students score")

if (score>=91 && score<=100) {
    console.log("AA");
}

else if (score>=76 && score<=90) {
    console.log("BA");
}

else if (score>=66 && score<=75) {
    console.log("BB");
}

else if (score>=46 && score<=65) {
    console.log("CC");
}

else if (score>=26 && score<=45) {
    console.log("DD");
}
else if (score>=0 && score<=25) {
    console.log("FF");
}

else{
    alert("0 ve 100 arasinda bir deger giriniz.");
}




//todo Question_2  ###############################

let month = prompt("Input a month name")

switch (month) {
    case "january": console.log("1.month");
        
        break;
    case "fabruary": console.log("2.month");
        
        break;
    case "march": console.log("3.month");
        
        break;
    case "april": console.log("4.month");
        
        break;
    case "may": console.log("5.month");
        
        break;
    case "june": console.log("6.month");
        
        break;
    case "july": console.log("7.month");
        
        break;
    case "august": console.log("8.month");
        
        break;
    case "september": console.log("9.month");
        
        break;
    case "october": console.log("10.month");
        
        break;
    case "november": console.log("11.month");
        
        break;
    case "december": console.log("12.month");
        
        break;

    default: alert("Please! Input a valid month name")
        break;
}




//todo Question_3  ###############################

const no1=+prompt("Input first number")
const no2=+prompt("Input second number")
const no3=+prompt("Input thirth number")

console.log(`${no1} + ${no2} + ${no3} = ${no1+no2+no3}`);
console.log(`${no1} * ${no2} * ${no3} = ${no1*no2*no3}`);

let max_no;

if (no1>no2 && no1>no3) max_no= no1
else if (no2>no1 && no2>no3) max_no=no2
else max_no=no3

console.log(max_no);


let min_no;

if (no1<no2 && no1<no3) min_no= no1
else if (no2<no1 && no2<no3) min_no=no2
else min_no=no3

console.log(min_no);


//todo Question_4  ###############################

const number=+prompt("Input a negatif or positif number")

console.log(number>0 ? "Your number is positif" : "Your number is negatif");



//todo Question_5 ###############################

// var temp=prompt("Input temperature like 20C or 68F" )
// no_temp = 5
// if (temp.endsWith("C")) {
    
//     no_temp= temp.substring(0, temp.length-1)
//     // fah = (no_temp * 1.8) + 32
//     turn_temp = Number(no_temp)
//     console.log(turn_temp);
// }

// no_temp = temp.substring(0, temp.length-1)
//     console.log(typeof turn_temp);