var send = document.querySelector("#send");
var mensage = document.querySelector("#mensage");
var camila = document.getElementById("camila");
var eu = document.getElementById("eu");

var ler = {
  saudacoes: ["oi", "ola", "oie", "salve"]
};





// acoes da assistente / funcoes do chat 
send.addEventListener("click", function(event) {
  event.preventDefault();
  valor = mensage.value;

  eu.innerText = valor;
  
  
  setTimeout(() => { 
    if (valor === "mmm") {
      matematica();
    }else {
      console.log("else");
    }
    
    if (valor == "oi") {
      c("qual foi nigger")
    } else {
      console.log("else oi");
    }
  },3*1000)
})