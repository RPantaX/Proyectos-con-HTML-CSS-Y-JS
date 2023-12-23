//mi forma de hacerlo
/*console.log('Aplicación Calculadora');

const a=document.getElementById('operandoA');
const b=document.getElementById('operandoB');
const r=document.getElementById('resultado')
function sumar(){
    let result= parseInt(a.value)+ parseInt(b.value);
    if(isNaN(r))
        r.innerHTML='La operación no incluye números'
    r.innerHTML=`Resultado: ${result}`;
    console.log(`Resultado: ${result}`)
}*/
document.getElementById('sumar').setAttribute('onclick','sumar()')

//forma del profesor de UDEMY:
console.log('Aplicación Calculadora');
function sumar(){
    const forma=document.getElementById('forma');
    let operandoA= forma['operandoA'];
    let operandoB= forma['operandoB'];
    let resultado=parseInt(operandoA.value)+ parseInt(operandoB.value);
    if(isNaN(resultado))resultado='La operación no incluye números';
    document.getElementById('resultado').innerHTML=`Resultado: ${resultado}`;
    console.log(`Resultado: ${resultado}`)
}