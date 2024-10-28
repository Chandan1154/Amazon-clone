// // const tshirt1 = 2095
// // const tshirt2 = 799
// // let totalitme_pric = ((tshirt1 + tshirt2) * 0.1 )
// // console.log(totalitme_pric);

// // const  round = Math.round(totalitme_pric)/ 100
// // const tax = totalitme_pric * (10/100)
// // console.log(round);

// // const total_order_price =totalitme_pric + tax

// // console.log(total_order_price);

// // // 10%  how to calculate 
// // // in js we can't calculate percentage 
// // // like total * 10%
// // // 1% = 1/100 
// // // per => / 
// // // cent => 100
// // // calculation with floats are something inaccurate
// // // when working with money
// // // do the calculatiion in cents
// // // convert back to dollars
// // // ex => 10% = 10 / 100 = 0.1
// // // 2, 3,4  = integer 
// // // 2.2 2.5 = double 
// // // number and math 
// // // order of operation and braket 

// let  toaster = 1899
// let tshirt1 = 2095
// let  tshirt2 = 799
// const itmes3 =( toaster+tshirt1+ tshirt2  ) / 100
// console.log(itmes3);
// let shiping =  4.99
// console.log(shiping);
// const totaldefretax = itmes3 + shiping
// console.log(totaldefretax);
// let esttax= Math.round((toaster + tshirt1 + tshirt2) * 0.1) /100
// console.log(esttax);

// call back fun 
function callback(name, cd) {
    cd(`${name} good morning `)
}
callback("chandan", (name)=>{
    console.log(name);
})
// HOF
function multi(factor){
    return (num) =>{
        console.log(num*factor);
    return num*factor   
    }
} 
let double = multi(3)
double(4)