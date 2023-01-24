function c(talk) {
  return camila.innerText = talk;
}

function random() {
  return Math.floor(Math.random() * 100);
}



function matematica() {//inicio funcao matematica

  c("que tipo de expressao?")

  let val1 = random();
  let val2 = random();
  let result;
  let resp;

  send.addEventListener("click", event =>{
    event.preventDefault();
    
// if's statemant escolha de operacao
    if (valor == "adicao") {
      c("responda essa ! : " + val1 + "+" + val2)
      send.addEventListener("click", event => {
        event.preventDefault()
        result = val1 + val2;
        console.log(result);
        if (result == valor) {//se ganhar
          c("parabens voce acertou")
        }
        else {//se perder
          c("tente novamente ");
        }

      })
    }

    else if (valor == "divisao") {
      c("responda essa ! : " + val1 + " ÷ " + val2)
      send.addEventListener("click", event => {
        event.preventDefault()
        result = val1 / val2;
        console.log(result);
        
        if (result == valor) {//se ganhar
          c("parabens voce acertou")
        }
        else {//se perder
          c("tente novamente ");
        }
    })}
    
    
    
    else if (valor == "multiplicacao"){
       c("responda essa ! : " + val1 + " × " + val2)
       send.addEventListener("click", event => {
             event.preventDefault()
             result = val1 * val2;
             console.log(result);
      
             if (result == valor) { //se ganhar
               c("parabens voce acertou")
             }
             else { //se perder
               c("tente novamente ");
             }
    })
      
    }
    
    else if (valor == "subtracao"){
      c("responda essa ! : " + val1 + " - " + val2)
      send.addEventListener("click", event => {
            event.preventDefault()
            result = val1 - val2;
            console.log(result);
     
            if (result == valor) { //se ganhar
              c("parabens voce acertou")
            }
            else { //se perder
              c("tente novamente ");
            }
    })}
    
  })
  return valor=null;
}
