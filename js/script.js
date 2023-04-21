const hamburgerMenuButton = document.querySelector('.hamburger-menu')
const sideMenu = document.querySelector('.side-menu')

// hamburgerMenuButton.onclick = toggleSideMenu

function toggleSideMenu() {
    sideMenu.dataset.open = sideMenu.dataset.open === "0" ? "1" : "0"
}

function closeSideMenu() {
    sideMenu.dataset.open = "0"
}

const contentOverlay = document.querySelector('.content-overlay')

contentOverlay.onclick = closeSideMenu
