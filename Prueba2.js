matriz= [[0,1],[2,3]]
numero= 3

function ValidarEntero(matriz, numero)
{
    result=false;
    for (i=0;i< matriz.length;i++)
    {
        if(matriz[i].includes(numero))
        result=true
    }
    console.log(result);
}

ValidarEntero(matriz, numero)