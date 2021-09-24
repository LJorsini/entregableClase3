let votoA = 0;
let votoB = 0;
let votoBlanco = 0;
let porcentajeVotosA = 0;
let porcentajeVotosB = 0;
let porcentajeBlancos = 0;
 

for (i=1; i<=10; i++) {
    let votaPor = parseInt(prompt("Por que partido desea votar:\n 1-Partido A\n 2-Partido B\n 3-Voto Blanco"));
    
        if (votaPor == 1) {
            votoA = votoA+1;
            porcentajeVotosA = parseFloat(votoA*100/10);
        }else if (votaPor == 2) {
            votoB = votoB + 1;
            porcentajeVotosB = parseFloat(votoB*100/10);
        }else if (votaPor == 3) {
            votoBlanco = votoBlanco + 1;
            porcentajeBlancos = parseFloat(votoBlanco*100/10);
        }
        else {
            alert("Su voto no es valido");

        }
        console.log(votoA);
        console.log(votoB);
}



if (votoA > votoB) {
    alert("El ganador es el partido A \n" + "Partido A: " + porcentajeVotosA + " % de los votos. \n" + "Partido B: " + porcentajeVotosB + "% de lo votos \n" + "Votos en blanco: " + porcentajeBlancos + "% ");
}else if (votoA == votoB) {
    alert("Empate.. al balotage\n" + "Partido A: " + porcentajeVotosA + "% de los votos. \n" + "Partido B: " + porcentajeVotosB + "% de lo votos \n" + "Votos en blanco: " + porcentajeBlancos + "% ");
}else {
    alert("El ganador es el partido B \n" + "Partido B: " + porcentajeVotosB + "% de los votos. \n" + "Partido A: " + porcentajeVotosA + "% de lo votos \n" + "Votos en blanco: " + porcentajeBlancos + "% ");
}


console.log("total voto A " + votoA);
console.log("Total voto B " + votoB);
console.log("Total votos en Blanco " + votoBlanco);




