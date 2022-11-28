let x = 0;
let y = 0;
let z = 0;
let b = true;

while(b){

    let age = Number(window.prompt("Quel âge voulez-vous entrez ?"));
    
    if(age < 20){
        console.log("Inférieur à 20 ans.");
        x++;
    }

    if(age >= 20 && age <= 40){
        console.log("Compris entre 20 ans et 40 ans.");
        y++;
    }

    if(age > 40){
        console.log("Supérieur à 40 ans.");
        z++;
    }

    if(age >= 100){
        b = false;
    }
}

alert("Il y a " + x + " personne(s) qui ont - de 20ans. \nIl y a " + y + " personne(s) qui ont entre 20ans et 40ans. \nIl y a " + z + " personne(s) qui ont + de 40ans.");