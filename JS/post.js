document.addEventListener("DOMContentLoaded", function () {
  function addFilterListeners() {
    document
      .querySelector(".NSFW_label")
      .addEventListener("click", function () {
        this.classList.remove("NSFW_label");
        let filterElement = this.parentElement.querySelector(".filter_NSFW");
        filterElement.classList.remove("filter_NSFW");
        filterElement.classList.add("filter");
      });
  }

  function addVoteListeners() {
    document.querySelectorAll(".post_btn").forEach(function (postBtn) {
      let voteUp = false;
      let voteDown = false;
      if (!postBtn.querySelector(".vote_up").hasClickListener) {
        // 標記按鈕已經有事件監聽器
        postBtn.querySelector(".vote_up").hasClickListener = true;
        postBtn
          .querySelector(".vote_up")
          .addEventListener("click", function () {
            let voteUpCount = parseInt(this.nextElementSibling.innerText);
            let voteDownCount = parseInt(
              this.parentElement.querySelector(".vote_down + a").innerText
            );

            if (voteDown) {
              voteDown = false;
              this.parentElement.querySelector(".vote_down + a").innerText =
                voteDownCount - 1;
            }

            voteUp = !voteUp;
            this.nextElementSibling.innerText = voteUp
              ? voteUpCount + 1
              : voteUpCount - 1;
            if (voteUp) {
              this.classList.add("vote_up_active");
              postBtn
                .querySelector(".vote_down")
                .classList.remove("vote_down_active");
            } else {
              this.classList.remove("vote_up_active");
            }
          });
      }

      if (!postBtn.querySelector(".vote_down").hasClickListener) {
        // 標記按鈕已經有事件監聽器
        postBtn.querySelector(".vote_down").hasClickListener = true;
        postBtn
          .querySelector(".vote_down")
          .addEventListener("click", function () {
            let voteUpCount = parseInt(
              this.parentElement.querySelector(".vote_up + a").innerText
            );
            let voteDownCount = parseInt(this.nextElementSibling.innerText);

            if (voteUp) {
              voteUp = false;
              this.parentElement.querySelector(".vote_up + a").innerText =
                voteUpCount - 1;
            }

            voteDown = !voteDown;
            this.nextElementSibling.innerText = voteDown
              ? voteDownCount + 1
              : voteDownCount - 1;
            if (voteDown) {
              this.classList.add("vote_down_active");
              postBtn
                .querySelector(".vote_up")
                .classList.remove("vote_up_active");
            } else {
              this.classList.remove("vote_down_active");
            }
          });
      }
    });
  }

  let reply_list = [
    [
      {
        name: "比利小吉",
        text: "我是一樓第一條回復",
        time: 30,
        vote_up_count: 0,
        vote_down_count: 0,
      },
      {
        name: "吉人天相",
        text: "我是一樓第二條回復",
        time: 16,
        vote_up_count: 0,
        vote_down_count: 0,
      },
    ],
    [
      {
        name: "吉星高照",
        text: "這裡是二樓的回覆",
        time: 7,
        vote_up_count: 0,
        vote_down_count: 0,
      },
    ],
  ];

  function renderReplyList() {
    const reply_container = document.getElementsByClassName("post_reply");

    for (let i = 0; i < reply_list.length; i++) {
      const currentPostReply = reply_container[i];
      const currentReply = reply_list[i];

      currentPostReply.innerHTML = "";

      for (const reply of currentReply) {
        const replyName = reply.name;
        const replyText = reply.text;
        const time = reply.time;
        const vote_up_count = reply.vote_up_count;
        const vote_down_count = reply.vote_down_count;
        const index = currentReply.indexOf(reply);

        currentPostReply.innerHTML += `              
          <div class="others_reply">
          <div class="others_name"> <a href="">${replyName}</a></div>
          <div class="others_text">
            ${replyText}
          <div class="reply_feature">
            <span>b${index + 1}</span>
            <span>${time}分鐘前</span>
            <span class="reply_vote">
            <span class="reply_feature_btn reply_vote_up"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-hand-thumbs-up" viewBox="0 0 16 16">
              <path d="M8.864.046C7.908-.193 7.02.53 6.956 1.466c-.072 1.051-.23 2.016-.428 2.59-.125.36-.479 1.013-1.04 1.639-.557.623-1.282 1.178-2.131 1.41C2.685 7.288 2 7.87 2 8.72v4.001c0 .845.682 1.464 1.448 1.545 1.07.114 1.564.415 2.068.723l.048.03c.272.165.578.348.97.484.397.136.861.217 1.466.217h3.5c.937 0 1.599-.477 1.934-1.064a1.86 1.86 0 0 0 .254-.912c0-.152-.023-.312-.077-.464.201-.263.38-.578.488-.901.11-.33.172-.762.004-1.149.069-.13.12-.269.159-.403.077-.27.113-.568.113-.857 0-.288-.036-.585-.113-.856a2 2 0 0 0-.138-.362 1.9 1.9 0 0 0 .234-1.734c-.206-.592-.682-1.1-1.2-1.272-.847-.282-1.803-.276-2.516-.211a10 10 0 0 0-.443.05 9.4 9.4 0 0 0-.062-4.509A1.38 1.38 0 0 0 9.125.111zM11.5 14.721H8c-.51 0-.863-.069-1.14-.164-.281-.097-.506-.228-.776-.393l-.04-.024c-.555-.339-1.198-.731-2.49-.868-.333-.036-.554-.29-.554-.55V8.72c0-.254.226-.543.62-.65 1.095-.3 1.977-.996 2.614-1.708.635-.71 1.064-1.475 1.238-1.978.243-.7.407-1.768.482-2.85.025-.362.36-.594.667-.518l.262.066c.16.04.258.143.288.255a8.34 8.34 0 0 1-.145 4.725.5.5 0 0 0 .595.644l.003-.001.014-.003.058-.014a9 9 0 0 1 1.036-.157c.663-.06 1.457-.054 2.11.164.175.058.45.3.57.65.107.308.087.67-.266 1.022l-.353.353.353.354c.043.043.105.141.154.315.048.167.075.37.075.581 0 .212-.027.414-.075.582-.05.174-.111.272-.154.315l-.353.353.353.354c.047.047.109.177.005.488a2.2 2.2 0 0 1-.505.805l-.353.353.353.354c.006.005.041.05.041.17a.9.9 0 0 1-.121.416c-.165.288-.503.56-1.066.56z"/>
            </svg>
            </span>
            <a>${vote_up_count}</a>
            <span class="reply_feature_btn reply_vote_down">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-hand-thumbs-down" viewBox="0 0 16 16">
            <path d="M8.864 15.674c-.956.24-1.843-.484-1.908-1.42-.072-1.05-.23-2.015-.428-2.59-.125-.36-.479-1.012-1.04-1.638-.557-.624-1.282-1.179-2.131-1.41C2.685 8.432 2 7.85 2 7V3c0-.845.682-1.464 1.448-1.546 1.07-.113 1.564-.415 2.068-.723l.048-.029c.272-.166.578-.349.97-.484C6.931.08 7.395 0 8 0h3.5c.937 0 1.599.478 1.934 1.064.164.287.254.607.254.913 0 .152-.023.312-.077.464.201.262.38.577.488.9.11.33.172.762.004 1.15.069.13.12.268.159.403.077.27.113.567.113.856s-.036.586-.113.856c-.035.12-.08.244-.138.363.394.571.418 1.2.234 1.733-.206.592-.682 1.1-1.2 1.272-.847.283-1.803.276-2.516.211a10 10 0 0 1-.443-.05 9.36 9.36 0 0 1-.062 4.51c-.138.508-.55.848-1.012.964zM11.5 1H8c-.51 0-.863.068-1.14.163-.281.097-.506.229-.776.393l-.04.025c-.555.338-1.198.73-2.49.868-.333.035-.554.29-.554.55V7c0 .255.226.543.62.65 1.095.3 1.977.997 2.614 1.709.635.71 1.064 1.475 1.238 1.977.243.7.407 1.768.482 2.85.025.362.36.595.667.518l.262-.065c.16-.04.258-.144.288-.255a8.34 8.34 0 0 0-.145-4.726.5.5 0 0 1 .595-.643h.003l.014.004.058.013a9 9 0 0 0 1.036.157c.663.06 1.457.054 2.11-.163.175-.059.45-.301.57-.651.107-.308.087-.67-.266-1.021L12.793 7l.353-.354c.043-.042.105-.14.154-.315.048-.167.075-.37.075-.581s-.027-.414-.075-.581c-.05-.174-.111-.273-.154-.315l-.353-.354.353-.354c.047-.047.109-.176.005-.488a2.2 2.2 0 0 0-.505-.804l-.353-.354.353-.354c.006-.005.041-.05.041-.17a.9.9 0 0 0-.121-.415C12.4 1.272 12.063 1 11.5 1"/>
          </svg>
            </span>
            <a>${vote_down_count}</a>
          </span  >
            <span class="reply_feature_btn">回覆</span>
            <span class="reply_feature_btn">檢舉</span>
          </div>
        </div>
        </div>
        `;
      }
    }
    addReplyVoteListener();
  }

  function addReplySubmitBtnListeners() {
    let buttons = document.querySelectorAll(".reply_submit_btn");
    buttons.forEach((button, index) => {
      // 檢查按鈕是否已經有事件監聽器
      if (!button.hasListener) {
        button.addEventListener("click", function () {
          let text = document.querySelectorAll(".text_area")[index].value;
          let newReply = {
            name: "使用者",
            text: text,
            time: 0,
            vote_up_count: 0,
            vote_down_count: 0,
          };

          reply_list[index].push(newReply);

          document.querySelectorAll(".text_area")[index].value = "";

          renderNewReply(newReply, index);
        });

        button.hasListener = true;
      }
    });
  }

  function renderNewReply(newReply, index) {
    const currentPostReply =
      document.getElementsByClassName("post_reply")[index];
    const replyName = newReply.name;
    const replyText = newReply.text;
    const time = newReply.time;
    const vote_up_count = newReply.vote_up_count;
    const vote_down_count = newReply.vote_down_count;

    currentPostReply.innerHTML += `              
      <div class="others_reply">
      <div class="others_name"> <a href="">${replyName}</a></div>
      <div class="others_text">
        ${replyText}
      <div class="reply_feature">
        <span>${"b" + reply_list[index].length}</span>
        <span>${time}分鐘前</span>
        <span class="reply_vote">
        <span class="reply_feature_btn reply_vote_up"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-hand-thumbs-up" viewBox="0 0 16 16">
          <path d="M8.864.046C7.908-.193 7.02.53 6.956 1.466c-.072 1.051-.23 2.016-.428 2.59-.125.36-.479 1.013-1.04 1.639-.557.623-1.282 1.178-2.131 1.41C2.685 7.288 2 7.87 2 8.72v4.001c0 .845.682 1.464 1.448 1.545 1.07.114 1.564.415 2.068.723l.048.03c.272.165.578.348.97.484.397.136.861.217 1.466.217h3.5c.937 0 1.599-.477 1.934-1.064a1.86 1.86 0 0 0 .254-.912c0-.152-.023-.312-.077-.464.201-.263.38-.578.488-.901.11-.33.172-.762.004-1.149.069-.13.12-.269.159-.403.077-.27.113-.568.113-.857 0-.288-.036-.585-.113-.856a2 2 0 0 0-.138-.362 1.9 1.9 0 0 0 .234-1.734c-.206-.592-.682-1.1-1.2-1.272-.847-.282-1.803-.276-2.516-.211a10 10 0 0 0-.443.05 9.4 9.4 0 0 0-.062-4.509A1.38 1.38 0 0 0 9.125.111zM11.5 14.721H8c-.51 0-.863-.069-1.14-.164-.281-.097-.506-.228-.776-.393l-.04-.024c-.555-.339-1.198-.731-2.49-.868-.333-.036-.554-.29-.554-.55V8.72c0-.254.226-.543.62-.65 1.095-.3 1.977-.996 2.614-1.708.635-.71 1.064-1.475 1.238-1.978.243-.7.407-1.768.482-2.85.025-.362.36-.594.667-.518l.262.066c.16.04.258.143.288.255a8.34 8.34 0 0 1-.145 4.725.5.5 0 0 0 .595.644l.003-.001.014-.003.058-.014a9 9 0 0 1 1.036-.157c.663-.06 1.457-.054 2.11.164.175.058.45.3.57.65.107.308.087.67-.266 1.022l-.353.353.353.354c.043.043.105.141.154.315.048.167.075.37.075.581 0 .212-.027.414-.075.582-.05.174-.111.272-.154.315l-.353.353.353.354c.006.005.041.05.041.17a.9.9 0 0 1-.121.416c-.165.288-.503.56-1.066.56z"/>
        </svg>
        </span>
        <a>${vote_up_count}</a>
        <span class="reply_feature_btn reply_vote_down">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-hand-thumbs-down" viewBox="0 0 16 16">
        <path d="M8.864 15.674c-.956.24-1.843-.484-1.908-1.42-.072-1.05-.23-2.015-.428-2.59-.125-.36-.479-1.012-1.04-1.638-.557-.624-1.282-1.179-2.131-1.41C2.685 8.432 2 7.85 2 7V3c0-.845.682-1.464 1.448-1.546 1.07-.113 1.564-.415 2.068-.723l.048-.029c.272-.166.578-.349.97-.484C6.931.08 7.395 0 8 0h3.5c.937 0 1.599.478 1.934 1.064.164.287.254.607.254.913 0 .152-.023.312-.077.464.201.262.38.577.488.9.11.33.172.762.004 1.15.069.13.12.268.159.403.077.27.113.567.113.856s-.036.586-.113.856c-.035.12-.08.244-.138.363.394.571.418 1.2.234 1.733-.206.592-.682 1.1-1.2 1.272-.847.283-1.803.276-2.516.211a10 10 0 0 1-.443-.05 9.36 9.36 0 0 1-.062 4.51c-.138.508-.55.848-1.012.964zM11.5 1H8c-.51 0-.863.068-1.14.163-.281.097-.506.229-.776.393l-.04.025c-.555.338-1.198.73-2.49.868-.333.035-.554.29-.554.55V7c0 .255.226.543.62.65 1.095.3 1.977.997 2.614 1.709.635.71 1.064 1.475 1.238 1.977.243.7.407 1.768.482 2.85.025.362.36.595.667.518l.262-.065c.16-.04.258-.144.288-.255a8.34 8.34 0 0 0-.145-4.726.5.5 0 0 1 .595-.643h.003l.014.004.058.013a9 9 0 0 0 1.036.157c.663.06 1.457.054 2.11-.163.175-.059.45-.301.57-.651.107-.308.087-.67-.266-1.021L12.793 7l.353-.354c.043-.042.105-.14.154-.315.048-.167.075-.37.075-.581s-.027-.414-.075-.581c-.05-.174-.111-.273-.154-.315l-.353-.354.353-.354c.047-.047.109-.176.005-.488a2.2 2.2 0 0 0-.505-.804l-.353-.354.353-.354c.006-.005.041-.05.041-.17a.9.9 0 0 0-.121-.415C12.4 1.272 12.063 1 11.5 1"/>
      </svg>
          </span>
          <a>${vote_down_count}</a>
        </span  >
          <span class="reply_feature_btn">回覆</span>
          <span class="reply_feature_btn">檢舉</span>
        </div>
      </div>
      </div>
      `;
    addReplyVoteListener();
  }

  function addReplyVoteListener() {
    document.querySelectorAll(".reply_vote").forEach(function (postBtn) {
      let reply_voteUp = false;
      let reply_voteDown = false;
      // 檢查按鈕是否已經有事件監聽器
      if (!postBtn.querySelector(".reply_vote_up").hasClickListener) {
        postBtn
          .querySelector(".reply_vote_up")
          .addEventListener("click", function () {
            let voteUpCount = parseInt(this.nextElementSibling.innerText);
            let voteDownCount = parseInt(
              this.parentElement.querySelector(".reply_vote_down + a").innerText
            );

            if (reply_voteDown) {
              reply_voteDown = false;
              this.parentElement.querySelector(
                ".reply_vote_down + a"
              ).innerText = voteDownCount - 1;
            }

            reply_voteUp = !reply_voteUp;
            this.nextElementSibling.innerText = reply_voteUp
              ? voteUpCount + 1
              : voteUpCount - 1;
            if (reply_voteUp) {
              this.classList.add("active");
              postBtn
                .querySelector(".reply_vote_down")
                .classList.remove("active");
            } else {
              this.classList.remove("active");
            }
          });

        // 標記按鈕已經有事件監聽器
        postBtn.querySelector(".reply_vote_up").hasClickListener = true;
      }

      if (!postBtn.querySelector(".reply_vote_down").hasClickListener) {
        postBtn
          .querySelector(".reply_vote_down")
          .addEventListener("click", function () {
            let voteUpCount = parseInt(
              this.parentElement.querySelector(".reply_vote_up + a").innerText
            );
            let voteDownCount = parseInt(this.nextElementSibling.innerText);

            if (reply_voteUp) {
              reply_voteUp = false;
              this.parentElement.querySelector(".reply_vote_up + a").innerText =
                voteUpCount - 1;
            }

            reply_voteDown = !reply_voteDown;
            this.nextElementSibling.innerText = reply_voteDown
              ? voteDownCount + 1
              : voteDownCount - 1;
            if (reply_voteDown) {
              this.classList.add("active");
              postBtn
                .querySelector(".reply_vote_up")
                .classList.remove("active");
            } else {
              this.classList.remove("active");
            }
          });

        // 標記按鈕已經有事件監聽器
        postBtn.querySelector(".reply_vote_down").hasClickListener = true;
      }
    });
  }

  let clickCount = 0;
  document
    .getElementById("user_comment_btn_submit")
    .addEventListener("click", function () {
      let now = new Date();
      let year = now.getFullYear();
      let month = now.getMonth() + 1;
      let date = now.getDate();
      let hours = now.getHours();
      let minutes = now.getMinutes();
      let userComment = document.querySelector("#user_comment").value;
      let container = document.querySelector("#comment_container");
      container.innerHTML += `<div class="d-flex mb-3">
  <a href="" class="card poster" style="width: 12rem;">
    <div style="width: auto; height: 163px;" class="position-relative">
      <img  class="filter w-100 h-100 card-img-top" src="${"./img/article_section/Preview1.jpg"}">
  </div>
      <div class="card-body text-center">
        <p class="card-title text-truncate">${"使用者"}</p>
        <p class="card-text">${"URHere001"}</p>
      </div>
    </a>
    <div class="post_content">
      <h4 class="post_title">【範例】這是一篇範例文章<span class="badge">
      ${clickCount + 3}F</span></h4>
      <div class="d-flex justify-content-between">
        <span class="others_name"><a href="">${"使用者"}${"(URHere001)"}</a></span>
        <small>${year}-${month}-${date} ${hours}:${minutes}</small>
      </div>
      <div class="post_main">
        <p>${userComment}</p>
      </div>
      <div class="post_btn">
        <button class="post_btn_vote vote_up"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-hand-thumbs-up-fill" viewBox="0 0 16 16">
          <path d="M6.956 1.745C7.021.81 7.908.087 8.864.325l.261.066c.463.116.874.456 1.012.965.22.816.533 2.511.062 4.51a10 10 0 0 1 .443-.051c.713-.065 1.669-.072 2.516.21.518.173.994.681 1.2 1.273.184.532.16 1.162-.234 1.733q.086.18.138.363c.077.27.113.567.113.856s-.036.586-.113.856c-.039.135-.09.273-.16.404.169.387.107.819-.003 1.148a3.2 3.2 0 0 1-.488.901c.054.152.076.312.076.465 0 .305-.089.625-.253.912C13.1 15.522 12.437 16 11.5 16H8c-.605 0-1.07-.081-1.466-.218a4.8 4.8 0 0 1-.97-.484l-.048-.03c-.504-.307-.999-.609-2.068-.722C2.682 14.464 2 13.846 2 13V9c0-.85.685-1.432 1.357-1.615.849-.232 1.574-.787 2.132-1.41.56-.627.914-1.28 1.039-1.639.199-.575.356-1.539.428-2.59z"/>
        </svg></button> <a>0</a>
        <button class="post_btn_vote vote_down"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-hand-thumbs-down-fill" viewBox="0 0 16 16">
          <path d="M6.956 14.534c.065.936.952 1.659 1.908 1.42l.261-.065a1.38 1.38 0 0 0 1.012-.965c.22-.816.533-2.512.062-4.51q.205.03.443.051c.713.065 1.669.071 2.516-.211.518-.173.994-.68 1.2-1.272a1.9 1.9 0 0 0-.234-1.734c.058-.118.103-.242.138-.362.077-.27.113-.568.113-.856 0-.29-.036-.586-.113-.857a2 2 0 0 0-.16-.403c.169-.387.107-.82-.003-1.149a3.2 3.2 0 0 0-.488-.9c.054-.153.076-.313.076-.465a1.86 1.86 0 0 0-.253-.912C13.1.757 12.437.28 11.5.28H8c-.605 0-1.07.08-1.466.217a4.8 4.8 0 0 0-.97.485l-.048.029c-.504.308-.999.61-2.068.723C2.682 1.815 2 2.434 2 3.279v4c0 .851.685 1.433 1.357 1.616.849.232 1.574.787 2.132 1.41.56.626.914 1.28 1.039 1.638.199.575.356 1.54.428 2.591"/>
        </svg></button> <a>0</a>
        <button class="last">三</button>
    </div>
    <div class="post_reply_bg">
      <div class="post_reply">
      </div>
      <div class="user_reply">
        <textarea placeholder="說些甚麼吧" class="text_area"></textarea>
        <div class="upload_btn">
          <a>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-emoji-smile" viewBox="0 0 16 16">
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
              <path d="M4.285 9.567a.5.5 0 0 1 .683.183A3.5 3.5 0 0 0 8 11.5a3.5 3.5 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.5 4.5 0 0 1 8 12.5a4.5 4.5 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683M7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5m4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5"/>
            </svg>
          </a>
          <a class="reply_submit_btn">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-90deg-up" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M4.854 1.146a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L4 2.707V12.5A2.5 2.5 0 0 0 6.5 15h8a.5.5 0 0 0 0-1h-8A1.5 1.5 0 0 1 5 12.5V2.707l3.146 3.147a.5.5 0 1 0 .708-.708z"/>
          </svg></a>
      </div>
      </div>
    </div>
    </div>
  </div>`;
      reply_list.push([]);

      document.querySelector("#user_comment").value = "";
      clickCount++;
      addVoteListeners();
      addReplySubmitBtnListeners();
      renderReplyList();
    });

  addFilterListeners();
  addVoteListeners();
  renderReplyList();
  addReplySubmitBtnListeners();
});
