document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("scroll", () => {
    let boards = [
      {
        img: "./img/hot_section/martial_ats.jpg",
        title: "八卦閒聊",
        intor:
          "八卦掌為中國武術的著名拳種，源自清朝末年武師董海川，與太極拳和形意拳並稱三大內家拳。",
        update: 5,
      },
      {
        img: "./img/hot_section/chiwawa.jpeg",
        title: "寵物毛孩",
        intor:
          "目光理想夢想革命終大地點立場支付總部種種具有，需要小學製作發揮，到底套件世界盃電計三個，告知表現因而，果然您。",
        update: 2,
      },
      {
        img: "./img/hot_section/gameing.jpg",
        title: "動漫遊戲",
        intor:
          "技術風險預覽高中照顧具有位於本來體現資格，採取還沒有品質公開感情化學世界事實證實女士一番。",
        update: 1,
      },
      {
        img: "./img/hot_section/city.jpg",
        title: "投資理財",
        intor:
          "圖書館保健進步明白紀受傷那是體現當年一部分比賽是的也就是，做法哈哈受傷下載，按照消費不去讀者庫高達智慧有限，精英。",
        update: 7,
      },
      {
        img: "./img/hot_section/flower.jpg",
        title: "烹飪廚藝",
        intor:
          "每次簡單很有股票用戶為主總數和平跟我，零售物品鬱悶招商精英早上，表明，走了常用確。",
        update: 23,
      },
      {
        img: "./img/hot_section/night_sky.jpg",
        title: "明星網紅",
        intor:
          "轎車由此地圖吃了留在關閉鑒定模組之一，見面如同馬上中有住了銀行部分請問當初不禁下載新技術。",
        update: 5,
      },
      {
        img: "./img/hot_section/black_and_withe.jpg",
        title: "運動健身",
        intor:
          "很有外貿校長來說廣場力記者臺，不然接着常常工商內心一段時間套件讓他，不肯微微策劃都不各種我覺得被人學術，或是傷心大。",
        update: 5,
      },
      {
        img: "./img/hot_section/coffee.jpg",
        title: "職場工作",
        intor:
          "中學法國幾個驅動城火愛哪車人力可重牛丁市導演以外難以一樣大陸供應認定排名，人我覺。",
        update: 2,
      },
    ];
    let container = document.getElementById("section_container");
    let scrollHeight = document.documentElement.scrollHeight;
    let scrollPosition = window.innerHeight + window.scrollY;

    if (scrollPosition / scrollHeight >= 0.8) {
      boards.forEach((board) => {
        container.innerHTML += `
            <div class=" card mb-3 m-2" style="width: 540px; height: 176px;">
              <a  href="./article_section.html" class=" hot_section row g-0">
                <div style="height: 176px;" class="col-md-4  ">
                  <img
                    src="${board.img}"
                    class="filter img-fluid rounded-start w-100 h-100"
                    alt="..."
                  />
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title">${board.title}</h5>
                    <p class="card-text">
                      ${board.intor}
                    </p>
                    <p class="card-text">
                      <small class="">最後更新於${board.update}分鐘前</small>
                    </p>
                  </div>
                </div>
              </a>
            </div>
          `;
      });
    }
  });
});
