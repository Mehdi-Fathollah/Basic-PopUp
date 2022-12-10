let popupShowBtn = document.querySelector(".show-popup");
let popup = document.querySelector(".popup");

popupShowBtn.addEventListener("click", () => {
  popupShowBtn.style.display = "none";
  popup.classList.add("popup-active");
});

popup.lastElementChild.addEventListener("click", () => {
  popupShowBtn.style.display = "block";
  popup.classList.remove("popup-active");
});
