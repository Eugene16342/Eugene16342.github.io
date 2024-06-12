document.addEventListener("DOMContentLoaded", function () {
  function setPointStoreContent() {
    let goods = [
      {
        img: "./img/HomePage/goods1.jpg",
        name: "VR頭盔之類的",
        price: 12300,
      },
      {
        img: "./img/HomePage/goods2.jpg",
        name: "遊戲手把之類的",
        price: 5678,
      },
      {
        img: "./img/HomePage/goods3.jpg",
        name: "很大的滑鼠墊",
        price: 1234,
      },
      {
        img: "./img/HomePage/goods4.jpg",
        name: "應該是音響吧把八八八八八八八",
        price: 9876,
      },
      {
        img: "./img/HomePage/goods5.jpg",
        name: "叉叉盒子通行證",
        price: 599,
      },
      {
        img: "./img/HomePage/goods6.jpg",
        name: "某點卡",
        price: 450,
      },
      {
        img: "./img/HomePage/goods7.jpg",
        name: "賴點卡",
        price: 60,
      },
      {
        img: "./img/HomePage/goods8.jpg",
        name: "日本大廠點卡",
        price: 1000,
      },
      {
        img: "./img/HomePage/goods9.jpg",
        name: "美國打大廠點卡",
        price: 3000,
      },
      {
        img: "./img/HomePage/goods10.jpg",
        name: "看起來像中空的滑鼠",
        price: 9999,
      },
      {
        img: "./img/HomePage/goods11.jpg",
        name: "看起來很站位置的鍵盤",
        price: 8888,
      },
      {
        img: "./img/HomePage/goods12.jpg",
        name: "耳機",
        price: 11111,
      },
      {
        img: "./img/HomePage/goods1.jpg",
        name: "VR頭盔之類的",
        price: 12300,
      },
      {
        img: "./img/HomePage/goods2.jpg",
        name: "遊戲手把之類的",
        price: 5678,
      },
      {
        img: "./img/HomePage/goods3.jpg",
        name: "很大的滑鼠墊",
        price: 1234,
      },
      {
        img: "./img/HomePage/goods4.jpg",
        name: "應該是音響吧把八八八八八八八",
        price: 9876,
      },
      {
        img: "./img/HomePage/goods5.jpg",
        name: "叉叉盒子通行證",
        price: 599,
      },
      {
        img: "./img/HomePage/goods6.jpg",
        name: "某點卡",
        price: 450,
      },
      {
        img: "./img/HomePage/goods7.jpg",
        name: "賴點卡",
        price: 60,
      },
      {
        img: "./img/HomePage/goods8.jpg",
        name: "日本大廠點卡",
        price: 1000,
      },
      {
        img: "./img/HomePage/goods9.jpg",
        name: "美國打大廠點卡",
        price: 3000,
      },
      {
        img: "./img/HomePage/goods10.jpg",
        name: "看起來像中空的滑鼠",
        price: 9999,
      },
      {
        img: "./img/HomePage/goods11.jpg",
        name: "看起來很站位置的鍵盤",
        price: 8888,
      },
      {
        img: "./img/HomePage/goods12.jpg",
        name: "耳機",
        price: 11111,
      },
    ];
    let containerRow = document.querySelector(
      ".Store_Container .Store_Container_row"
    );

    let htmlStr = "";

    goods.forEach((good) => {
      // 創建卡片HTML
      let cardHTML = `
      <div class="card">
        <img src="${good.img}" class="filter card-img-top">
        <div class="card-body">
          <a href="" class="card-text">${good.name}</a>
          <span class="Goods_Info_Price">$${good.price}點</span>
        </div>
      </div>
    `;

      // 將卡片添加到HTML字符串
      htmlStr += cardHTML;
    });

    // 將HTML字符串設置為容器的內容
    containerRow.innerHTML = htmlStr;
  }

  function setupScrolling(
    containerSelector,
    nextBtnSelector,
    preBtnSelector,
    scrollAmount
  ) {
    let container = document.querySelector(containerSelector);
    let nextBtn = document.querySelector(nextBtnSelector);
    let preBtn = document.querySelector(preBtnSelector);

    let scrollInterval; // 用於存儲setInterval的ID

    // 為按鈕添加mousedown事件監聽器
    nextBtn.addEventListener("mousedown", function () {
      scrollInterval = setInterval(function () {
        container.scrollLeft += scrollAmount;
      }, 15); // 每20毫秒滑動一次
    });

    preBtn.addEventListener("mousedown", function () {
      scrollInterval = setInterval(function () {
        container.scrollLeft -= scrollAmount;
      }, 15);
    });

    // 為按鈕添加mouseup和mouseleave事件監聽器
    nextBtn.addEventListener("mouseup", function () {
      clearInterval(scrollInterval); // 停止滑動
    });

    nextBtn.addEventListener("mouseleave", function () {
      clearInterval(scrollInterval); // 如果鼠標離開按鈕，也停止滑動
    });

    preBtn.addEventListener("mouseup", function () {
      clearInterval(scrollInterval);
    });

    preBtn.addEventListener("mouseleave", function () {
      clearInterval(scrollInterval);
    });

    //自動滾動功能看起來有點卡卡的且看不清卡片的內容有點雞肋，
    // function autoScroll() {
    //   if (
    //     container.scrollLeft >=
    //     container.scrollWidth - container.clientWidth
    //   ) {
    //     scrollAmount = -Math.abs(scrollAmount); // 到達右邊界，改為向左滾動
    //   } else if (container.scrollLeft <= 0) {
    //     scrollAmount = Math.abs(scrollAmount); // 到達左邊界，改為向右滾動
    //   }
    //   container.scrollLeft += scrollAmount;
    // }

    // // 啟動自動滾動
    // autoScrollInterval = setInterval(autoScroll, 30);

    // // 當滑鼠進入容器時，停止自動滾動
    // container.addEventListener("mouseenter", function () {
    //   clearInterval(autoScrollInterval);
    // });

    // // 當滑鼠離開容器時，重新啟動自動滾動
    // container.addEventListener("mouseleave", function () {
    //   autoScrollInterval = setInterval(autoScroll, 20);
    // });
  }

  setPointStoreContent();
  setupScrolling(".Store_Container", ".btn_next", ".btn_pre", 8);
});
