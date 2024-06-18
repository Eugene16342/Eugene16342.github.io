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
        name: "應該是音響吧我也不確定",
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
        name: "美國大廠點卡",
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

  function setupScrolling(scrollSpeed) {
    let container = document.querySelector(".Store_Container");
    let nextBtn = document.querySelector(".btn_next");
    let preBtn = document.querySelector(".btn_pre");

    let scrollInterval; // 用於存儲setInterval的ID

    // 為按鈕添加mousedown事件監聽器
    nextBtn.addEventListener("mousedown", function () {
      scrollInterval = setInterval(function () {
        container.scrollLeft += scrollSpeed;
      }, 15); // 每20毫秒滑動一次
    });

    preBtn.addEventListener("mousedown", function () {
      scrollInterval = setInterval(function () {
        container.scrollLeft -= scrollSpeed;
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
  }

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
      name: "應該是音響吧我也不確定",
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
      name: "美國大廠點卡",
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

  function setGoodsCards(title, goodsSort, cardsContainer) {
    let container = document.querySelector(cardsContainer);
    let cardsHTML = "";
    // 使用 forEach 方法來遍歷 goodsSort 陣列
    goodsSort.forEach((item) => {
      cardsHTML += `
            <div class="card col-3">
                <img src="${item.img}" class="filter card-img-top">
                <div class="card-body">
                    <a href="" class="card-text">${item.name}</a>
                    <span class="Goods_Info_Price">${item.price}</span>
                </div>
                <a class="put_in_order">放入購物車</a>
            </div>
        `;
    });

    container.innerHTML = `
    <div class="goods_cards_nav">
        <h4 class="sorts_title">${title}</h4>
        <a class="watch_more" href="">看更多</a>
    </div>
    <div class="goods_cards">
        ${cardsHTML}  <!-- 將生成的卡片的 HTML 字串插入到這裡 -->
    </div>
`;
  }

  setGoodsCards("熱賣商品", goods, ".goodsSort1");
  setGoodsCards("實體商品", goods, ".goodsSort2");
  setGoodsCards("虛擬序號", goods, ".goodsSort3");
  setGoodsCards("奇貨", goods, ".goodsSort4");
  setPointStoreContent();
  setupScrolling(8);
});
