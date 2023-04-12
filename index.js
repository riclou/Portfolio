const button = document.querySelector(".btn-info")
const show = document.querySelector(".see-more")

button.addEventListener("click", () =>{
  if(show.style.display = "none"){
    show.style.display = "flex"
    button.textContent = "Mostrar menos"
  }
})

button.addEventListener("click", () =>{
  if(show.style.display = "flex"){
    show.style.display = "none"
    button.textContent = "Ver mais"
  }
  })

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      })
  })
})