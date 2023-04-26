const header1 = document.querySelector("#header");
 const button = document.querySelector("button");

button.addEventListener("click", button);

function readMore() {
     if (header1.className == "open") {
       // Ler menos
     header1.className = "";
     button.innerHTML = "Show more"; // Mostrar mais
   } else {
     header1.className = "open";
     button.innerHTML = "Show less"; // Mostrar menos
   }
}