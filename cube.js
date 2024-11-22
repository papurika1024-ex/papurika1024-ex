// 言語ごとのテキスト定義
const translations = {
  ja: {
      title: "地震前の外国人向けマニュアル",
      dangerTitle: "地震の危険性",
      dangerText: "地震は建物倒壊、津波、火災などの危険を伴い、多くの被害を引き起こします。余震やライフラインの断絶もリスクです。",
      suppliesTitle: "防災グッズ",
      suppliesList: [
          "非常食・飲料水（3日分以上）",
          "懐中電灯・電池",
          "ラジオ",
          "応急手当用品",
          "防寒具",
          "身分証や現金"
      ]
  },
  en: {
      title: "Earthquake Preparedness Manual for Foreigners",
      dangerTitle: "Dangers of Earthquakes",
      dangerText: "Earthquakes bring risks such as building collapse, tsunamis, and fires, causing significant damage. Aftershocks and lifeline disruptions are also concerns.",
      suppliesTitle: "Emergency Supplies",
      suppliesList: [
          "Emergency food and water (at least 3 days)",
          "Flashlight and batteries",
          "Radio",
          "First aid kit",
          "Warm clothing",
          "Identification and cash"
      ]
  }
};








// 明示的にグローバルスコープに追加
window.switchLanguage = function (lang) {
    const text = translations[lang];

    // 各要素のテキストを更新
    document.getElementById("title").innerText = text.title;
    document.getElementById("danger-title").innerText = text.dangerTitle;
    document.getElementById("danger-text").innerText = text.dangerText;
    document.getElementById("supplies-title").innerText = text.suppliesTitle;

    // 防災グッズリストを更新
    const suppliesList = document.getElementById("supplies-list");
    suppliesList.innerHTML = ""; // 既存のリストをクリア
    text.suppliesList.forEach(item => {
        const li = document.createElement("li");
        li.innerText = item;
        suppliesList.appendChild(li);
    });
};

// 言語切り替え関数
function switchLanguage(lang) {
    const text = translations[lang];
  
    // 各要素のテキストを更新
    document.getElementById("title").innerText = text.title;
    document.getElementById("danger-title").innerText = text.dangerTitle;
    document.getElementById("danger-text").innerText = text.dangerText;
    document.getElementById("supplies-title").innerText = text.suppliesTitle;
  
    // 防災グッズリストを更新
    const suppliesList = document.getElementById("supplies-list");
    suppliesList.innerHTML = ""; // 既存のリストをクリア
    text.suppliesList.forEach(item => {
        const li = document.createElement("li");
        li.innerText = item;
        suppliesList.appendChild(li);
    });}