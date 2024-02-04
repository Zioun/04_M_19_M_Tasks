// Count how many times a string has the letter a

let a = "Bangladesh is a country located in South Asia, sharing borders with India to the west, north, and east, Myanmar (Burma) to the southeast, and the Bay of Bengal to the south. Here are some key points about Bangladesh:";
let aStore = "";

for(let i=0; i<a.length; i++){
    let iLength = a[i];
    if(iLength == "a"){
        aStore += iLength;
    }else{
        continue;
    }
}
console.log(aStore.length);