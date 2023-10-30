function toggleMode() {
  const html = document.documentElement
  html.classList.toggle('light')

  //pegar a tag img
  const img = document.querySelector("#profile img")

  //substituir o avatar
  if (html.classList.contains('light')) {
    img.setAttribute('src', './imgs/bea-avatar-light.png')

  } else {
    img.setAttribute('src', './imgs/bea-avatar.png')

  }
}