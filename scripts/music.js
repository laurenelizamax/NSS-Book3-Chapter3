const jumpStopRecords = []; //Funk and Rap artists 
const chattenRecords= []; //Country and Bluegrass artists 
const polarRecords  = []; //Pop artists

//variables for each genre
const createBluegrassArtist = (name, age, genre) => ({
    "name": name,
    "age": age,
    "genre": genre
})
const createCountryArtist = (name, age, genre) => ({
    "name": name,
    "age": age,
    "genre": genre
})
const createFunkArtist = (name, age, genre) => ({
    "name": name,
    "age": age,
    "genre": genre
})
const createPopArtist = (name, age, genre) => ({
    "name": name,
    "age": age,
    "genre": genre
})
const createRapArtist = (name, age, genre) => ({
    "name": name,
    "age": age,
    "genre": genre
})

jumpStopRecords.push(createRapArtist("Dusta Grimes", 21, "Rap"));
jumpStopRecords.push(createFunkArtist("Dre Funkz", 25, "Funk"));
jumpStopRecords.push(createRapArtist("Loyoncé Branis", 27, "Rap"));

console.log(jumpStopRecords);

chattenRecords.push(createCountryArtist("Bruce Atikins", 23, "Country"));
chattenRecords.push(createBluegrassArtist("Bartholomew Danielson", 21, "Bluegrass"));
chattenRecords.push(createCountryArtist("Avilee Dallas", 19, "Country"));
console.log(chattenRecords);

polarRecords.push(createPopArtist("Austin Kinkaid ", 22, "Pop"));
polarRecords.push(createPopArtist("Jensen Brown", 20, "Pop"));
console.log(polarRecords);
