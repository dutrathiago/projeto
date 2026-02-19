function toggleMode() {
  const html = document.documentElement

  /* if(html.classList.constains('light')) {
    html.classList.remove('light')
  } else {
    html.classList.add('light')
  } */

  html.classList.toggle("ligth")

  // pegar a tag img
  const img = document.querySelector("#profile img")

  // substituir a img
  if (html.classList.contains("light")) {
    // se tiver light mode, adicionar a imagem ligth
    img.setAttribute("src", "./assets/avatar-light.png")
  } else {
    // set tiver sem light mode, mudar a imagem normal
    img.setAttribute("src", "./assets/avatar.png")
  }
}
