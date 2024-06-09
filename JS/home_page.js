document.addEventListener("DOMContentLoaded", function () {
  let hot_topic = [
    {
      board: "寵物天地",
      title: "【閒聊】吉娃國吉娃兵",
      click: 8887,
    },
    {
      board: "動漫遊戲",
      title: "【閒聊】那些當初吹星空可以和伯德3拚年度遊戲的人哪去了",
      click: 5467,
    },
    {
      board: "職場工作",
      title: "【閒聊】第一天上班，問都問",
      click: 3456,
    },
    {
      board: "烹飪廚藝",
      title: "【分享】有批牛肉好便宜的阿，有需要就打這支電話",
      click: 3333,
    },
    {
      board: "投資理財",
      title: "【問題】新手請教，股票損益是負的，可以打給營業員讓他變正的嗎",
      click: 2345,
    },
    {
      board: "八卦閒聊",
      title: "【求助】本能寺這邊失火了，我卻出不去，誰能幫打119一下？",
      click: 1235,
    },
    {
      board: "八卦閒聊",
      title: "【閒聊】我認為空手道是世上最強的武術，不服來辯",
      click: 1234,
    },
    {
      board: "動漫遊戲",
      title: "【閒聊】寧次明明就會八卦掌，幹嘛用身體擋",
      click: 1233,
    },
    {
      board: "明星網紅",
      title: "【閒聊】這人是誰，怎麼新聞一直報",
      click: 1232,
    },
    {
      board: "很長很長很長很長很長的標題",
      title:
        "【很長】很長很長很長很長很長很長很長很長很長很長很長很長很長很長很長很長很長很長很長很很長很長很長很長很長很",
      click: 123456789,
    },
  ];

  let gossiping_topic = [
    {
      board: "寵物天地",
      title: "【閒聊】吉娃國吉娃兵",
      click: 8887,
    },
    {
      board: "職場工作",
      title: "【閒聊】讀書比較輕鬆還是上班比較輕鬆",
      click: 5555,
    },
    {
      board: "職場工作",
      title: "【閒聊】第一天上班，問都問",
      click: 3456,
    },
    {
      board: "烹飪廚藝",
      title: "【分享】有批牛肉好便宜的阿，有需要就打這支電話",
      click: 3333,
    },
    {
      board: "烹飪廚藝",
      title: "【問題】哪裡有便宜的牛肉",
      click: 2345,
    },
    {
      board: "八卦閒聊",
      title: "【求助】本能寺這邊失火了，我卻出不去，誰能幫打119一下？",
      click: 1235,
    },
    {
      board: "八卦閒聊",
      title: "【閒聊】我認為空手道是世上最強的武術，不服來辯",
      click: 1234,
    },
    {
      board: "寵物天地",
      title: "【閒聊】王爸爸狗園有吉娃娃嗎",
      click: 852,
    },
    {
      board: "動漫遊戲",
      title: "【閒聊】庫拉皮卡還要幾年才能下船",
      click: 682,
    },
    {
      board: "明星網紅",
      title: "【閒聊】這人是誰，怎麼新聞一直報",
      click: 125,
    },
  ];

  let anime_topic = [
    {
      board: "美式卡通",
      title: "【閒聊】驚奇數位馬戲團半年三億點閱是不是有點扯",
      click: 9987,
    },
    {
      board: "刃牙",
      title:
        "【情報】動畫電影《範馬刃牙 vs 拳願阿修羅》2024年6月6日Netflix配信",
      click: 5555,
    },
    {
      board: "拳願阿修羅",
      title: "【問題】緬甸哥什麼咖 挑出來打花山是瞧不起誰",
      click: 3456,
    },
    {
      board: "英雄聯盟",
      title: "【情報】14.11平衡預覽，換線套路",
      click: 3333,
    },
    {
      board: "動漫遊戲",
      title: "【討論】來討論歷年來心中神作前幾名的動畫",
      click: 2345,
    },
    {
      board: "獵人 Hunter x Hunter",
      title: "【問題】本來以為還要等個一兩年",
      click: 1235,
    },
    {
      board: "英雄聯盟",
      title: "【問題】名人堂票選名單",
      click: 1234,
    },
    {
      board: "爐石戰紀",
      title: "【閒聊】雙打模式484沒什麼料",
      click: 852,
    },
    {
      board: "STEAM",
      title: "【情報】來啦！ 新的預告片與發售日期！",
      click: 682,
    },
    {
      board: "魁男塾",
      title: "【閒聊】宮下亞喜羅原本484想畫校園漫畫，結果不小心畫成格鬥漫畫ㄌ",
      click: 125,
    },
  ];

  let series_topic = [
    {
      board: "熱門影集",
      title: "【情報】黑袍糾察隊第4季預告",
      click: 3241,
    },
    {
      board: "電影視界",
      title: "【心得】九龍城寨之圍城",
      click: 1255,
    },
    {
      board: "熱門影集",
      title:
        "【心得】《人生複本》絕對必看 最好買小說 真的滿分 平行宇宙又帶省思意味",
      click: 1112,
    },
    {
      board: "電影視界",
      title: "【閒聊】動畫電影《八戒》真的有那麼糟嗎?",
      click: 985,
    },
    {
      board: "熱門影集",
      title:
        "【情報】《沙丘》前傳影集《沙丘：預言》前導預告曝光　時間背景設定本傳一萬年前",
      click: 945,
    },
    {
      board: "熱門影集",
      title: "【情報】亞馬遜Prime Video即將製作《古墓奇兵》真人影集版",
      click: 877,
    },
    {
      board: "熱門影集",
      title: "【情報】私刑教育影集版第五季 前導預告公開",
      click: 689,
    },
    {
      board: "電影視界",
      title: "【閒聊】原來我們看的林正英自導自演的一眉道人士是刪減版.........",
      click: 601,
    },
    {
      board: "熱門影集",
      title: "【情報】鬼娃恰吉影集版第三季 預告",
      click: 553,
    },
    {
      board: "電影視界",
      title: "【問題】社群網站這部電影，哪些是真，哪些是假?",
      click: 413,
    },
  ];

  let other_topic = [
    {
      board: "八卦閒聊",
      title: "【情報】美國男等公車遭撞嘆「行人地獄」網疑設計不良",
      click: 12352,
    },
    {
      board: "寵物天地",
      title: "【閒聊】吉娃國吉娃兵",
      click: 8887,
    },
    {
      board: "職場工作",
      title: "【閒聊】第一天上班，問都問",
      click: 3456,
    },
    {
      board: "烹飪廚藝",
      title: "【分享】有批牛肉好便宜的阿，有需要就打這支電話",
      click: 3333,
    },
    {
      board: "投資理財",
      title: "【問題】新手請教，股票損益是負的，可以打給營業員讓他變正的嗎",
      click: 2345,
    },
    {
      board: "八卦閒聊",
      title: "【求助】本能寺這邊失火了，我卻出不去，誰能幫打119一下？",
      click: 1235,
    },
    {
      board: "八卦閒聊",
      title: "【閒聊】我認為空手道是世上最強的武術，不服來辯",
      click: 1234,
    },
    {
      board: "明星網紅",
      title: "【閒聊】這人是誰，怎麼新聞一直報",
      click: 1232,
    },
    {
      board: "明星網紅",
      title: "【閒聊】椅子入監，椅粉何去何從",
      click: 1233,
    },
    {
      board: "八卦閒聊",
      title: "【情報】殺人未遂逃犯身上沒錢！逃4天去工地2天　還沒領薪就被逮",
      click: 1110,
    },
  ];

  const hot = document.getElementById("hot_topic");
  const gossiping = document.getElementById("gossiping_topic");
  const anime = document.getElementById("anime_topic");
  const series = document.getElementById("series_topic");
  const other = document.getElementById("other_topic");
  const topic_container = document.getElementById("topic_container");

  const lis = document.querySelectorAll(".famous_topic_chose li");
  lis.forEach((li) => {
    li.addEventListener("click", () => {
      lis.forEach((otherli) => otherli.classList.remove("active"));
      li.classList.add("active");
    });
  });

  function chiose_topic(topics) {
    let topicHTML = "";
    topics.forEach((topic, index) => {
      topicHTML += `
    <div class="d-flex justify-content-between famous_topic_rank">
      <span class="col-0 num">${index + 1}</span>
      <span class="col-2 famous_topic_rank_title">
        <a href="./hot_section.html" target="_blank">${topic.board}</a>
      </span>
      <span class="col-8 famous_topic_rank_title">
        <a href="./post.html" target="_blank">${topic.title}</a>
      </span>
      <span class="text-center col-1">${topic.click}</span>
    </div>
  `;
    });
    topic_container.innerHTML = topicHTML;
  }

  chiose_topic(hot_topic);

  hot.addEventListener("click", function () {
    chiose_topic(hot_topic);
  });

  gossiping.addEventListener("click", function () {
    chiose_topic(gossiping_topic);
  });
  anime.addEventListener("click", function () {
    chiose_topic(anime_topic);
  });
  series.addEventListener("click", function () {
    chiose_topic(series_topic);
  });
  other.addEventListener("click", function () {
    chiose_topic(other_topic);
  });

  window.addEventListener("scroll", () => {
    let infiniteScrolling_post = [
      {
        img_src: "./img/HomePage/infiniteScrolling11.jpg",
        title: "【情報】柴犬迷因始祖「Kabosu」離世 主人證實：牠已經安息",
        sort: "八卦閒聊",
        likes: 11,
        comments: 11,
      },
      {
        img_src: "./img/HomePage/infiniteScrolling22.jpg",
        title:
          "【情報】動畫電影《範馬刃牙 vs 拳願阿修羅》2024年6月6日Netflix配信",
        sort: "刃牙系列",
        likes: 22,
        comments: 22,
      },
      {
        img_src: "./img/HomePage/infiniteScrolling33.jpg",
        title: "【問題】新手請教，股票損益是負的，可以打給營業員讓他變正的嗎",
        sort: "投資理財",
        likes: 33,
        comments: 33,
      },
      {
        img_src: "./img/HomePage/infiniteScrolling44.jpg",
        title:
          "【很長】很長很長很長很長很長很長很長很長很長很長很長很長很長很長的標題看起來可以增加不規則的美感",
        sort: "很長很長",
        likes: 44,
        comments: 44,
      },
      {
        img_src: "./img/HomePage/infiniteScrolling55.jpg",
        title: "【閒聊】第一天上班，問都問",
        sort: "八卦閒聊",
        likes: 55,
        comments: 55,
      },
      {
        img_src: "./img/HomePage/infiniteScrolling66.jpg",
        title: "【閒聊】那些當初吹星空可以和柏德3拚年度遊戲的人哪去了",
        sort: "動漫遊戲",
        likes: 66,
        comments: 66,
      },
      {
        img_src: "./img/HomePage/infiniteScrolling77.jpg",
        title: "【情報】美國男等公車遭撞嘆「行人地獄」網疑設計不良",
        sort: "八卦閒聊",
        likes: 77,
        comments: 77,
      },
      {
        img_src: "./img/HomePage/infiniteScrolling88.jpg",
        title: "【閒聊】讀書比較輕鬆還是上班比較輕鬆",
        sort: "八卦閒聊",
        likes: 88,
        comments: 88,
      },
      {
        img_src: "./img/HomePage/infiniteScrolling99.jpg",
        title:
          "【情報】《沙丘》前傳影集《沙丘：預言》前導預告曝光　時間背景設定本傳一萬年前",
        sort: "熱門影集",
        likes: 99,
        comments: 99,
      },
      {
        img_src: "./img/HomePage/infiniteScrolling10.jpg",
        title: "【閒聊】黑袍糾察隊第4季",
        sort: "熱門影集",
        likes: 10,
        comments: 10,
      },
    ];

    const containers = document.getElementsByClassName(
      "infiniteScrolling_container"
    );
    let scrollHeight = document.documentElement.scrollHeight;
    let scrollPosition = window.innerHeight + window.scrollY;

    if (scrollPosition / scrollHeight >= 0.8) {
      for (let i = 0; i < containers.length; i++) {
        let post =
          infiniteScrolling_post[
            Math.floor(Math.random() * infiniteScrolling_post.length)
          ];
        containers[i].innerHTML += `           
      <div class="infiniteScrolling_item mb-2">
        <a href="" class=" w-100 h-100">
          <img
            class=" filter w-100 h-100"
            src="${post.img_src}"
          />
        </a>
        <p class="p-2">
          <a class="text_hover fw-bold" href="./post.html" target="_blank"
            >${post.title}</a
          >
        </p>
        <small class="text ps-2">
          <a>${post.sort}</a>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-hand-thumbs-up" viewBox="0 0 16 16">
            <path d="M8.864.046C7.908-.193 7.02.53 6.956 1.466c-.072 1.051-.23 2.016-.428 2.59-.125.36-.479 1.013-1.04 1.639-.557.623-1.282 1.178-2.131 1.41C2.685 7.288 2 7.87 2 8.72v4.001c0 .845.682 1.464 1.448 1.545 1.07.114 1.564.415 2.068.723l.048.03c.272.165.578.348.97.484.397.136.861.217 1.466.217h3.5c.937 0 1.599-.477 1.934-1.064a1.86 1.86 0 0 0 .254-.912c0-.152-.023-.312-.077-.464.201-.263.38-.578.488-.901.11-.33.172-.762.004-1.149.069-.13.12-.269.159-.403.077-.27.113-.568.113-.857 0-.288-.036-.585-.113-.856a2 2 0 0 0-.138-.362 1.9 1.9 0 0 0 .234-1.734c-.206-.592-.682-1.1-1.2-1.272-.847-.282-1.803-.276-2.516-.211a10 10 0 0 0-.443.05 9.4 9.4 0 0 0-.062-4.509A1.38 1.38 0 0 0 9.125.111zM11.5 14.721H8c-.51 0-.863-.069-1.14-.164-.281-.097-.506-.228-.776-.393l-.04-.024c-.555-.339-1.198-.731-2.49-.868-.333-.036-.554-.29-.554-.55V8.72c0-.254.226-.543.62-.65 1.095-.3 1.977-.996 2.614-1.708.635-.71 1.064-1.475 1.238-1.978.243-.7.407-1.768.482-2.85.025-.362.36-.594.667-.518l.262.066c.16.04.258.143.288.255a8.34 8.34 0 0 1-.145 4.725.5.5 0 0 0 .595.644l.003-.001.014-.003.058-.014a9 9 0 0 1 1.036-.157c.663-.06 1.457-.054 2.11.164.175.058.45.3.57.65.107.308.087.67-.266 1.022l-.353.353.353.354c.043.043.105.141.154.315.048.167.075.37.075.581 0 .212-.027.414-.075.582-.05.174-.111.272-.154.315l-.353.353.353.354c.047.047.109.177.005.488a2.2 2.2 0 0 1-.505.805l-.353.353.353.354c.006.005.041.05.041.17a.9.9 0 0 1-.121.416c-.165.288-.503.56-1.066.56z"/>
          </svg>
          </span>
          <a>${post.likes}</a>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chat-dots" viewBox="0 0 16 16">
            <path d="M5 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0m4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0m3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2"/>
            <path d="m2.165 15.803.02-.004c1.83-.363 2.948-.842 3.468-1.105A9 9 0 0 0 8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6a10.4 10.4 0 0 1-.524 2.318l-.003.011a11 11 0 0 1-.244.637c-.079.186.074.394.273.362a22 22 0 0 0 .693-.125m.8-3.108a1 1 0 0 0-.287-.801C1.618 10.83 1 9.468 1 8c0-3.192 3.004-6 7-6s7 2.808 7 6-3.004 6-7 6a8 8 0 0 1-2.088-.272 1 1 0 0 0-.711.074c-.387.196-1.24.57-2.634.893a11 11 0 0 0 .398-2"/>
          </svg>
          </span>
          <a>${post.comments}</a>
        </small>
      </div>
      `;
      }
    }
  });

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
  }

  // 使用函數設置滾動
  setupScrolling(".Store_Container", ".btn_next", ".btn_pre", 8);
});
