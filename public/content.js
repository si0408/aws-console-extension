if (document.readyState == "complete") {
  // AWSマネージメントコンソールの右上の部分
  // 同階層にspanタグが2〜3個あるが、「@」が含まれているものをユーザーネームとして取得する
  const accountMenuButton = document.getElementById("nav-usernameMenu");
  console.log("🚀 ~ accountMenuButton:", accountMenuButton);

  const displayName =
    accountMenuButton.firstElementChild.firstElementChild.getAttribute("title");

  let awsAccountName;
  if (displayName) {
    const nameList = displayName.split(" ");
    awsAccountName = nameList[nameList.length - 1];
  }
  console.log("🚀 ~ awsAccountName:", awsAccountName);

  // div要素を作りテキストとクラスを設定
  const element = document.createElement("div");
  element.textContent = awsAccountName;
  element.classList.add("account-details");

  // 背景色、文字色を設定（後に変更することを考慮しcss外で設定）
  element.style.backgroundColor = "#80DEEAFF";
  element.style.color = "#000000FF";

  // divをフッター部へ追加
  const footer = document.getElementById("awsc-nav-footer-content");
  footer.appendChild(element);
}
