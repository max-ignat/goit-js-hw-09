!function(){var t={body:document.body,startBtn:document.querySelector("button[data-start]"),stopBtn:document.querySelector("button[data-stop]")},n=null;function o(){t.body.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16))}t.startBtn.addEventListener("click",(function(e){n=setInterval(o,1e3),t.stopBtn.disabled=!1,t.startBtn.disabled=!0,console.log("started")})),t.stopBtn.addEventListener("click",(function(o){clearInterval(n),n=0,t.stopBtn.disabled=!0,t.startBtn.disabled=!1,console.log("stopped")})),t.stopBtn.disabled=!0}();
//# sourceMappingURL=01-color-switcher.d35c7c81.js.map
