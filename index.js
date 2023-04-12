const show = document.querySelector(".see-more")
const on = document.querySelector(".on")
const off = document.querySelector(".off")

on.addEventListener("click", () =>{
  if(show.style.display = "none"){
    on.style.display = "none"
    off.style.display = "block"
    show.style.display = "flex"
  }
})

off.addEventListener("click", () =>{
  if(show.style.display = "flex"){
    on.style.display = "block"
    off.style.display = "none"
    show.style.display = "none"
  }
})

function createMouse(event){
  event.children[1].style.display = "block"
}

function deleteMouse(event){
  event.children[1].style.display = "none"
}


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      })
  })
})