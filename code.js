const texto = "Full Stack Developer...";
const velocidad = 100; 
const elemento = document.getElementById("fullstack"); 

let i = 0;

function escribir() {
  if (i < texto.length) {
    elemento.innerHTML += texto.charAt(i);
    i++;
    setTimeout(escribir, velocidad);
  }
}

escribir();
