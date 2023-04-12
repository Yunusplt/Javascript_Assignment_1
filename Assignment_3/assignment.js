//! ################ ASSIGNMENT 3 ########################

//! ### Question_1 ###
const ucgenAlan=(yükseklik, taban)=> (yükseklik*taban)/2

console.log(ucgenAlan(10,4));


//! ### Question_2 ###

const kareAl=(sayi)=> sayi**2

const küpAl=(sayi)=> sayi**3

const üsAl=(s1, s2)=> s1**s2

const calculator = function(operation,v1,v2 ) {
let result;
    if (operation=="kareAl") {
        result = v1**2   
    }else if (operation=="küpAl") {
        result = v1**3
    }else if (operation=="üsAl") {
        result = v1**v2
    }
    return result
}

console.log("Kare alma isleminin sonucu: ",calculator("kareAl",5));
console.log("Küp alma isleminin sonucu: ",calculator("küpAl",5));
console.log("Üs alma isleminin sonucu: ",calculator("üsAl",5,5));


//! ### Question_3 ####


const artikYil= function(yil) {
    return (yil%4==0 && (yil%100!=0 || yil%400==0)) ? "Artik yil" : "Artik yil degildir."
}
console.log(artikYil(2020));
console.log(artikYil(2023));
console.log(artikYil(1500));
console.log(artikYil(1600));


