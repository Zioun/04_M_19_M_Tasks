let aCount = "Bangladesh is a country located in South Asia, sharing borders with India to the west, north, and east, Myanmar (Burma) to the southeast, and the Bay of Bengal to the south. Here are some key points about Bangladesh";

let aStore = "";

for(let i=0; i<aCount.length; i++){
    let aFound = aCount[i];
    if(aFound == "a" || aFound == "A"){
        aStore += aFound;
    }else{
        continue;
    }
}
console.log(aStore.length);