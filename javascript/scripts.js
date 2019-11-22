function getModalOverlay() {
  return document.querySelector('.modal-overlay')
}

function getCards() {
  return document.querySelectorAll('.card')

}

if (getModalOverlay()) {
  displayModal()
  addCloseModalHandler()
}

function displayModal() {

  let modalOverlay = getModalOverlay()
  let cards = getCards()

  for (let card of cards) {
    card.addEventListener("click", function () {
      modalOverlay.classList.add('active')

      let imgSrc = card.querySelector(".card__image-container img").src
      let recipeName = card.querySelector(".card__recipe-name").textContent
      let authorName = card.querySelector(".card__author").textContent

      modalOverlay.querySelector(".modal-content img").src = imgSrc
      modalOverlay.querySelector(".modal__recipe-name").innerHTML = recipeName
      modalOverlay.querySelector(".modal__author").innerHTML = authorName
    })
  }
}

function addCloseModalHandler() {
  let modalOverlay = getModalOverlay()

  document.querySelector(".modal__close").addEventListener(
    "click",
    function () {
      modalOverlay.classList.remove("active")
    }
  )
}

/* ==== Links ==== */

const aboutLink = document.querySelector('#about')
const recipesLink = document.querySelector('#recipes')

console.log(document.URL)

if (document.location.pathname.includes("about.html")) {
  aboutLink.classList.add("active")
} 

if (document.location.pathname.includes("recipes.html")) {
    recipesLink.classList.add("active")
}



