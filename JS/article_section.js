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

  let red_post = [
    {
      title: "【公告】最新版規",
      img: "./img/article_section/Preview1.jpg",
      text: "有時異常，負責同學型號，猶豫對象，售價優點承受期待爸爸，不過事件北方等人，你的浪漫第二次浪費依據浙江行政不喜歡那是行政回事為止，夫人立場有了我就軟體一大擔心形勢大多什麼事結束打了，孩子人士其中寶貝有些供應多承受這樣保。",
      click: "2/35602",
      time: "1-03",
    },
    {
      title: "【廣告】民明書房全館半價",
      img: "./img/article_section/Preview4.png",
      text: "一路媒體喜愛地理註明一本，條例魔獸媽媽大約小子美元攝影第二次股東有時確保有意引擎，見過房產學會想想差不多證據紛紛，隨後長大步驟方便快車不要五金對外會計複製，風景消息兩個此刻記得發佈日期魅力演出參加緊緊改進，寫真產品淡淡是他一隻特色確保網通醫院制定法國高校。",
      click: "4/2753",
      time: "5-01",
    },
  ];

  let post = [
    {
      title: "【閒聊】這是一篇遮蔽圖範例",
      img: "./img/article_section/Preview2.png",
      text: "圖片是把吉娃娃P在恰吉臉上，如果你想知道的話",
      click: "2/356",
      time: "12分前",
    },
    {
      title: "【求助】本能寺這邊失火了，我卻出不去，誰能幫打119一下？",
      img: "./img/article_section/Preview5.jpg",
      text: "試題任意電信，傳奇協會開口反應範圍內但他花園醫生有時失望圖象而是強大，印刷一大，話題我一保健房地產豪華健康藝術也不，一天功夫加快土地成就內部因為接口期限，動畫分為各種你自己一定，手段孤獨主流，部門宣。",
      click: "12/1235",
      time: "32分前",
    },
    {
      title: "【閒聊】我認為空手道是世上最強的武術 不服來辯",
      img: "./img/article_section/Preview6.jpg",
      text: "試題任意電信，傳奇協會開口反應範圍內但他花園醫生有時失望圖象而是強大，印刷一大，話題我一保健房地產豪華健康藝術也不，一天功夫加快土地成就內部因為接口期限，動畫分為各種你自己一定，手段孤獨主流，部門宣。",
      click: "12/3156",
      time: "4分前",
    },
    {
      title: "【閒聊】大膽推測，花木蘭的長相應該像館長",
      img: "./img/article_section/Preview3.jpg",
      text: "試題任意電信，傳奇協會開口反應範圍內但他花園醫生有時失望圖象而是強大，印刷一大，話題我一保健房地產豪華健康藝術也不，一天功夫加快土地成就內部因為接口期限，動畫分為各種你自己一定，手段孤獨主流，部門宣。",
      click: "9/846",
      time: "20分前",
    },
    {
      title: "【閒聊】這是一篇遮蔽圖範例5",
      img: "./img/article_section/Preview2.png",
      text: "圖片是把吉娃娃P在恰吉臉上，如果你想知道的話",
      click: "2/356",
      time: "12分前",
    },
    {
      title: "【求助】本能寺這邊失火了，我卻出不去，誰能幫打119一下？6",
      img: "./img/article_section/Preview5.jpg",
      text: "試題任意電信，傳奇協會開口反應範圍內但他花園醫生有時失望圖象而是強大，印刷一大，話題我一保健房地產豪華健康藝術也不，一天功夫加快土地成就內部因為接口期限，動畫分為各種你自己一定，手段孤獨主流，部門宣。",
      click: "12/1235",
      time: "32分前",
    },
    {
      title: "【閒聊】我認為空手道是世上最強的武術 不服來辯7",
      img: "./img/article_section/Preview6.jpg",
      text: "試題任意電信，傳奇協會開口反應範圍內但他花園醫生有時失望圖象而是強大，印刷一大，話題我一保健房地產豪華健康藝術也不，一天功夫加快土地成就內部因為接口期限，動畫分為各種你自己一定，手段孤獨主流，部門宣。",
      click: "12/3156",
      time: "4分前",
    },
    {
      title: "【閒聊】大膽推測，花木蘭的長相應該像館長8",
      img: "./img/article_section/Preview3.jpg",
      text: "試題任意電信，傳奇協會開口反應範圍內但他花園醫生有時失望圖象而是強大，印刷一大，話題我一保健房地產豪華健康藝術也不，一天功夫加快土地成就內部因為接口期限，動畫分為各種你自己一定，手段孤獨主流，部門宣。",
      click: "9/846",
      time: "20分前",
    },
    {
      title: "【閒聊】這是一篇遮蔽圖範例9",
      img: "./img/article_section/Preview2.png",
      text: "圖片是把吉娃娃P在恰吉臉上，如果你想知道的話",
      click: "2/356",
      time: "12分前",
    },
    {
      title: "【求助】本能寺這邊失火了，我卻出不去，誰能幫打119一下？10",
      img: "./img/article_section/Preview5.jpg",
      text: "試題任意電信，傳奇協會開口反應範圍內但他花園醫生有時失望圖象而是強大，印刷一大，話題我一保健房地產豪華健康藝術也不，一天功夫加快土地成就內部因為接口期限，動畫分為各種你自己一定，手段孤獨主流，部門宣。",
      click: "12/1235",
      time: "32分前",
    },
    {
      title: "【閒聊】我認為空手道是世上最強的武術 不服來辯11",
      img: "./img/article_section/Preview6.jpg",
      text: "試題任意電信，傳奇協會開口反應範圍內但他花園醫生有時失望圖象而是強大，印刷一大，話題我一保健房地產豪華健康藝術也不，一天功夫加快土地成就內部因為接口期限，動畫分為各種你自己一定，手段孤獨主流，部門宣。",
      click: "12/3156",
      time: "4分前",
    },
    {
      title: "【閒聊】大膽推測，花木蘭的長相應該像館長12",
      img: "./img/article_section/Preview3.jpg",
      text: "試題任意電信，傳奇協會開口反應範圍內但他花園醫生有時失望圖象而是強大，印刷一大，話題我一保健房地產豪華健康藝術也不，一天功夫加快土地成就內部因為接口期限，動畫分為各種你自己一定，手段孤獨主流，部門宣。",
      click: "9/846",
      time: "20分前",
    },
    {
      title: "【閒聊】這是一篇遮蔽圖範例13",
      img: "./img/article_section/Preview2.png",
      text: "圖片是把吉娃娃P在恰吉臉上，如果你想知道的話",
      click: "2/356",
      time: "12分前",
    },
    {
      title: "【求助】本能寺這邊失火了，我卻出不去，誰能幫打119一下？14",
      img: "./img/article_section/Preview5.jpg",
      text: "試題任意電信，傳奇協會開口反應範圍內但他花園醫生有時失望圖象而是強大，印刷一大，話題我一保健房地產豪華健康藝術也不，一天功夫加快土地成就內部因為接口期限，動畫分為各種你自己一定，手段孤獨主流，部門宣。",
      click: "12/1235",
      time: "32分前",
    },
    {
      title: "【閒聊】我認為空手道是世上最強的武術 不服來辯15",
      img: "./img/article_section/Preview6.jpg",
      text: "試題任意電信，傳奇協會開口反應範圍內但他花園醫生有時失望圖象而是強大，印刷一大，話題我一保健房地產豪華健康藝術也不，一天功夫加快土地成就內部因為接口期限，動畫分為各種你自己一定，手段孤獨主流，部門宣。",
      click: "12/3156",
      time: "4分前",
    },
    {
      title: "【閒聊】大膽推測，花木蘭的長相應該像館長16",
      img: "./img/article_section/Preview3.jpg",
      text: "試題任意電信，傳奇協會開口反應範圍內但他花園醫生有時失望圖象而是強大，印刷一大，話題我一保健房地產豪華健康藝術也不，一天功夫加快土地成就內部因為接口期限，動畫分為各種你自己一定，手段孤獨主流，部門宣。",
      click: "9/846",
      time: "20分前",
    },
  ];

  let container = document.getElementById("acricle_container");

  red_post.forEach((post) => {
    let announcement_post = document.createElement("div");
    announcement_post.innerHTML = `
        <a href="./post.html" class="article_title article_announcement">
            <div style="width: 200px; height: 100px;" class="article_title_img position-relative">
                <img class="filter w-100 h-100" href="./post.html" src="${post.img}">
            </div>
            <div class="article_title_title">
                <h5>${post.title}</h5>
                <p>${post.text}</p>
            </div>
            <div class="article_title_lasted_update text ">
                <div>${post.click}</div> 
                <div>${post.time}</div>
            </div>
        </a>
    `;
    // 使用 append 方法將新的 div 添加到 container 中
    container.append(announcement_post);
  });

  let currentIndex = 0;
  const increment = 5;

  function renderPosts() {
    for (
      let i = 0;
      i < increment && currentIndex < post.length;
      i++, currentIndex++
    ) {
      let normal_Post = document.createElement("div");
      normal_Post.innerHTML = `
              <a href="./post.html" class="article_title">
                  <div style="width: 200px; height: 100px;" class="article_title_img position-relative">
                      <span class="position-relative ">
                          <img class=" w-100 h-100 filter" href="./post.html" src="${post[currentIndex].img}">
                      </span>
                  </div>
                  <div class="article_title_title">
                      <h5>${post[currentIndex].title}</h5>
                      <p>${post[currentIndex].text}</p>
                  </div>
                  <div class="article_title_lasted_update">
                      <div>${post[currentIndex].click}</div> 
                      <div>${post[currentIndex].time}</div>
                  </div>
              </a>
          `;
      container.append(normal_Post);
    }
  }

  // 初始渲染
  renderPosts();

  // 監聽滾動事件
  window.addEventListener("scroll", () => {
    if (
      window.innerHeight + window.scrollY >=
      document.body.offsetHeight * 0.8
    ) {
      renderPosts();
    }
  });
});
