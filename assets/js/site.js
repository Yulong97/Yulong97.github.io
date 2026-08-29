/**
 * Menu
 */
 $("a.menu-icon").on("click", function(event) {
   var w = $(".menu");

   w.css({
     display: w.css("display") === "none"
      ? "block"
      : "none"
   });
 });

/**
 * Wechat widget
 */
function moveWidget(event) {
  var w = $("#wechat-widget");

  w.css({
    left: event.pageX - 25,
    top: event.pageY - w.height() - 60
  });
}

$("a#wechat-link").on("mouseenter", function(event) {
  $("#wechat-widget").css({ display: "block" });
  moveWidget(event);
});

$("a#wechat-link").on("mousemove", function(event) {
  moveWidget(event);
});

$("a#wechat-link").on("mouseleave", function(event) {
  $("#wechat-widget").css({ display: "none" });
});

/**
 * 语言切换，偏好写入 localStorage
 */
(function() {
  var STORAGE_KEY = "site-lang";

  function applyLang(lang) {
    if (lang !== "zh") {
      lang = "en";
    }
    document.documentElement.setAttribute("data-lang", lang);
    document.documentElement.setAttribute("lang", lang === "zh" ? "zh-CN" : "en");
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch (e) {}
    var titleMeta = document.querySelector('meta[name="i18n-title-' + lang + '"]');
    if (titleMeta) {
      document.title = titleMeta.getAttribute("content");
    }
  }

  $(".lang-btn").on("click", function() {
    applyLang($(this).attr("data-set-lang"));
  });
})();
