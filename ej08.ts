/*8. Crear una función que realice el cálculo factorial del número que recibe como parámetro.
Nota: Utilizar console.log()*/
 
function CalcularFactorial(numero : number):number
{
    let factorial=1;
    for(let i=1;i<=numero;i++)
    {
        factorial *= i;
    }
    return factorial;
}

console.log( " el factorial es de "+ CalcularFactorial(8));