let age = [20,5,12,43,98,55];

let totaleage= 0;
let plusgrand= 0;

for (let i = 0; i < age.length; i++) {
    totaleage+= age[i];
    if (age[i] > plusgrand) {
        plusgrand = age[i];
    }
}

console.log("the add of All years is " + sumAge);
console.log("the Old years of All years is " + plusgrand);
