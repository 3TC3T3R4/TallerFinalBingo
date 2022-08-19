
/**
 * Variable para obtener el evento onclick, es el boton para obtener el targeton asignado con mis numeros
 */
let bt4 = document.getElementById('balota');
bt4.onclick = getcardbingo;
/**
 * variable para obtener el evento click para decirle al programa que es el ganador
 */
let btnwinner = document.getElementById('btnwinner');
btnwinner.onclick = getuserwinner;

/**
 * arreglo que representa el targeron del
 *  Usuario para poder saber que numeros le fueron asignados
 * 
 */

let numberwinner = [];
/**
 * Arreglo en el cual se almacenaran las balotas que arrojara el sistema
 */
let array = [];
/**
 * validador si el usuario es ganador
 */
let userwinner = false;
/**
 * variable que capturara la letra que sale aleatoriamente para poder mostrarla en pantalla
 */
let letra = "";
/**
 * variable que capturara la letra  y el numero que arroja el sistema
 */
let numberandword;

/**
 * variables que van a representar si  ingresa en esa posicion el numero al azar que sale
 */
//fila 1 de todas las columnas
let contadorB;
let contadorI;
let contadorN;
let contadorG;
let contadorO;


//fila 2 de todas las columnas
let contadorB2;
let contadorI2;
let contadorN2;
let contadorG2;
let contadorO2;


//fila 3 de todas las columnas
let contadorB3;
let contadorI3;
let contadorN3;
let contadorG3;
let contadorO3;


//fila 4 de todas las columnas
let contadorB4;
let contadorI4;
let contadorN4;
let contadorG4;
let contadorO4;


//fila 5 de todas las columnas
let contadorB5;
let contadorI5;
let contadorN5;
let contadorG5;
let contadorO5;


/**
 * Funcion encarga  de mostrar y retornar  cada 3 segundos  que balota salio  y dependiendo de esa balota captura la letra
 *  
 */
setInterval(function () {


    const numinicial = 1, numfinal = 75;
    let ballota = Math.round(Math.random() * (numinicial - numfinal) + numfinal);
    

    if (ballota >= 1 && ballota <= 15) {

        letra = "B";

    }

    if (ballota >= 16 && ballota <= 30) {

        letra = "I";
    }

    if (ballota >= 31 && ballota <= 45) {

        letra = "N";

    }
    if (ballota >= 46 && ballota <= 60) {

        letra = "G";
    }
    if (ballota >= 60 && ballota <= 75) {


        letra = "O";
    }

    const balot = document.getElementById('balot');
    balot.innerText = letra + " " + JSON.stringify(ballota);
    numberandword = " [ "+ letra + " " +ballota + " ] ";
    
    const balotwinner = document.getElementById('balotw');
    balotwinner.innerText = balotwinner.innerText + " " + JSON.stringify(numberandword)

    return getball(ballota);

}, 1000 * 3)


//obtener letra y  numeros al azar presionando un boton 

/**
 * Funcion encargada de crear los vectores y llenarlos con numeros al azar cada letra representa un vector
 */
