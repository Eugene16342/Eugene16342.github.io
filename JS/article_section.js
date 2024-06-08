document.addEventListener("DOMContentLoaded", function () {
  const img_mode = document.getElementById("img_mode");
  const title_mode = document.getElementById("title_mode");

  title_mode.addEventListener("click", function () {
    img_mode.classList.remove("active");
    this.classList.add("active");

    document.querySelectorAll(".article_title_img").forEach(function (img) {
      img.style.display = "none";
    });
    document.querySelectorAll(".article_title_title").forEach(function (title) {
      title.style.width = "1100px";
    });
  });

  img_mode.addEventListener("click", function () {
    title_mode.classList.remove("active");
    this.classList.add("active");

    document.querySelectorAll(".article_title_img").forEach(function (img) {
      img.style.display = "inline";
    });
    document.querySelectorAll(".article_title_title").forEach(function (title) {
      title.style.width = "950px";
    });
  });
});
