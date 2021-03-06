/*
 * QQ 的敏感詞清單
 *
 * QQ 群敏感詞清單支援正規表示式。符合表示式的文字會換成「***」。
 *
 * 由於在 QQ 群中偶爾蹦出一兩個敏感詞語並不會招引警察叔叔，
 * 所以建議只設定一些高度敏感的詞語，或者要求非 QQ 群成員「莫談國事」。
 *
 * 從實踐上看，審查主要是各群的自我審查，但是以下幾種言論可能會招來真正的審查與監控：
 * ① 長期或大規模探討與中國官方看法相左的政治議題（例如自由/民主/人權/法治以及當代領導人的錯誤）
 * ② 宣揚與支持某些不合法宗教、某些「分裂勢力」、極端主義、恐怖主義等
 * ③ 宣揚、支持、組織群體性活動，例如抗議、遊行、示威等
 * ④ 在特定節點上被封殺的敏感話題，例如在某地發生群體性事件之後討論那個事件，或者在十三月討論一個在十三月發生的、不允許討論的政治運動。
 * ⑤ 在特定群組（例如同鄉群）對政府發牢騷或批評政府，尤其是地方政府
 * ⑥ 嚴重的違法犯罪內容，例如色情、暴力、賭博等
 *
 * 因此敏感詞清單可根據以上幾種情況以及自己群組的實際情況來靈活制定。
 *
 * 另外非 QQ 群的管理員應注意管理——本來機器人就是不合法的東西，如果機器人滿嘴廣告，那麼它當然會被騰訊封殺。
 */

module.exports = [
    "敏感詞",
    "敏感.*詞"
];