async function getcardbingo() {

    bt4.style.backgroundColor = 'gray';
    bt4.disabled = true;

    let B = [];

    let I = [];

    let N = [];

    let G = [];

    let O = [];

    //LA LETRA B
    for (let i = 0; i < 5; i++) {

        B[i] = Math.round(Math.random() * (1 - 15) + 15);

    }

    for (let j = 0; j < B.length; j++) {

        for (let k = 0; k < B.length; k++) {

            if (k != j && B[j] == B[k]) {

                B[k] = Math.round(Math.random() * (1 - 15) + 15);

            }


        }

    }



    //LA LETRA I
    for (let i = 0; i < 5; i++) {

        I[i] = Math.round(Math.random() * (16 - 30) + 30);

    }

    for (let j = 0; j < I.length; j++) {

        for (let k = 0; k < I.length; k++) {

            if (k != j && I[j] == I[k]) {

                I[k] = Math.round(Math.random() * (16 - 30) + 30);

            }


        }

    }



    //LA LETRA N
    for (let i = 0; i < 5; i++) {

        N[i] = Math.round(Math.random() * (31 - 45) + 45);

    }

    for (let j = 0; j < N.length; j++) {

        for (let k = 0; k < N.length; k++) {

            if (k != j && N[j] == N[k]) {

                N[k] = Math.round(Math.random() * (31 - 45) + 45);

            }


        }

    }





    //LA LETRA G
    for (let i = 0; i < 5; i++) {

        G[i] = Math.round(Math.random() * (46 - 60) + 60);

    }

    for (let j = 0; j < G.length; j++) {

        for (let k = 0; k < G.length; k++) {

            if (k != j && G[j] == G[k]) {

                G[k] = Math.round(Math.random() * (46 - 60) + 60);

            }


        }

    }


    //LA LETRA O
    for (let i = 0; i < 5; i++) {

        O[i] = Math.round(Math.random() * (61 - 75) + 75);

    }

    for (let j = 0; j < O.length; j++) {

        for (let k = 0; k < B.length; k++) {

            if (k != j && O[j] == O[k]) {

                O[k] = Math.round(Math.random() * (61 - 75) + 75);

            }


        }

    }

        /**
         * Variables que capturan cada boton que representa una posicion en el targeton del jugador
         */

    const B1 = document.getElementById('balotB');
    const I1 = document.getElementById('balotI');
    const N1 = document.getElementById('balotN');
    const G1 = document.getElementById('balotG');
    const O1 = document.getElementById('balotO');

    B1.innerText = JSON.stringify(B[0]);
    I1.innerText = JSON.stringify(I[0]);
    N1.innerText = JSON.stringify(N[0]);
    G1.innerText = JSON.stringify(G[0]);
    O1.innerText = JSON.stringify(O[0]);

    const B2 = document.getElementById('balotB2');
    const I2 = document.getElementById('balotI2');
    const N2 = document.getElementById('balotN2');
    const G2 = document.getElementById('balotG2');
    const O2 = document.getElementById('balotO2');

    B2.innerText = JSON.stringify(B[1]);
    I2.innerText = JSON.stringify(I[1]);
    N2.innerText = JSON.stringify(N[1]);
    G2.innerText = JSON.stringify(G[1]);
    O2.innerText = JSON.stringify(O[1]);

    const B3 = document.getElementById('balotB3');
    const I3 = document.getElementById('balotI3');
    const N3 = document.getElementById('balotN3');
    const G3 = document.getElementById('balotG3');
    const O3 = document.getElementById('balotO3');

    B3.innerText = JSON.stringify(B[2]);
    I3.innerText = JSON.stringify(I[2]);
    N3.innerText = JSON.stringify(N[2]);
    G3.innerText = JSON.stringify(G[2]);
    O3.innerText = JSON.stringify(O[2]);

    const B4 = document.getElementById('balotB4');
    const I4 = document.getElementById('balotI4');
    const N4 = document.getElementById('balotN4');
    const G4 = document.getElementById('balotG4');
    const O4 = document.getElementById('balotO4');

    B4.innerText = JSON.stringify(B[3]);
    I4.innerText = JSON.stringify(I[3]);
    N4.innerText = JSON.stringify(N[3]);
    G4.innerText = JSON.stringify(G[3]);
    O4.innerText = JSON.stringify(O[3]);

    const B5 = document.getElementById('balotB5');
    const I5 = document.getElementById('balotI5');
    const N5 = document.getElementById('balotN5');
    const G5 = document.getElementById('balotG5');
    const O5 = document.getElementById('balotO5');

    B5.innerText = JSON.stringify(B[4]);
    I5.innerText = JSON.stringify(I[4]);
    N5.innerText = JSON.stringify(N[4]);
    G5.innerText = JSON.stringify(G[4]);
    O5.innerText = JSON.stringify(O[4]);

    /**
     * LLenado de vector  con el cual sabremos que numeros tiene el jugador en el targeton
     */

    numberwinner.push(
        B[0], I[0], N[0], G[0], O[0],

        B[1], I[1], N[1], G[1], O[1],

        B[2], I[2], N[2], G[2], O[2],

        B[3], I[3], N[3], G[3], O[3],

        B[4], I[4], N[4], G[4], O[4]);


}

