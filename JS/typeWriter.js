const nome = document.querySelector(".h1")
       
typeWriter(nome)

function typeWriter(elemento){
   
    const texto = elemento.innerHTML.split("");
    elemento.innerHTML = "";

    texto.forEach((letra, i) =>{

        setTimeout( () => elemento.innerHTML += letra , 79 * i)
 
    })


}  