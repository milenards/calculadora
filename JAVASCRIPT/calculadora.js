function calcular(oper, valor1, valor2) {
    if (oper === "somar") {
       var valor = parseFloat(valor1) + parseFloat(valor2);
    } else {
       if (oper === "subtrair") {
          var valor = valor1 - valor2;
       } else {
          if (oper === "multiplicar") {
             var valor = valor1 * valor2;
          } else {
             var valor = valor1 / valor2;
          }
       }
    }
    console.log(valor)
 }