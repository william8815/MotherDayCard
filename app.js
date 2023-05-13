const lockIcon = document.querySelector(".lock_icon");
const unlockIcon = document.querySelector(".unlock_icon");
const frontPage = document.querySelector(".front-page");
const mainPage = document.querySelector(".main-page");
const article = document.querySelector("article");

// 初始化
unlockIcon.classList.add("d-none");

lockIcon.addEventListener("click", function onClicked() {
  lockIcon.classList.add("d-none");
  unlockIcon.classList.remove("d-none");
  setTimeout(() => {
    frontPage.classList.add("hide");
  }, 500);
  setTimeout(() => {
    mainPage.classList.add("show");
  }, 1500);
  setTimeout(() => {
    article.classList.add("show");
  }, 2000);
});
