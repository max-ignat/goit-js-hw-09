const t={body:document.body,startBtn:document.querySelector("button[data-start]"),stopBtn:document.querySelector("button[data-stop]")};let o=null;function n(){t.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}t.startBtn.addEventListener("click",(function(e){o=setInterval(n,1e3),t.stopBtn.disabled=!1,t.startBtn.disabled=!0,console.log("started")})),t.stopBtn.addEventListener("click",(function(n){clearInterval(o),o=0,t.stopBtn.disabled=!0,t.startBtn.disabled=!1,console.log("stopped")})),t.stopBtn.disabled=!0;
//# sourceMappingURL=01-color-switcher.a4ebff0c.js.map