/**
 * Funcion que recibe N cantidad de veces la balota que arroja el sistema 
 */

async function getball(id) {

    //inyecion en la Bd
    let respuesta2 = await axios.post('http://localhost:8080/balota', id);
    //llenado del arreglo con los numeros que arroja el programa
    array.push(id);

    //Retornamos el arreglo n veces para poder comparar
    return getcardwithnumbers(array)

}


/**
 * Funcion comparadora de numeros del targerton con numeros salientes
 *  
 */
async function getcardwithnumbers(ar) {


    //Comparamos  los dos vectores el vector que contiene los numeros del targeton y 
    //el vector con los numeros que van saliendo 

    for (let j = 0; j < ar.length; j++) {

        for (let k = 0; k < ar.length; k++) {

            //FILA 1 DE TODAS LAS COLUMNAS
            /**
             * Variables utilizadas para saber si el usuario tiene un mismo numero que de balota
             */
            if (numberwinner[0] == ar[k]) {
                console.log("ENTRO EN LA B1")
                contadorB = 1;       
            }
            if (numberwinner[1] == ar[k]) {
                contadorI = 1;
                console.log("ENTRO EN LA I1")
            }
            if (numberwinner[2] == ar[k]) {
                contadorN = 1;
                console.log("ENTRO EN LA N1")
            }
            if (numberwinner[3] == ar[k]) {
                contadorG = 1;
                console.log("ENTRO EN LA G1")
            }
            if (numberwinner[4] == ar[k]) {
                contadorO = 1;
                console.log("ENTRO EN LA O1")
            }


            //FILA 2 DE TODAS LAS COLUMNAS

            if (numberwinner[5] == ar[k]) {
                console.log("ENTRO EN LA B2")
                contadorB2 = 1;
            }
            if (numberwinner[6] == ar[k]) {
                contadorI2 = 1;
                console.log("ENTRO EN LA I2")
            }
            if (numberwinner[7] == ar[k]) {
                contadorN2 = 1;
                console.log("ENTRO EN LA N2")
            }
            if (numberwinner[8] == ar[k]) {
                contadorG2 = 1;
                console.log("ENTRO EN LA G2")
            }
            if (numberwinner[9] == ar[k]) {
                contadorO2 = 1;
                console.log("ENTRO EN LA O2")
            }



            //FILA 3 DE TODAS LAS COLUMNAS


            if (numberwinner[10] == ar[k]) {
                console.log("ENTRO EN LA B3")
                contadorB3 = 1;
            }
            if (numberwinner[11] == ar[k]) {
                contadorI3 = 1;
                console.log("ENTRO EN LA I3")
            }
            if (numberwinner[12] == ar[k]) {
                contadorN3 = 1;
                console.log("ENTRO EN LA N3")
            }
            if (numberwinner[13] == ar[k]) {
                contadorG3 = 1;
                console.log("ENTRO EN LA G3")
            }
            if (numberwinner[14] == ar[k]) {
                contadorO3 = 1;
                console.log("ENTRO EN LA O3")
            }



            //FILA 4 DE TODAS LAS COLUMNAS

            if (numberwinner[15] == ar[k]) {
                console.log("ENTRO EN LA B4")
                contadorB4 = 1;
            }
            if (numberwinner[16] == ar[k]) {
                contadorI4 = 1;
                console.log("ENTRO EN LA I4")
            }
            if (numberwinner[17] == ar[k]) {
                contadorN4 = 1;
                console.log("ENTRO EN LA N4")
            }
            if (numberwinner[18] == ar[k]) {
                contadorG4 = 1;
                console.log("ENTRO EN LA G4")
            }
            if (numberwinner[19] == ar[k]) {
                contadorO4 = 1;
                console.log("ENTRO EN LA O4")
            }



            //FILA 5 DE TODAS LAS COLUMNAS
            if (numberwinner[20] == ar[k]) {
                console.log("ENTRO EN LA B5")
                contadorB5 = 1;
            }
            if (numberwinner[21] == ar[k]) {
                contadorI5 = 1;
                console.log("ENTRO EN LA I5")
            }
            if (numberwinner[22] == ar[k]) {
                contadorN5 = 1;
                console.log("ENTRO EN LA N5")
            }
            if (numberwinner[23] == ar[k]) {
                contadorG5 = 1;
                console.log("ENTRO EN LA G5")
            }
            if (numberwinner[24] == ar[k]) {
                contadorO5 = 1;
                console.log("ENTRO EN LA O5")
            }

        }
    }

    //CONDICIONES PARA GANAR HORIZONTALMENTE

    if (contadorB == 1 && contadorI == 1 && contadorN == 1 && contadorG == 1 && contadorO == 1) {

        userwinner = true;


    }

    if (contadorB2 == 1 && contadorI2 == 1 && contadorN2 == 1 && contadorG2 == 1 && contadorO2 == 1) {
        userwinner = true;


    }


    if (contadorB3 == 1 && contadorI3 == 1 && contadorN3 == 1 && contadorG3 == 1 && contadorO3 == 1) {
        userwinner = true;


    }

    if (contadorB4 == 1 && contadorI4 == 1 && contadorN4 == 1 && contadorG4 == 1 && contadorO4 == 1) {
        userwinner = true;

       
    }

    if (contadorB5 == 1 && contadorI5 == 1 && contadorN5 == 1 && contadorG5 == 1 && contadorO5 == 1) {
        userwinner = true;

        

    }


    //CONDICIONES PARA GANAR VERTICALMENTE


    if (contadorB == 1 && contadorB2 == 1 && contadorB3 == 1 && contadorB4 == 1 && contadorB5 == 1) {
        userwinner = true;

        

    }
    if (contadorI == 1 && contadorI2 == 1 && contadorI3 == 1 && contadorI4 == 1 && contadorI5 == 1) {
        userwinner = true;

        

    }
    if (contadorN == 1 && contadorN2 == 1 && contadorN3 == 1 && contadorN4 == 1 && contadorN5 == 1) {
        userwinner = true;

       

    }
    if (contadorG == 1 && contadorG2 == 1 && contadorG3 == 1 && contadorG4 == 1 && contadorG5 == 1) {
        userwinner = true;

        

    }
    if (contadorO == 1 && contadorO2 == 1 && contadorO3 == 1 && contadorO4 == 1 && contadorO5 == 1) {
        userwinner = true;

        

    }


    //CONDICIONES PARA GANAR EN  DIAGONAL

    if (contadorB5 == 1 && contadorI4 == 1 && contadorN3 == 1 && contadorG2 == 1 && contadorO == 1) {
        userwinner = true;
        

    }


    if (contadorB == 1 && contadorI2 == 1 && contadorN3 == 1 && contadorG4 == 1 && contadorO5 == 1) {
        userwinner = true;
       

    }



    //CONDICIONES PARA GANAR EN FORMA CUATRO PUNTAS



    if (contadorB == 1 && contadorB5 == 1 && contadorO5 == 1 && contadorO == 1) {
        userwinner = true;
       

    }





}

/**
 * Funcion encargada de determinar si un jugador en realidad gano 
 */
async function getuserwinner() {

    if (userwinner == true) {

        window.alert("CONGRATULATION");
        setInterval(function () {
        window.location="congratulation";
        },1000*5);
    } else {

        window.alert("QUEDAS DESCALIFICADO");
        setInterval(function () {
            window.location = './index.html';

        }, 1000 * 1);


    }


}