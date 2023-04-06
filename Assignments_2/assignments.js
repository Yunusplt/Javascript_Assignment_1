// Todo  ###############   Question_1   ##################

let result = "a"
var sum = 0
var counter = 0

while (result.toUpperCase()!= "Q") {
    score = +prompt("Enter your score")
    sum += score
    counter += 1
    result = prompt("If you want to continue entering score, press the e/E key. otherwise press q/Q.")
}

console.log(sum/counter);


// Todo  ###############   Question_2   ##################

//? : Tahmin Oyunu
//* Program 1-20arasında rasgele bir sayı tutacak ve kullanıcının bu sayıyı 5 kere(hak) de bilmesini isteyecektir. Her yanlışta hakkını bir düşürecek ve ARTTIR/AZALT diyerek kullanıcıyı yönlendirecektir.Sonuç olarak kullanıcının hakkı 0 olursa "Üzgünüz bilemediniz" eğer bildi ise "Tebrikler  bildiniz" yazacaktır.

let rastgele = Math.ceil(Math.random()*20)  // 1 ve 20 dedigi icin yukari yuvarlama istiyoruz. 

console.log(rastgele);

let hak = 5;

while (hak>0) {
    const tahmin=+prompt("sayi tahmin ediniz")
    hak --;

    if (tahmin==rastgele) {
        console.log("Tebrikler Bildiniz🥳");
        again = prompt("If you want to play again, press the e/E key. Otherwise press the h/H key")
        if (again.toUpperCase()=="E") {
            rastgele = Math.ceil(Math.random()*20)
            console.log(rastgele);
            hak = 5
        } else{break}
    }
    else if (tahmin<rastgele) console.log("tahmininizi arttiriniz👆", hak, "hakkiniz kaldi");
    else console.log("tahmininizi azaltiniz 👇", hak, "hakkiniz kaldi");


    if (hak==0) {
        console.log("üzgünüz bilemediniz");
        again = prompt("If you want to play again, press the e/E key. Otherwise press the h/H key")
            if (again.toUpperCase()=="E") {
                rastgele = Math.ceil(Math.random()*20)
                hak = 5
        } else{break}
    }
}