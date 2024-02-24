let numerosecreto = generarnumerosecreto();
let intento = 1;
let listanumerossorteados = [];



function asigartextoelemento(elemento,texto)
{
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}
function verificarintento()
{
    let numerodeusuario = parseInt(document.getElementById(`valorusuario`).value);
        //console.log(numerosecreto);
        //.log(intento);
        
    if (numerodeusuario === numerosecreto)
    {
        asigartextoelemento(`p`,`Acertaste el número en ${intento}  ${(intento === 1 )? `vez`:`veces`}`);
        document.getElementById(`reiniciar`).removeAttribute(`disabled`);
    }else
    {
        if (numerodeusuario > numerosecreto)
        {
            asigartextoelemento(`p`,`El número secreto es menor`);       
        }
    else
        {
            asigartextoelemento(`p`,`El número secreto es mayor`);
        }
    }
    intento++;
    limpiarcaja();
    return;   
}
function limpiarcaja()
{
    let valorcaja = document.querySelector(`#valorusuario`);
    valorcaja.value = ``;
}
function generarnumerosecreto(){
    return Math.floor( Math.random()*10)+1;
}

function condicionesinniciales()
{
    asigartextoelemento(`h1`,`Juego del número secretoo`);
    asigartextoelemento(`p`,`Indica un número del 1 al 10`);    
    numerosecreto = generarnumerosecreto();
    intento = 1;
}
function reiniciar()
{
    limpiarcaja();
    condicionesinniciales();
    document.querySelector(`#reiniciar`).setAttribute(`disabled`,`true`);
}



