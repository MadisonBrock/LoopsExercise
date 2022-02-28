for (i = 1; i <= 7; i++){
    console.log(i);
}
// 1
// 2
// 3
// 4
// 5
// 6
// 7
 
console.log('========================================');

for (i = 5; i <= 25; i+= 4){
    console.log(i);
}
// 5
// 9
// 13
// 17
// 21
// 25

console.log('========================================');

const wizards = [
    "Harry Potter", 
    "Hermione Granger",
    "Ron Weasley"
]
for(char of wizards){
    console.log(char);
}
// Harry Potter
// Hermione Granger
// Ron Weasley
 
console.log('========================================');

let harryPotterMovies = 0;
while(harryPotterMovies <= 8){
    console.log(harryPotterMovies);
    harryPotterMovies ++;
}

// 0
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8

const hogwartsHouses = [
    "Gryffindor", 
    "Hufflepuff", 
    "Ravenclaw", 
    "Slytherin"
]
for (char of hogwartsHouses){
    console.log(char);
}