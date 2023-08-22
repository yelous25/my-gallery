document.querySelectorAll('.gallery figure').forEach((figure, key) => {
  let imgURL = new URL(`/assets/pictures/photo${key + 1}.png`, import.meta.url).href
  figure.classList.add('photo', `photo-${key + 1}`)
  figure.innerHTML = `
    <img
      src="${imgURL}"
      alt="photo${key + 1}"
    />`
})
