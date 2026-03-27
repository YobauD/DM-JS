const motSaisi = document.getElementById("id-mot-saisi")
function inverse(mot){
    const longueur = mot.length
    let motInverse = ""
    for(let i = 0 ; i < longueur; i++){
        motInverse = mot[i]+ motInverse
    } return motInverse
}
function palindrome(){
    let mot = motSaisi.value
    mot = mot.toLowerCase()
    const mot_Inverse =  inverse(mot)
    if (mot===mot_Inverse){
        alert("Ce mot est un palindrome")
    
    }
    else{
        alert("ce n'est pas un palindrome")
    }
}
