window.onload = function () {
  for (var t = document.querySelectorAll("img.play-gif"), e = 0; e < t.length; e++) div = r(t[e]), a(t[e], div);

  function a(t, e) {
    e.querySelector("button").addEventListener("click", function () {
      t.getAttribute("data-src") && (t.src = t.getAttribute("data-src"), t.removeAttribute("data-src"), t.getAttribute("data-srcset") && (t.setAttribute("srcset", t.getAttribute("data-srcset")), t.removeAttribute("data-srcset")), e.querySelector("button").remove(), e.classList.add("play-gif-wrap--loading"), t.onload = function () {
        e.classList.add("play-gif--wrap"), e.classList.remove("play-gif-wrap")
      })
    })
  }

  function r(t) {
    var e = document.createElement("div");
    e.classList.add("play-gif-wrap"), t.parentNode.insertBefore(e, t), e.appendChild(t);
    var a = document.createElement("button");
    return a.setAttribute("aria-label", t.getAttribute("data-aria") || "Play to gif"), e.appendChild(a), e
  }
};