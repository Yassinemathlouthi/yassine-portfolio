document.getElementById("btn").onclick = function () {
  document.querySelector("header ul").classList.toggle("show");
};

window.onscroll = function () {
  document.querySelector(".back-top").classList.toggle("active", window.scrollY > 75);
};