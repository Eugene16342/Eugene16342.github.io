document.addEventListener("DOMContentLoaded", function () {
  let problem_pros = [
    {
      title: "我沒有電子信箱可以進行認證",
      badge: "e-mail",
      text: "去辦一個，網路很多免錢信箱可以申請",
    },
    {
      title: "我忘記我的密碼了",
      badge: "帳號",
      text: "點選登入，點選忘記密碼",
    },
    {
      title: "我忘記我電子信箱的密碼了",
      badge: "e-mail",
      text: "到你申請信箱的網站，點選登入，點選忘記密碼",
    },
    {
      title: "不想用了，如何註銷帳號",
      badge: "帳號",
      text: "不知道，我從來沒想過這個問題",
    },
    {
      title: "可以用第三方登入嗎",
      badge: "登入問題",
      text: "目前你連登入都做不到，第三方等期末看有沒有機會吧",
    },
    {
      title: "一個信箱可以註冊幾個帳號",
      badge: "帳號",
      text: "當然是一個",
    },
  ];

  let rule_pros = [
    {
      title: "哪裡可以看本站的所有規則",
      badge: "站規",
      text: "這裡",
    },
    {
      title: "誰來判斷用戶是否違規",
      badge: "站規",
      text: "那些守規矩，無不良紀錄且願意無償幫忙的用戶",
    },
    {
      title: "該如何成為管理員",
      badge: "管理員",
      text: "這職位吃力不討好欸，不要吧",
    },
    {
      title: "站規和版規衝突時哪個優先",
      badge: "站規",
      text: "憲法和民法衝突時哪個優先",
    },
    {
      title: "創一堆分身帳號會怎樣",
      badge: "帳號",
      text: "防止有人圖謀不軌，會將分身送進小黑屋，永不見天日",
    },
    {
      title: "你們怎麼抓分身",
      badge: "帳號",
      text: "不知道欸，看IP位置吧",
    },
  ];

  let serve_pros = [
    {
      title: "為甚麼線上客服永遠都在忙線",
      badge: "客服",
      text: "本來就沒有客服",
    },
    {
      title: "沒有網路可以使用本站嗎",
      badge: "網路",
      text: "沒網路你連來問問題都不行好ㄇ",
    },
    {
      title: "這網站有甚麼服務",
      badge: "服務",
      text: "裡面除了亂文以外有些白癡東西，讓你看的時候比較不無聊",
    },
    {
      title: "我想要做問卷調查可以嗎",
      badge: "問卷",
      text: "營利調查都不行，非營利調查可以和管理員溝通",
    },
    {
      title: "可以花錢把討厭的用戶砍掉嗎",
      badge: "服務",
      text: "你要出多少",
    },
  ];

  let appel_pros = [
    {
      title: "帳號被停權後，重創一隻可以嗎",
      badge: "帳號",
      text: "可以，抓到我們會再砍一次",
    },
    {
      title: "那被停權後就不能使用這個網站了嗎",
      badge: "帳號",
      text: "不要太張揚誰會去查你的資料",
    },
    {
      title: "我覺得被停權有冤",
      badge: "申訴",
      text: "擊鼓鳴冤，縣長會為你做主",
    },
    {
      title: "管理員根本就專版土皇帝",
      badge: "管理員",
      text: "可以向站方申訴",
    },
    {
      title: "怎麼有人花錢把我的帳號砍掉了",
      badge: "帳號",
      text: "我也只是收錢辦事，你可以花一筆小錢復活",
    },
    {
      title: "如果我申訴過後還是不服判決該怎麼做",
      badge: "申訴",
      text: "找消基會",
    },
  ];

  let mail_pros = [
    {
      title: "怎麼檢舉他人",
      badge: "檢舉",
      text: "我通常會在回覆區放上檢舉鈕，如果沒有就是我忘了做",
    },
    {
      title: "某個帳號罄竹難書，我手上有很多資料，該怎麼給站方",
      badge: "檢舉",
      text: "那個頁面還沒做欸，而且順位應該超級後面，甚至可能根本不做",
    },
    {
      title: "我被檢舉了，可以知道是哪個王八檢舉我的嗎",
      badge: "檢舉",
      text: "不能，我們的吹哨者保護系統比政府可靠",
    },
    {
      title: "如果我被大量惡意檢舉會被封鎖嗎",
      badge: "檢舉",
      text: "行的正就不用怕，他會被濫訴處理",
    },
    {
      title: "行的正但是被花錢砍掉帳號怎麼辦",
      badge: "帳號",
      text: "我也只是收錢辦事，你可以花一筆小錢復活",
    },
    {
      title: "客服態度很差，哪裡檢舉",
      badge: "客服",
      text: "找另一個客服檢舉",
    },
  ];

  let suggestion_pros = [
    {
      title: "這個網站做得很爛，怎麼給建議",
      badge: "建議",
      text: "每個頁面的頁尾應該有我的信箱",
    },
    {
      title: "我找到BUG了，怎麼回報",
      badge: "問題回報",
      text: "每個頁面的頁尾應該有我的信箱",
    },
    {
      title: "建議或問題回報了就會改嗎",
      badge: "問題回報",
      text: "能力所及範圍我應該會改吧",
    },
    {
      title: "能力所及之外的問題怎麼處理",
      badge: "問題回報",
      text: "以後處理",
    },
    {
      title: "網站完成度怎麼這麼低",
      badge: "建議",
      text: "新手上路，想的出來做不出來",
    },
  ];

  let other_pros = [
    {
      title: "為甚麼那麼多吉娃娃圖片",
      badge: "吉娃",
      text: "我覺得這生物長的很好笑",
    },
    {
      title: "那些文章都是你自己想的嗎",
      badge: "文章",
      text: "一部分是，大部分是複製來的",
    },
    {
      title: "圖片哪來的",
      badge: "圖片",
      text: "ppt應該會有完整的來源",
    },
    {
      title: "幹嘛寫這寫不三不四的東西",
      badge: "文章",
      text: "累了就胡謅一些東西當休息",
    },
  ];

  const problem = document.getElementById("problem");
  const rule = document.getElementById("rule");
  const serve = document.getElementById("serve");
  const appel = document.getElementById("appel");
  const mail = document.getElementById("mail");
  const suggestion = document.getElementById("suggestion");
  const other_problem = document.getElementById("other_problem");
  const problem_container = document.getElementById("problem_container");

  function chiose_problem(pros, type) {
    let proHTML = "";
    let typeHTML = `
      <h5 class="fs-2 fw-bolder ps-4">${type}</h5>
    `;
    pros.forEach((pro, index) => {
      const uniqueId = `${"id"}${index}`;
      proHTML += `
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button
              class="accordion-button collapsed fw-bold"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#${uniqueId}"
              aria-expanded="false"
              aria-controls="${uniqueId}"
            >
              ${pro.title}
              <span class="badge bg-primary ms-2">${pro.badge}</span>
            </button>
          </h2>
          <div
            id="${uniqueId}"
            class="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample"
          >
            <div class="accordion-body">
              ${pro.text}
            </div>
          </div>
        </div>
      `;
    });

    problem_container.innerHTML = typeHTML + proHTML;
  }

  problem.addEventListener("click", function () {
    chiose_problem(problem_pros, "疑難雜症");
  });

  rule.addEventListener("click", function () {
    chiose_problem(rule_pros, "網站規範");
  });

  serve.addEventListener("click", function () {
    chiose_problem(serve_pros, "網站服務");
  });

  appel.addEventListener("click", function () {
    chiose_problem(appel_pros, "違規申訴");
  });

  mail.addEventListener("click", function () {
    chiose_problem(mail_pros, "檢舉信箱");
  });

  suggestion.addEventListener("click", function () {
    chiose_problem(suggestion_pros, "建議回報");
  });

  other_problem.addEventListener("click", function () {
    chiose_problem(other_pros, "其他");
  });
});
