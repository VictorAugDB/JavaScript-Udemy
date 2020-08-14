let calc = (x1, x2, operator) =>{

    return eval(`${x1} ${operator} ${x2}`);
} //Arrow Function

/*
(function(x1, x2, operator){
    return eval(`${x1} ${operator} ${x2}`);
    })(1, 6, "/"); //Função Anônima

Function calc(x1, x2, operator){
return eval(`${x1} ${operator} ${x2}`);
} //Função Comum
    
*/
let resultado = calc(1, 6, "/");

console.log(resultado);