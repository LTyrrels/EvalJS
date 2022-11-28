let a;
let b = true;
let i = 0;
let msg = "";

function TableMultiplication(a){

    a = window.prompt("Entrez le chiffre à multiplier.");

    while(b){
        i++

        for(i = 0; i <= 10; i++){
            let result = a*i;
            msg += i + " * " + a + " = " + result + "\n";
            b = false;
        }
        alert(msg);
    }
}

TableMultiplication(a);