document.querySelectorAll('.gallery figure').forEach((figure, key) => {
  figure.classList.add('photo', `photo-${key + 1}`)
  figure.innerHTML = `
    <img
      src="/assets/pictures/photo${key + 1}.png"
      alt="photo${key + 1}"
    />`
})
