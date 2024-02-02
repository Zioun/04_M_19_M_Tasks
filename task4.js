let statement = 'I am a hard working person';
let zip = '';
let convert = statement.split(" ");
for(i = convert.length-1; i>=0; i--){
    zip += convert[i];
    if (i > 0) {
        zip += ' ';
    }
}
console.log(zip)
