const toggleMenuBtn = document.querySelector(".menu__btn")
const menuItems = document.querySelector(".menu__items")
const menuLink = document.querySelectorAll("menu__link")

const showMenu = () => {
	menuItems.classList.toggle("show__menu")
}

const hideMenu = () => {
	menuItems.classList.toggle("show__menu")
}

toggleMenuBtn.addEventListener("click", showMenu)
menuItems.addEventListener("click", showMenu)
