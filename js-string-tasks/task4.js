let spaceX = "SpaceX, or Space Exploration Technologies Corp., is an American aerospace manufacturer and space transportation company founded by Elon Musk in 2002. The company is known for its ambitious goal of reducing space transportation costs and enabling the colonization of Mars. Here are some key points about SpaceX"

let store = "";
for(let i = 0; i < spaceX.length; i++){
    let arrayWord = spaceX[i];
    for(let catcher of arrayWord){
        if(catcher == "x"){
            store += "y";
        }else if(catcher == "X"){
            store += "Y";
        }else{
            store += catcher;
        }
    }
}
console.log(store)