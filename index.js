const toggleMenuBtn = document.querySelector(".menu__btn")
const menuItems = document.querySelector(".menu__items")
const menuLink = document.querySelectorAll("menu__link")
const sections = document.querySelectorAll(".section")

const showMenu = () => {
	menuItems.classList.toggle("show__menu")
}

const hideMenu = () => {
	menuItems.classList.toggle("show__menu")
}

const observer = new IntersectionObserver(entries => {
	entries.forEach(entry => {
		entry.target.classList.toggle("appear", entry.isIntersecting)
	})
})

sections.forEach(section => {
	observer.observe(section)
})

toggleMenuBtn.addEventListener("click", showMenu)
menuItems.addEventListener("click", showMenu)
