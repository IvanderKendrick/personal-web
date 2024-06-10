// Navbar
const navbarNav = document.querySelector(".navbar-nav");

document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

const hamburger = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

// Link
const facebook = document.getElementsByClassName("facebook");
const instagram = document.getElementsByClassName("instagram");
const linkedin = document.getElementsByClassName("linkedin");
const github = document.getElementsByClassName("github");

facebook[0].addEventListener("click", function () {
  window.location.href =
    "https://www.facebook.com/ken.drick.3154?mibextid=ZbWKwL";
});
facebook[1].addEventListener("click", function () {
  window.location.href =
    "https://www.facebook.com/ken.drick.3154?mibextid=ZbWKwL";
});

instagram[0].addEventListener("click", function () {
  window.location.href =
    "https://www.instagram.com/ivander_kendrick?igsh=YmtybTc1dXN0aWk2";
});
instagram[1].addEventListener("click", function () {
  window.location.href =
    "https://www.instagram.com/ivander_kendrick?igsh=YmtybTc1dXN0aWk2";
});

linkedin[0].addEventListener("click", function () {
  window.location.href =
    "https://www.linkedin.com/in/ivander-kendrick-wijono-479b83288?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app";
});
linkedin[1].addEventListener("click", function () {
  window.location.href =
    "https://www.linkedin.com/in/ivander-kendrick-wijono-479b83288?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app";
});

github[0].addEventListener("click", function () {
  window.location.href = "https://github.com/IvanderKendrick";
});
github[1].addEventListener("click", function () {
  window.location.href = "https://github.com/IvanderKendrick";
});

// Hobbies Background Image
const layar = document.querySelector(".hobbies-content");

// Hobi Gaming
const gaming = document.querySelector(".hobby.gaming");

gaming.addEventListener("mouseenter", function () {
  layar.classList.add("gaming");
  // layar.style.backgroundImage = "url('images/code.jpg')";
  // layar.style.backgroundSize = "cover";
});
gaming.addEventListener("mouseleave", function () {
  layar.classList.remove("gaming");
  // layar.style.backgroundImage = "none";
  // layar.style.backgroundColor = "#222";
});

// Hobi Anime
const anime = document.querySelector(".hobby.anime");

anime.addEventListener("mouseenter", function () {
  layar.classList.add("anime");
  // layar.style.backgroundImage = "url('images/code.jpg')";
  // layar.style.backgroundSize = "cover";
});
anime.addEventListener("mouseleave", function () {
  layar.classList.remove("anime");
  // layar.style.backgroundImage = "none";
  // layar.style.backgroundColor = "#222";
});

// Hobi Webtoon
const webtoon = document.querySelector(".hobby.webtoon");
webtoon.addEventListener("mouseenter", function () {
  layar.classList.add("webtoon");
  // layar.style.backgroundImage = "url('images/code.jpg')";
  // layar.style.backgroundSize = "cover";
});
webtoon.addEventListener("mouseleave", function () {
  layar.classList.remove("webtoon");
  // layar.style.backgroundImage = "none";
  // layar.style.backgroundColor = "#222";
});

// Hobi Drakor
const drakor = document.querySelector(".hobby.drakor");
drakor.addEventListener("mouseenter", function () {
  layar.classList.add("drakor");
  // layar.style.backgroundImage = "url('images/code.jpg')";
  // layar.style.backgroundSize = "cover";
});
drakor.addEventListener("mouseleave", function () {
  layar.classList.remove("drakor");
  // layar.style.backgroundImage = "none";
  // layar.style.backgroundColor = "#222";
});

// Hobi Invest
const invest = document.querySelector(".hobby.investing");
invest.addEventListener("mouseenter", function () {
  layar.classList.add("investing");
  // layar.style.backgroundImage = "url('images/code.jpg')";
  // layar.style.backgroundSize = "cover";
});
invest.addEventListener("mouseleave", function () {
  layar.classList.remove("investing");
  // layar.style.backgroundImage = "none";
  // layar.style.backgroundColor = "#222";
});

//  Favorite Countries

const next = document.querySelector(".next");
const prev = document.querySelector(".prev");

next.addEventListener("click", () => {
  const items = document.querySelectorAll(".item");
  document.querySelector(".slide").appendChild(items[0]);
});

prev.addEventListener("click", () => {
  const items = document.querySelectorAll(".item");
  document.querySelector(".slide").prepend(items[items.length - 1]);
});

// Contact Me Button
const contactMeButton = document.querySelector(".content-left .btn");
const form = document.querySelector(".contact-me");

contactMeButton.addEventListener("click", () => {
  form.style.display = "grid";
});

const closeButton = document.querySelector(".contact-me button.close");

// Contact Me - Close Button
closeButton.addEventListener("click", () => {
  form.style.display = "none";
});
