let nom = document.getElementById("nom");
let prenom = document.getElementById("prenom");
let sexef = document.getElementById("sexef");
let sexem = document.getElementById("sexem");
let date = document.getElementById("date");
let postal = document.getElementById("postal");
let mail = document.getElementById("mail");
let sujet = document.getElementById("sujet");

function verif(event){

    if(nom.value == ""){
        console.log("Missing Name");
        document.getElementById("errornom").innerHTML = "Vous n'avez pas rempli cette case.";
        event.preventDefault();
    }else{
        document.getElementById("errornom").innerHTML = "";
    }

    if(prenom.value == ""){
        console.log("Missing firstname");
        document.getElementById("errorprenom").innerHTML = "Vous n'avez pas rempli cette case.";
        event.preventDefault();
    }else{
        document.getElementById("errorprenom").innerHTML = "";
    }

    if(sexef.checked == false && sexem.checked == false){
        console.log("Missing Sexe");
        document.getElementById("errorsexe").innerHTML = "Vous n'avez pas rempli cette case.";
        event.preventDefault();
    }else{
        document.getElementById("errorsexe").innerHTML = "";
    }

    if(date.value == ""){
        console.log("Missing Date");
        document.getElementById("errordate").innerHTML = "Vous n'avez pas rempli cette case.";
        event.preventDefault();
    }else{
        document.getElementById("errordate").innerHTML = "";
    }

    if(postal.value.length != "5"){ //Vérifie si le nombre de caractère est égale à 5
        console.log("Renseignez un code postal avec minimum 5 chiffres.");
        document.getElementById("errorposte").innerHTML = "Vous n'avez pas rempli cette case.";
        event.preventDefault();
    }else{
        if(isNaN(parseInt(postal.value))){ //Vérifie si la valeur entré est uniquement des chiffres
            console.log("Veuillez renseignez uniquement des chiffres dans le code postal.");
            event.preventDefault();
        }else{
            document.getElementById("errorposte").innerHTML = ""; 
        }
    }

    let filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/; //Filtreur pour le @

    if (!filter.test(mail.value)) { //Vérification si le champ "email" contient bien un "@"
        console.log("Renseignez un e-mail valide.");
        mail.focus;
        document.getElementById("errormail").innerHTML = "Vous n'avez pas rempli cette case.";
        event.preventDefault();
    }else{
        document.getElementById("errormail").innerHTML = ""; 
    }

    if(sujet.selectedIndex == 0){
        console.log("Veuillez choisir une option.");
        sujet.focus();
        document.getElementById("errorsujet").innerHTML = "Vous n'avez pas rempli cette case.";
        event.preventDefault();
    }else{
        document.getElementById("errorsujet").innerHTML = ""; 
    }
}