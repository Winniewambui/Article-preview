const shareIcon = document.querySelector(".share-icon");
const socialIcons = document.querySelector(".social-icons");

shareIcon.addEventListener("click", () =>{
    // socialIcons.style.display = "block"
    socialIcons.classList.toggle("hide")
})