window.onload = function () {
  const whiteLogo = "./img/HomePage/whiteLOGO.png";
  const darkLogo = "./img/HomePage/darkLOGO.png";
  const logo = document.querySelector(".Logo");
  const modeSwitchers = document.querySelectorAll(".mode_switcher");

  // 讀取存儲在 localStorage 的模式
  const darkMode = localStorage.getItem("darkModeOn") === "true";
  document.body.classList.toggle("dark_mode", darkMode);
  logo.setAttribute("src", darkMode ? whiteLogo : darkLogo);

  modeSwitchers.forEach(function (switcher) {
    // 設置初始狀態
    switcher.checked = darkMode;

    switcher.addEventListener("change", function (event) {
      const darkMode = event.target.checked;
      document.body.classList.toggle("dark_mode", darkMode);
      logo.setAttribute("src", darkMode ? whiteLogo : darkLogo);

      // 將模式存儲在 localStorage
      localStorage.setItem("darkModeOn", darkMode);
    });
  });
};
