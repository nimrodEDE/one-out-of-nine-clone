const lists = document.querySelectorAll(".list");
const searchDesktop = document.querySelector(".search-left");
const navTextInputDesktop = document.querySelector("#searchBarDesktop");
const navMenu = document.querySelector(".navList");

const navTextInputMobile = document.querySelector("#searchBarMobile");
const searchMobile = document.querySelector(".search-right");
const logoImg = document.querySelector(".logoImg");
const cartIcon = document.querySelector("#cartNav");
const searchBarMobileIcon = document.querySelector("#searchBarMobileIcon");

const hamburger = document.querySelector(".hamburger");
const sideMenu = document.querySelector(".side-menu");
const xIcon = document.querySelector(".xIcon");

const sideMenuIcons = [hamburger, xIcon];

sideMenuIcons.forEach((icon) => {
  console.log(icon);

  icon.addEventListener("click", () => {
    sideMenu.classList.toggle("hidden");
  });
});

let searchClicked = false;

// toggle footer-menues Open/Close

lists.forEach((list) => {
  list.addEventListener("click", (e) => {
    const svgSpan = list.querySelector(".vectorDown"); // Find the span containing the SVG
    if (svgSpan) {
      svgSpan.classList.toggle("expanded");
    }

    list.children[2].classList.toggle("expanded");
  });
});

// Function to toggle desktop search
function toggleDesktopSearch() {
  searchClicked = !searchClicked;

  // Toggle visibility for desktop elements
  navTextInputDesktop.classList.toggle("hidden");
  navMenu.classList.toggle("hidden");
}

// Function to toggle mobile search
function toggleMobileSearch() {
  searchClicked = !searchClicked;

  // Toggle visibility for mobile elements
  navTextInputMobile.classList.toggle("hidden");
  logoImg.classList.toggle("hidden");
  cartIcon.classList.toggle("hidden");
  searchBarMobileIcon.classList.toggle("hidden");
  searchMobile.classList.toggle("hidden");
}

function handleResize() {
  const screenWidth = window.innerWidth;

  if (screenWidth < 1200 && searchClicked) {
    if (!navTextInputDesktop.classList.contains("hidden")) {
      toggleDesktopSearch();
      toggleMobileSearch();
    }
  }
  if (screenWidth > 1200 && searchClicked) {
    if (!navTextInputMobile.classList.contains("hidden")) {
      toggleMobileSearch();
      toggleDesktopSearch();
    }
  }
}

// Function to handle clicks outside the mobile search bar
function handleOutsideClick(e) {
  const screenWidth = window.innerWidth;

  if (screenWidth < 1200 && searchClicked) {
    const isClickInsideSearchBar =
      navTextInputMobile.contains(e.target) || searchMobile.contains(e.target);

    if (!isClickInsideSearchBar) {
      toggleMobileSearch(); // Close the search if the click was outside
    }
  }
}

// Select the "אני בריאה" menu item
const firstMenuItem = document.getElementById("first-menu-item");
// Select the sub-menu
const subMenu = document.getElementById("sub-menu-1");
// Select the back button
// Show the sub-menu when "אני בריאה" is clicked
firstMenuItem.addEventListener("click", () => {
  subMenu.classList.remove("hidden");
});

// Add event listeners
searchDesktop.addEventListener("click", toggleDesktopSearch);
searchMobile.addEventListener("click", toggleMobileSearch);
window.addEventListener("resize", handleResize);
document.addEventListener("click", handleOutsideClick);
