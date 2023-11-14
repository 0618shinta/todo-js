import "./styles.css";

const onClickAdd =() => {
  //テキスボックスの値を取得し初期化する
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  createIncompleteList(inputText);
};

//未完了リストから指定の要素を削除
const deleteFromIncompleteList = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
};

//未完了リストに追加する関数
const createIncompleteList = (text) => {

    //divタグの生成
    const div = document.createElement("div");
    div.className = "list-row";
  
    //liタグの生成
    const li = document.createElement("li");
    li.innerText = text;
  
    //button(完了)の作成
    const completeButton = document.createElement("button");
    completeButton.innerText = "完了";
    completeButton.addEventListener("click",() => {
      //押された完了ボタンの親タグ<div>を未完了リストから削除
      deleteFromIncompleteList(completeButton.parentNode);
      
      //完了リストに追加する要素
      const addTarget = completeButton.parentNode;
      //TODO内容テキストを取得
      const text = addTarget.firstElementChild.innerText;
  
      //div以下を初期化
      addTarget.textContent = null;
  
      //liタグの生成
      const li = document.createElement("li");
      li.innerText = text;
      console.log(li);
  
      //buttonタグの生成
      const backButton = document.createElement("button");
      backButton.innerText = "戻す";
      backButton.addEventListener("click",() =>{
        //alert("戻す");
        //押された戻すボタンの親タグ<divタグ>を完了リストから削除
        const deleteTarget = backButton.parentNode;
        document.getElementById("complete-list").removeChild(deleteTarget);
  
        //テキストの取得
        const text =backButton.parentNode.firstElementChild.innerText;
        createIncompleteList(text);
      });
  
      //divの子要素に各要素を設定
      addTarget.appendChild(li);
      addTarget.appendChild(backButton);
      console.log(addTarget);
  
      //完了リストに追加
      document.getElementById("complete-list").appendChild(div);
    });
   
    //button(削除)の作成
    const deleteButton = document.createElement("button");
    deleteButton.innerText = "削除";
    deleteButton.addEventListener("click",() => {
      //alert("削除");
      //押された削除ボタンの親タグ<div> を未完了リストから削除
      deleteFromIncompleteList(deleteButton.parentNode);
    });
    //divタグの子要素に各要素を設定
    div.appendChild(li);
    div.appendChild(completeButton);
    div.appendChild(deleteButton);
  
    //未完了のリストに追加
    document.getElementById("incomplete-list").appendChild(div);
}

document
  .getElementById("add-button")
  .addEventListener("click",() => onClickAdd());