// Declare both of the HTML elements you want to interact with
let closeButton = document.querySelector(".close-button");
let bannerContainer = document.querySelector(".banner-container");

// Add an event listener to the HTML element that you want to click on
closeButton.addEventListener("click", hideBanner);

// Create the click function to hide the banner
function hideBanner() {
  // Add the CSS class to the container element to hide the banner
  bannerContainer.classList.add("hideAll");
}
