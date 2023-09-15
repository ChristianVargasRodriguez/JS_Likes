function like(element) {
    let contenedor = element.closest('.friend');
    let contador = contenedor.querySelector('.click');
    let numLikes = contador.innerText
    numLikes ++;
    contador.innerText = numLikes;
}
