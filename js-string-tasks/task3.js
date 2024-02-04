let count = "Bangladesh is a country located in South Asia, sharing borders with India to the west, north, and east, Myanmar (Burma) to the southeast, and the Bay of Bengal to the south. Here are some key points about Bangladesh";

let store = "";

for(let i = 0; i < count.length; i++){
    let founder = count[i];
    if(founder == "a" || founder == "e" || founder == "i" || founder == "o" || founder == "u"){
        store += founder;
    }else{
        continue;
    }
}
console.log(store.length);