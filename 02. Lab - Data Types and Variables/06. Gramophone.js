// (albumName.length * bandName.length) * song-name.length / 2
function gramaphone (nameBand, nameAlbum, nameSong){
let allTime = (nameAlbum.length * nameBand.length) * nameSong.length / 2;

let turningTime = Math.ceil(allTime / 2.5);
console.log(`The plate was rotated ${turningTime} times.`);
}
gramaphone ('Black Sabbath', 'Paranoid', 'War Pigs');
gramaphone ('Rammstein', 'Sehnsucht', 'Engel');