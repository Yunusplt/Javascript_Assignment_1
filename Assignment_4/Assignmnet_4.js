//!###########################################################
//!  Question_1
//!###########################################################

const prices=[100, 200, 50, 89];

console.log(prices);

prices.forEach((item,i,prices)=>{

    // prices[i] = (item*1.10).toFixed(2)
    prices[i] = item*1.10

})

console.log(prices);


//!###########################################################
//!  Question_2
//!###########################################################

prices.forEach((item)=>{
    if(item>90) console.log(item);
})


//!###########################################################
//!  Question_3
//!###########################################################

prices.forEach((item, i , prices)=>{

    if (item<110) {
        prices[i] = item*1.10
        console.log(`${item}$'in %10 zamli hali esittir ${prices[i]}$'a`);
    }
})



//!###########################################################
//!  Question_4
//!###########################################################


const salaries= [3000, 5000, 4000, 6000, 6500]

let newSalaries = []

salaries.forEach((item, i, salaries)=>{

    if (item<4000) {
        item = item*1.50
        newSalaries.push(item)
    }

})

console.log(salaries);
console.log(newSalaries);



//!###########################################################
//!  Question_5
//!###########################################################


salaries.forEach((item, i, salaries)=>{

    if (item>4000) {
        item = item*1.25
        console.log(item);
    }

})