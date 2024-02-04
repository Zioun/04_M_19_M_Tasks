let count = "Bangladesh is a country located in South Asia, sharing borders with India to the west, north, and east, Myanmar (Burma) to the southeast, and the Bay of Bengal to the south. Here are some key points about Bangladesh";

let store = "";
let toUp = count.split(" ");

for(let word of toUp){
    store += word.replace(/\b\w/g, (match) => match.toUpperCase());
    store += " ";
}
console.log(store);