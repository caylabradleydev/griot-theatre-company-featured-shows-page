const nav = document.getElementById("nav"); //navbar
const menu = document.getElementById("navMenu"); //navbar menu
const openMenuBtn = document.getElementById("openMenuBtn"); //mobile menu button
const closeMenuBtn = document.getElementById("closeMenuBtn"); //mobile close menu button

//OPEN MOBILE MENU
openMenuBtn.addEventListener("click", () => {
  menu.style.display = "block";
  openMenuBtn.style.display = "none";
  closeMenuBtn.style.display = "inline-block";
});

//CLOSE MOBILE MENU
closeMenuBtn.addEventListener("click", () => {
  menu.style.display = "none";
  closeMenuBtn.style.display = "none";
  openMenuBtn.style.display = "inline-block";
});
