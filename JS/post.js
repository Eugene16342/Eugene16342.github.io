document.addEventListener("DOMContentLoaded", function () {
  let container = document.getElementById("comment_container");
  let index = 0;
  let user_name = document.querySelector(".user_name").textContent;
  let user_account = document.querySelector(".user_account").textContent;
  let user_profile = document.querySelector(".user_profile").src;
  let like_svg = `
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-hand-thumbs-up-fill" viewBox="0 0 16 16">
                <path d="M6.956 1.745C7.021.81 7.908.087 8.864.325l.261.066c.463.116.874.456 1.012.965.22.816.533 2.511.062 4.51a10 10 0 0 1 .443-.051c.713-.065 1.669-.072 2.516.21.518.173.994.681 1.2 1.273.184.532.16 1.162-.234 1.733q.086.18.138.363c.077.27.113.567.113.856s-.036.586-.113.856c-.039.135-.09.273-.16.404.169.387.107.819-.003 1.148a3.2 3.2 0 0 1-.488.901c.054.152.076.312.076.465 0 .305-.089.625-.253.912C13.1 15.522 12.437 16 11.5 16H8c-.605 0-1.07-.081-1.466-.218a4.8 4.8 0 0 1-.97-.484l-.048-.03c-.504-.307-.999-.609-2.068-.722C2.682 14.464 2 13.846 2 13V9c0-.85.685-1.432 1.357-1.615.849-.232 1.574-.787 2.132-1.41.56-.627.914-1.28 1.039-1.639.199-.575.356-1.539.428-2.59z"/>
              </svg>
              `;
  let hate_svg = `
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-hand-thumbs-down-fill" viewBox="0 0 16 16">
                <path d="M6.956 14.534c.065.936.952 1.659 1.908 1.42l.261-.065a1.38 1.38 0 0 0 1.012-.965c.22-.816.533-2.512.062-4.51q.205.03.443.051c.713.065 1.669.071 2.516-.211.518-.173.994-.68 1.2-1.272a1.9 1.9 0 0 0-.234-1.734c.058-.118.103-.242.138-.362.077-.27.113-.568.113-.856 0-.29-.036-.586-.113-.857a2 2 0 0 0-.16-.403c.169-.387.107-.82-.003-1.149a3.2 3.2 0 0 0-.488-.9c.054-.153.076-.313.076-.465a1.86 1.86 0 0 0-.253-.912C13.1.757 12.437.28 11.5.28H8c-.605 0-1.07.08-1.466.217a4.8 4.8 0 0 0-.97.485l-.048.029c-.504.308-.999.61-2.068.723C2.682 1.815 2 2.434 2 3.279v4c0 .851.685 1.433 1.357 1.616.849.232 1.574.787 2.132 1.41.56.626.914 1.28 1.039 1.638.199.575.356 1.54.428 2.591"/>
              </svg>
  `;

  let emoji_btn_svg = `
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-emoji-smile" viewBox="0 0 16 16">
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                  <path d="M4.285 9.567a.5.5 0 0 1 .683.183A3.5 3.5 0 0 0 8 11.5a3.5 3.5 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.5 4.5 0 0 1 8 12.5a4.5 4.5 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683M7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5m4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5"/>
                </svg>
                `;

  let reply_btn_svg = `
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-90deg-up" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M4.854 1.146a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L4 2.707V12.5A2.5 2.5 0 0 0 6.5 15h8a.5.5 0 0 0 0-1h-8A1.5 1.5 0 0 1 5 12.5V2.707l3.146 3.147a.5.5 0 1 0 .708-.708z"/>
              </svg>
  `;

  let reply_like_btn_svg = `
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-hand-thumbs-up" viewBox="0 0 16 16">
                  <path d="M8.864.046C7.908-.193 7.02.53 6.956 1.466c-.072 1.051-.23 2.016-.428 2.59-.125.36-.479 1.013-1.04 1.639-.557.623-1.282 1.178-2.131 1.41C2.685 7.288 2 7.87 2 8.72v4.001c0 .845.682 1.464 1.448 1.545 1.07.114 1.564.415 2.068.723l.048.03c.272.165.578.348.97.484.397.136.861.217 1.466.217h3.5c.937 0 1.599-.477 1.934-1.064a1.86 1.86 0 0 0 .254-.912c0-.152-.023-.312-.077-.464.201-.263.38-.578.488-.901.11-.33.172-.762.004-1.149.069-.13.12-.269.159-.403.077-.27.113-.568.113-.857 0-.288-.036-.585-.113-.856a2 2 0 0 0-.138-.362 1.9 1.9 0 0 0 .234-1.734c-.206-.592-.682-1.1-1.2-1.272-.847-.282-1.803-.276-2.516-.211a10 10 0 0 0-.443.05 9.4 9.4 0 0 0-.062-4.509A1.38 1.38 0 0 0 9.125.111zM11.5 14.721H8c-.51 0-.863-.069-1.14-.164-.281-.097-.506-.228-.776-.393l-.04-.024c-.555-.339-1.198-.731-2.49-.868-.333-.036-.554-.29-.554-.55V8.72c0-.254.226-.543.62-.65 1.095-.3 1.977-.996 2.614-1.708.635-.71 1.064-1.475 1.238-1.978.243-.7.407-1.768.482-2.85.025-.362.36-.594.667-.518l.262.066c.16.04.258.143.288.255a8.34 8.34 0 0 1-.145 4.725.5.5 0 0 0 .595.644l.003-.001.014-.003.058-.014a9 9 0 0 1 1.036-.157c.663-.06 1.457-.054 2.11.164.175.058.45.3.57.65.107.308.087.67-.266 1.022l-.353.353.353.354c.043.043.105.141.154.315.048.167.075.37.075.581 0 .212-.027.414-.075.582-.05.174-.111.272-.154.315l-.353.353.353.354c.047.047.109.177.005.488a2.2 2.2 0 0 1-.505.805l-.353.353.353.354c.006.005.041.05.041.17a.9.9 0 0 1-.121.416c-.165.288-.503.56-1.066.56z"/>
                </svg>
  `;

  let reply_hate_btn_svg = `
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-hand-thumbs-down" viewBox="0 0 16 16">
                    <path d="M8.864 15.674c-.956.24-1.843-.484-1.908-1.42-.072-1.05-.23-2.015-.428-2.59-.125-.36-.479-1.012-1.04-1.638-.557-.624-1.282-1.179-2.131-1.41C2.685 8.432 2 7.85 2 7V3c0-.845.682-1.464 1.448-1.546 1.07-.113 1.564-.415 2.068-.723l.048-.029c.272-.166.578-.349.97-.484C6.931.08 7.395 0 8 0h3.5c.937 0 1.599.478 1.934 1.064.164.287.254.607.254.913 0 .152-.023.312-.077.464.201.262.38.577.488.9.11.33.172.762.004 1.15.069.13.12.268.159.403.077.27.113.567.113.856s-.036.586-.113.856c-.035.12-.08.244-.138.363.394.571.418 1.2.234 1.733-.206.592-.682 1.1-1.2 1.272-.847.283-1.803.276-2.516.211a10 10 0 0 1-.443-.05 9.36 9.36 0 0 1-.062 4.51c-.138.508-.55.848-1.012.964zM11.5 1H8c-.51 0-.863.068-1.14.163-.281.097-.506.229-.776.393l-.04.025c-.555.338-1.198.73-2.49.868-.333.035-.554.29-.554.55V7c0 .255.226.543.62.65 1.095.3 1.977.997 2.614 1.709.635.71 1.064 1.475 1.238 1.977.243.7.407 1.768.482 2.85.025.362.36.595.667.518l.262-.065c.16-.04.258-.144.288-.255a8.34 8.34 0 0 0-.145-4.726.5.5 0 0 1 .595-.643h.003l.014.004.058.013a9 9 0 0 0 1.036.157c.663.06 1.457.054 2.11-.163.175-.059.45-.301.57-.651.107-.308.087-.67-.266-1.021L12.793 7l.353-.354c.043-.042.105-.14.154-.315.048-.167.075-.37.075-.581s-.027-.414-.075-.581c-.05-.174-.111-.273-.154-.315l-.353-.354.353-.354c.047-.047.109-.176.005-.488a2.2 2.2 0 0 0-.505-.804l-.353-.354.353-.354c.006-.005.041-.05.041-.17a.9.9 0 0 0-.121-.415C12.4 1.272 12.063 1 11.5 1"/>
                  </svg>
  `;

  let post_title = "【範例】這是一篇範例文章";
  let post = [
    {
      user_name: "麻吉",
      user_account: "fakeUser001",
      user_profile: "./img/post/profile1.jpeg",
      content: `            <p>這是一篇示範內文</p>
              <span class="position-relative">
                <img  class="filter filter_NSFW" style="max-width: 100%; max-height: 100%; href="./post.html"  src="./img/article_section/Preview1.jpg">
                <span class="NSFW_label"></span>
              </span>
              <p>點擊圖片可以解除模糊化</p>`,
      time: "2024-5-10 18:03",
      like: 0,
      hate: 0,
      reply: [
        {
          reply_user_name: "比利小吉",
          reply_content: "這裡是一樓的第一則回覆欸",
          time: 7,
          reply_like: 0,
          reply_hate: 0,
        },
      ],
    },
    {
      user_name: "吳吉憲",
      user_account: "fakeUser002",
      user_profile: "./img/post/profile2.jpeg",
      content: `<p>這裡是2樓欸</p>`,
      time: "2024-5-10 18:07",
      like: 1,
      hate: 1,
      reply: [
        {
          reply_user_name: "比利小吉",
          reply_content: "這裡是二樓的第一則回覆欸",
          time: 2,
          reply_like: 0,
          reply_hate: 0,
        },
      ],
    },
    {
      user_name: "吉人天相",
      user_account: "fakeUser003",
      user_profile: "./img/post/profile3.jpeg",
      content: `<p>這裡是3樓欸</p>
                <p>難難於主魂迴與迢遞歸長安城，地白愛秋水遠非遊人，十無，雲山深深行為如何君不見，白日雙飛翼如何君不見蒼茫，落日一曲時無夕明。十陰君不川虛自身後事清無田後漁樵，自飛楊柳暗，死生，青黃月掩客世長江折不相巫峽，神何所木不盡之，流何處尋。何為當葉口夕陽虛隔秋水功秋一⋯葉顏秦上無嫌猜美人⋯上隨夢分，怨遙夜田情鳥南寒山駐馬⋯日色歸百東風，者臺驚風。三八月，相送連雪漢夕宮殿鎖十年，相逢一杯酒，當時玉，野在是不見夫婿。</P>
                <p>白雲遙時風吹大千歸來⋯夜信餘親飲一杯，萬戶漫柳色⋯紛聲去琵琶，不相以荊扉，日之日西與地青將軍洞愁之入。髮日不覺歸來聲遊，無古相疑孤城水白事，黃鶴不見淚痕平風雨，歲之春風不，於上青明日前後庭花，轉。開沙思昨夜人間死⋯月宮園思心夕陽日下，古不遙樹年十五。</p>
                <p>斷三日暮望君多知人生長江。</p>
                <p>夜雨白生長復殿，沙場氣畫盤綠非鳳凰我人收從，昏復怨遙夜王千門秋一，風雨竹黃出無人收萬⋯君不寒鼓開五更車一曲高陰去花落⋯聲生明月青山。</p>`,
      time: "2024-5-10 18:27",
      like: 0,
      hate: 0,
      reply: [{}],
    },
  ];

  //第一次渲染文章
  post.forEach((post) => {
    let comment_tmp = `
      <a href="" class="card poster" style="width: 12rem;">
        <div style="width: auto; height: 163px;" class="position-relative">
          <img  class="filter w-100 h-100 card-img-top" src="${
            post.user_profile
          }">
      </div>
          <div class="card-body text-center">
            <p class="card-title text-truncate">${post.user_name}</p>
            <p class="card-text">${post.user_account}</p>
          </div>
        </a>
        <div class="post_content">
          <h4 class="post_title">${post_title}<span class="badge">${
      index + 1
    }F</span></h4>
          <div class="d-flex justify-content-between">
            <span class="others_name"><a href="">${post.user_name}(${
      post.user_account
    })</a></span>
            <small>${post.time}</small>
          </div>
          <div class="post_main">
            ${post.content}
          </div>
          <div class="post_btn">
              <button class="post_btn_vote vote_up">${like_svg}</button> <a class="vote_up_amount">${
      post.like
    }</a>
              <button class="post_btn_vote vote_down">${hate_svg}</button> <a class="vote_down_amount">${
      post.hate
    }</a>
              <button class="last">三</button>
          </div>
          <div class="post_reply_bg">
          <div class="post_reply">
    `;
    if (Object.keys(post.reply[0]).length > 0) {
      post.reply.forEach((reply) => {
        let reply_tmp = `
              <div class="others_reply">
              <div class="others_name"> <a href="">${reply.reply_user_name}</a></div>
              <div class="others_text">
                ${reply.reply_content}              
                <div class="reply_feature">
                <span>${reply.time}分鐘前</span>
                <span class="reply_vote">
                <span class="reply_feature_btn reply_vote_up">
                  ${reply_like_btn_svg}
                </span>
                <a class="reply_like_amount">${reply.reply_like}</a>
                <span class="reply_feature_btn reply_vote_down">
                  ${reply_hate_btn_svg}
                </span>
                <a class="reply_hate_amount">${reply.reply_hate}</a>
              </span>
                <span class="reply_feature_btn">回覆</span>
                <span class="reply_feature_btn">檢舉</span>
              </div>
            </div>
      `;

        comment_tmp += reply_tmp;
      });
    } else {
      let reply_tmp = `
              <div>
              <div>
      `;

      comment_tmp += reply_tmp;
    }

    comment_tmp += `
    
          </div>           
          <div class="user_reply">
            <textarea placeholder="說些甚麼吧" class="text_area"></textarea>
            <div class="upload_btn">
              <a >
                ${emoji_btn_svg}
              </a>
              <a class="reply_submit_btn">
                ${reply_btn_svg}
              </a>
          </div>
          </div>
  `;

    index++;
    let div = document.createElement("div");
    div.className = "d-flex mb-3";
    div.innerHTML = comment_tmp;
    container.appendChild(div);

    let voteUpButton = div.querySelector(".vote_up");
    let voteDownButton = div.querySelector(".vote_down");

    let voteUpAmount = div.querySelector(".vote_up_amount");
    let voteDownAmount = div.querySelector(".vote_down_amount");

    voteUpButton.addEventListener("click", function () {
      // 如果 'vote_down' 按鈕處於活動狀態，則取消其活動狀態並減少其投票數量
      if (voteDownButton.classList.contains("vote_down_active")) {
        voteDownButton.classList.remove("vote_down_active");
        voteDownAmount.textContent = Number(voteDownAmount.textContent) - 1;
      }

      // 切換 'vote_up' 按鈕的活動狀態並更新其投票數量
      this.classList.toggle("vote_up_active");
      if (this.classList.contains("vote_up_active")) {
        voteUpAmount.textContent = Number(voteUpAmount.textContent) + 1;
      } else {
        voteUpAmount.textContent = Number(voteUpAmount.textContent) - 1;
      }
    });

    voteDownButton.addEventListener("click", function () {
      // 如果 'vote_up' 按鈕處於活動狀態，則取消其活動狀態並減少其投票數量
      if (voteUpButton.classList.contains("vote_up_active")) {
        voteUpButton.classList.remove("vote_up_active");
        voteUpAmount.textContent = Number(voteUpAmount.textContent) - 1;
      }

      // 切換 'vote_down' 按鈕的活動狀態並更新其投票數量
      this.classList.toggle("vote_down_active");
      if (this.classList.contains("vote_down_active")) {
        voteDownAmount.textContent = Number(voteDownAmount.textContent) + 1;
      } else {
        voteDownAmount.textContent = Number(voteDownAmount.textContent) - 1;
      }
    });

    //層內回覆生成邏輯
    let replySubmitButton = div.querySelector(".reply_submit_btn");
    let textArea = div.querySelector(".text_area");

    replySubmitButton.addEventListener("click", function () {
      if (textArea.value !== "") {
        let newReplyObj = {
          reply_user_name: user_name,
          reply_account: user_account,
          reply_content: textArea.value,
          time: 0,
          reply_like: 0,
          reply_hate: 0,
        };

        post.reply.push(newReplyObj);

        let newReply = `
         <div class="others_reply">
        <div class="others_name"> <a href="">${newReplyObj.reply_user_name}</a></div>
        <div class="others_text">
          ${newReplyObj.reply_content}              
          <div class="reply_feature">
            <span>${newReplyObj.time}分鐘前</span>
            <span class="reply_vote">
              <span class="reply_feature_btn reply_vote_up">
                ${reply_like_btn_svg}
              </span>
              <a class="reply_like_amount">${newReplyObj.reply_like}</a>
              <span class="reply_feature_btn reply_vote_down">
                ${reply_hate_btn_svg}
              </span>
              <a class="reply_hate_amount">${newReplyObj.reply_hate}</a>
            </span>
            <span class="reply_feature_btn">回覆</span>
            <span class="reply_feature_btn">檢舉</span>
          </div>
        </div>
          <div>
          <div>
        `;

        // 將 newReply 添加到容器中
        let userReply = div.querySelector(".user_reply");

        // 將 newReply 添加到 user_reply 元素之前
        userReply.insertAdjacentHTML("beforebegin", newReply);

        textArea.value = "";
      }
    });
  });

  //對所有層內讚/爛設監聽器
  function addEventListeners() {
    let postReplies = document.querySelectorAll(".container");
    postReplies.forEach((postReply) => {
      postReply.addEventListener("click", function (event) {
        let voteElement = event.target.closest(".reply_vote");
        if (voteElement) {
          let replyVoteUpButton = voteElement.querySelector(".reply_vote_up");
          let replyVoteDownButton =
            voteElement.querySelector(".reply_vote_down");
          let replyLikeAmount = voteElement.querySelector(".reply_like_amount");
          let replyHateAmount = voteElement.querySelector(".reply_hate_amount");

          if (event.target.matches(".reply_vote_up")) {
            if (replyVoteDownButton.classList.contains("active")) {
              replyVoteDownButton.classList.remove("active");
              replyHateAmount.textContent =
                Number(replyHateAmount.textContent) - 1;
            }

            replyVoteUpButton.classList.toggle("active");
            if (replyVoteUpButton.classList.contains("active")) {
              replyLikeAmount.textContent =
                Number(replyLikeAmount.textContent) + 1;
            } else {
              replyLikeAmount.textContent =
                Number(replyLikeAmount.textContent) - 1;
            }
          } else if (event.target.matches(".reply_vote_down")) {
            if (replyVoteUpButton.classList.contains("active")) {
              replyVoteUpButton.classList.remove("active");
              replyLikeAmount.textContent =
                Number(replyLikeAmount.textContent) - 1;
            }

            replyVoteDownButton.classList.toggle("active");
            if (replyVoteDownButton.classList.contains("active")) {
              replyHateAmount.textContent =
                Number(replyHateAmount.textContent) + 1;
            } else {
              replyHateAmount.textContent =
                Number(replyHateAmount.textContent) - 1;
            }
          }
        }
      });
    });
  }

  //回復文章

  document
    .getElementById("user_comment_btn_submit")
    .addEventListener("click", function () {
      let content = document.getElementById("user_comment").value;
      if (content !== "") {
        // 獲取需要的元素
        let now = new Date();
        let year = now.getFullYear();
        let month = (now.getMonth() + 1).toString().padStart(2, "0"); // getMonth() 從 0 開始，所以需要加 1
        let day = now.getDate().toString().padStart(2, "0");
        let hour = now.getHours().toString().padStart(2, "0");
        let minute = now.getMinutes().toString().padStart(2, "0");
        let now_time =
          year + "-" + month + "-" + day + " " + hour + ":" + minute;

        // 創建新的物件
        let newPost = {
          user_name: user_name,
          user_account: user_account,
          user_profile: user_profile,
          content: content,
          time: now_time,
          like: 0,
          hate: 0,
          reply: [],
        };

        // 將新的物件添加到 post 陣列中

        let newPostHtml = `
  <a href="" class="card poster" style="width: 12rem;">
    <div style="width: auto; height: 163px;" class="position-relative">
      <img  class="filter w-100 h-100 card-img-top" src="${
        newPost.user_profile
      }">
  </div>
      <div class="card-body text-center">
        <p class="card-title text-truncate">${newPost.user_name}</p>
        <p class="card-text">${newPost.user_account}</p>
      </div>
    </a>
    <div class="post_content">
      <h4 class="post_title">${post_title}<span class="badge">${
          index + 1
        }F</span></h4>
      <div class="d-flex justify-content-between">
        <span class="others_name"><a href="">${newPost.user_name}(${
          newPost.user_account
        })</a></span>
        <small>${newPost.time}</small>
      </div>
      <div class="post_main">
        ${newPost.content}
      </div>
      <div class="post_btn">
          <button class="post_btn_vote vote_up">${like_svg}</button> <a class="vote_up_amount">${
          newPost.like
        }</a>
          <button class="post_btn_vote vote_down">${hate_svg}</button> <a class="vote_down_amount">${
          newPost.hate
        }</a>
          <button class="last">三</button>
      </div>
      <div class="post_reply_bg">
      <div class="post_reply">     
      <div>
      <div> 
      </div>
      <div class="user_reply">
        <textarea placeholder="說些甚麼吧" class="text_area"></textarea>
        <div class="upload_btn">
          <a >
            ${emoji_btn_svg}
          </a>
          <a class="reply_submit_btn">
            ${reply_btn_svg}
          </a>
      </div>
      </div>
  `;
        index++;
        let div = document.createElement("div");
        div.className = "d-flex mb-3";
        div.innerHTML = newPostHtml;
        container.appendChild(div);

        let voteUpButton = div.querySelector(".vote_up");
        let voteDownButton = div.querySelector(".vote_down");

        let voteUpAmount = div.querySelector(".vote_up_amount");
        let voteDownAmount = div.querySelector(".vote_down_amount");

        voteUpButton.addEventListener("click", function () {
          // 如果 'vote_down' 按鈕處於活動狀態，則取消其活動狀態並減少其投票數量
          if (voteDownButton.classList.contains("vote_down_active")) {
            voteDownButton.classList.remove("vote_down_active");
            voteDownAmount.textContent = Number(voteDownAmount.textContent) - 1;
          }

          // 切換 'vote_up' 按鈕的活動狀態並更新其投票數量
          this.classList.toggle("vote_up_active");
          if (this.classList.contains("vote_up_active")) {
            voteUpAmount.textContent = Number(voteUpAmount.textContent) + 1;
          } else {
            voteUpAmount.textContent = Number(voteUpAmount.textContent) - 1;
          }
        });

        voteDownButton.addEventListener("click", function () {
          // 如果 'vote_up' 按鈕處於活動狀態，則取消其活動狀態並減少其投票數量
          if (voteUpButton.classList.contains("vote_up_active")) {
            voteUpButton.classList.remove("vote_up_active");
            voteUpAmount.textContent = Number(voteUpAmount.textContent) - 1;
          }

          // 切換 'vote_down' 按鈕的活動狀態並更新其投票數量
          this.classList.toggle("vote_down_active");
          if (this.classList.contains("vote_down_active")) {
            voteDownAmount.textContent = Number(voteDownAmount.textContent) + 1;
          } else {
            voteDownAmount.textContent = Number(voteDownAmount.textContent) - 1;
          }
        });

        // 清空輸入框
        document.getElementById("user_comment").value = "";

        let replySubmitButton = div.querySelector(".reply_submit_btn");
        let textArea = div.querySelector(".text_area");

        replySubmitButton.addEventListener("click", function () {
          if (textArea.value !== "") {
            let newReplyObj = {
              reply_user_name: user_name,
              reply_account: user_account,
              reply_content: textArea.value,
              time: 0,
              reply_like: 0,
              reply_hate: 0,
            };

            newPost.reply.push(newReplyObj);

            let newReply = `
       <div class="others_reply">
      <div class="others_name"> <a href="">${
        newReplyObj.reply_user_name
      }</a></div>
      <div class="others_text">
        ${newReplyObj.reply_content}              
        <div class="reply_feature">
          <span>b${1}</span>
          <span>${newReplyObj.time}分鐘前</span>
          <span class="reply_vote">
            <span class="reply_feature_btn reply_vote_up">
              ${reply_like_btn_svg}
            </span>
            <a class="reply_like_amount">${newReplyObj.reply_like}</a>
            <span class="reply_feature_btn reply_vote_down">
              ${reply_hate_btn_svg}
            </span>
            <a class="reply_hate_amount">${newReplyObj.reply_hate}</a>
          </span>
          <span class="reply_feature_btn">回覆</span>
          <span class="reply_feature_btn">檢舉</span>
        </div>
      </div>
    </div>
      `;

            // 將 newReply 添加到容器中
            let userReply = div.querySelector(".user_reply");

            // 將 newReply 添加到 user_reply 元素之前
            userReply.insertAdjacentHTML("beforebegin", newReply);

            textArea.value = "";
          }
        });
      }
    });

  //解除圖片NSFW濾鏡
  function removeNSFWfliter() {
    let NSFWlabels = document.querySelectorAll(".NSFW_label");

    NSFWlabels.forEach((label) => {
      label.addEventListener("click", function () {
        // 移除 'NSFW_label' 類名
        this.classList.remove("NSFW_label");

        // 找到父元素中的 'filter_NSFW' 元素並移除其類名
        let filter = this.parentNode.querySelector(".filter_NSFW");
        if (filter) {
          filter.classList.remove("filter_NSFW");
        }
      });
    });
  }

  addEventListeners();
  removeNSFWfliter();
});
