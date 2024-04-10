const linksNotFound = document.querySelectorAll("#internacional, #economia, #saude, #ciencia");

linksNotFound.forEach((element) => {
    element.addEventListener("click", (event) => {
        event.preventDefault();
        alert("Essa página não esta disponivel. Páginas navegaveis: home, Brasil e Fotos.");
    });
});