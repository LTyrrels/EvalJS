let tab = ["Audrey", "Aurélien", "Flavien", "Jérémy", "Laurent", "Melik", "Nouara", "Salem", "Samuel", "Stéphane"];

let s = window.prompt("Quel est le prénom que vous voulez récupérer ?");

if(tab.indexOf(s) == -1){
    document.write("<h1> Prénom introuvable dans le tableau. </h1>");
    document.write("<p> Aucune modification du tableau a été faite. </p>")
}else{
    document.write("<h1> Prénom trouvé dans le tableau. </h1>");
    document.write("<p> Le prénom " + s + " a bien été retiré du tableau. </p>")
    tab.pop(s);
}