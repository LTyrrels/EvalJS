let pu = parseInt(window.prompt("Indiquer le prix de l'objet."));
let qtecom = parseInt(window.prompt("Indiquer la quantité demandé."));

let tot = pu * qtecom;

if(tot < 100){ // PAS DE REMISE
    document.write("<h1> Prix de départ (TOT) = " + tot + "</h1>");
    document.write("<p> Comme le TOT est inférieur à 100, il n'y a pas de remise. </p> <br>");
    let port = tot + (tot * 2 / 100);
    let final = port - tot;
    document.write("<p> Prix avec le port = " + port + "</p> <br>");

    if(final < 6){
        let final = tot + 6;
        document.write("<p> Étant donné que le port est inférieur à 6, on ajoute +6 ce qui nous donne : " + final);
    }
}

if(tot >= 100 && tot <= 200){ // remise de 5%

    document.write("<h1> Prix de départ (TOT) = " + tot + "</h1>");

    let pRemiser = tot - (tot * 5 / 100); //calcul après la remise
    document.write("<p> Prix de départ (TOT) avec la remise = " + pRemiser + "</p> <br>");

    if(pRemiser < 500){
        port = pRemiser + (pRemiser * 2 / 100);
        document.write("<p> Prix avec la remise et le port = " + port + "</p> <br>");
        let final = port - pRemiser; // Calcul du port
        if(final < 6){
            let final = pRemiser + 6;
            document.write("<p> Étant donné que le port est inférieur à 6, on ajoute +6 ce qui nous donne : " + final);
        }
    }
}

if(tot > 200){ // remise de 10%

    document.write("<h1> Prix de départ (TOT) = " + tot + "</h1>");

    let pRemiser = tot - (tot * 10 / 100); //calcul après la remise
    document.write("<p> Prix de départ (TOT) avec la remise = " + pRemiser + "</p> <br>");

    if(pRemiser < 500){
        port = pRemiser + (pRemiser * 2 / 100);
        document.write("<p> Calcul avec l'ajout du port : " + port.toFixed(2) + "</p>");
    }
}

console.log("Calcul TOT : " + tot);