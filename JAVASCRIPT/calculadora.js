function calcular() {

   let valor1 = parseFloat(document.querySelector("#num1").value);
   let valor2 = parseFloat(document.querySelector("#num2").value); 
   let oper  = document.querySelector("#selecao").value;

   console.log(valor1);
   console.log(valor2);
   console.log(oper);

}


   /* if (oper === "soma") {
        resultado = parseFloat(valor1) + parseFloat(valor2);
    } else {
       if (oper === "subtrair") {
           resultado = valor1 - valor2;
       } else {
          if (oper === "multiplicar") {
              resultado = valor1 * valor2;
          } else {
              resultado = valor1 / valor2;
          }
       }
       */
    
    document.querySelector("#resultado").innerHTML = resultado
    //console.log(resultado)
   
   /* const operations = {
      soma: (a,b) => a+b,
      sub: (a,b) => a-b,
      mult: (a,b) => a*b,
      divi: (a,b) => a/b,
    }
    const resultado = operations[operations](a, b)*/

   
    
 