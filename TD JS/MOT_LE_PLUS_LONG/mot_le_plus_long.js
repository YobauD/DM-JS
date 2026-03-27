let phrase = document.getElementById("citation").innerText
let motPlusLongs = document.getElementById("motPlusLong")
let mots = phrase.split(" ")
let motPlusLong = " "
function mot_long() {
    for (let mot of mots) {
        if (mot.length > motPlusLong.length) {
            motPlusLong = mot
        }
    }
    motPlusLongs.innerHTML = motPlusLong
}
mot_Long();
