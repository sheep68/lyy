let   让   让   让   让   让   让   让   让   让 yesButton = document               文档文档文档文档文档.getElementById("yes");
let   让   让   让   让   让   让   让   让 noButton = document               文档文档文档文档文档.getElementById("no");
let   让   让   让   让   让   让   让   让   让 questionText = document            文档文档文档文档.getElementById("question");
let   让   让   让   让   让   让   让   让   让 mainImage = document            文档文档文档文档.getElementById("mainImage");let   让   让   让   让   让   让   让   让   让 mainImage = document            文档文档文档文档.getElementById("mainImage");

let   让   让   让   让   让   让   让   让   让 clickCount = 0;  // 记录点击 No 的次数

// No 按钮的文字变化
const   常量 noTexts = [
    "你必须爱陈俞霖…", 
    "必须爱陈俞霖!!", 
    "不许不爱陈俞霖！ ", 
    "陈俞霖很伤心…", 
    "←--必须选爱陈俞霖"
];

// No 按钮点击事件
noButton.addEventListener("click", function() {noButton.addEventListener("click", function() {
    clickCount++;

    // 让 Yes 变大，每次放大 2 倍
    let   让   让   让   让   让   让   让   让   让 yesSize = 1 + (clickCount * 1.2);设yesSize = 1（点击数* 1.2）；
    yesButton.style.transform = `scale(${yesSize})`;

    // 挤压 No 按钮，每次右移 100px
    let   让   让   让   让   让   让   让   让   让 noOffset = clickCount * 50;let   让   让   让   让   让   让   让   让   让 noOffset =点击次数* 50；
    noButton.style.transform = `translateX(${noOffset}px)`;noButton.style.transform = ' translateX(${noOffset}px) '；

    // **新增：让图片和文字往上移动**
    let   让   让   让   让   让   让   让   让 moveUp = clickCount * 25; // 每次上移 20px
    mainImage.style.transform = `translateY(-${moveUp}px)`;mainImage.style.transform = ' translateY(-${moveUp}px) '；
    questionText.style.transform = `translateY(-${moveUp}px)`;questionText.style.transform = ' translateY(-${moveUp}px) '；

    // No 文案变化（前 5 次变化）
    if (clickCount <= 5) {if（点击次数<；= 5） {
        noButton.innerText = noTexts[clickCount - 1];noButton。innerText = noTexts[点击计数- 1]；
    }

    // 图片变化（前 5 次变化）
    if (clickCount === 1) mainImage.src = "https://img.keaitupian.cn/newupload/12/1670920527759404.jpg"; // 震惊if （clickCount === 1）SRC = "https://img.keaitupian.cn
ewupload/12/1670920527759404.jpg"；// 震惊
    if (clickCount === 2) mainImage.src = "https://img.keaitupian.cn/newupload/10/1634713060178482.jpg";   // 思考如果（clickCount === 2）SRC = "https://img.keaitupian.cn
ewupload/10/1634713060178482.jpg"；// 思考
    if (clickCount === 3) mainImage.src = "https://ts1.cn.mm.bing.net/th/id/R-C.e1bfd7fdaa88095f489826237b16b74c?rik=7nCfAbmKJOG%2fbw&riu=http%3a%2f%2fn.sinaimg.cn%2ffront%2f480%2fw640h640%2f20181113%2fmtp9-hnvukfe4971040.jpg&ehk=GkYlujkRb3NRU4ejwCazLKC3KjBqyNm602vw%2f8108Ws%3d&risl=&pid=ImgRaw&r=0";   // 生气if （clickCount === 3）src = "https://ts1.cn.mm.bing.net/th/id/R-C.e1bfd7fdaa88095f489826237b16b74c?rik=7nCfAbmKJOG%2fbw&riu=http%3a%2f%2fn.sinaimg.cn%2ffront%2f480%2fw640h640%2f20181113%2fmtp9-hnvukfe4971040.jpg&ehk=GkYlujkRb3NRU4ejwCazLKC3KjBqyNm602vw%2f8108Ws%3d&risl=&pid=ImgRaw&r=0"；// 生气
    if (clickCount === 4) mainImage.src = "https://tse4-mm.cn.bing.net/th/id/OIP-C.pekHTXotLp63q_zuFm5Q7wAAAA?rs=1&pid=ImgDetMain";  // 哭如果（clickCount === 4） mainImage。src = "https://tse4-mm.cn.bing.net/th/id/OIP-C.pekHTXotLp63q_zuFm5Q7wAAAA?rs=1&pid=ImgDetMain"；// 哭
    if (clickCount >= 5) mainImage.src = "https://tse4-mm.cn.bing.net/th/id/OIP-C.pekHTXotLp63q_zuFm5Q7wAAAA?rs=1&pid=ImgDetMain";  // 之后一直是哭

});

// Yes 按钮点击后，进入表白成功页面
yesButton.addEventListener("click", function() {yesButton.addEventListener("click", function() {
    document               文档文档文档文档文档.body.innerHTML = `
        <div class="yes-screen">   <div class="yes-screen"><div class="yes-screen">   <div class="yes-screen"><div class="yes-screen">   <div class="yes-screen"><div class="yes-screen">   <div class="yes-screen"><div class="yes-screen">   <div class="yes-screen"><div class="yes-screen">   <div class="yes-screen"><div class="yes-screen">   <div class="yes-screen">
            <h1 class="yes-text">爱死了!!!!!世界上最可爱的陈俞霖❥(^_-)</h1>
            <img src="agree.jpg" alt="拥抱" class="yes-image">
        </div>
    `;

    document               文档文档文档文档文档.body.style.overflow = "hidden";document               文档文档文档文档文档.body.style.overflow = "hidden";
});



