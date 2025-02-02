const cookies = document.cookie.split(";").map((cookie) => {
  return cookie.split("=");
});
const awsUserInfo = cookies.find((cookie) => {
  return cookie[0].trim() === "aws-userInfo";
});
const awsUserInfoValue = decodeURIComponent(awsUserInfo[1]);
console.log("🚀 ~ awsUserInfoValue:", awsUserInfoValue);
const awsAlias = JSON.parse(awsUserInfoValue).alias;
console.log("🚀 ~ awsAlias:", awsAlias);

// div要素を作りテキストとクラスを設定
const element = document.createElement("div");
element.textContent = awsAlias;
element.classList.add("account-alias");

// 背景色、文字色を設定（後に変更することを考慮しcss外で設定）
element.style.backgroundColor = "#80DEEAFF";
element.style.color = "#000000FF";

setTimeout(() => {
  // divをフッター部へ追加
  const footer = document.getElementById("awsc-nav-footer-content");
  footer.appendChild(element);
}, 2000);

// if (document.readyState === "complete") {
//   // divをフッター部へ追加
//   const footer = document.getElementById("awsc-nav-footer-content");
//   footer.appendChild(element);
// }
