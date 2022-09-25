var e = document.getElementsByClassName("menuVirescentOverlord2");
for (var d = 0; d < e.length; d++) e[d].hidden = !0;
(() => {
  function i(c) {
    let a = document.createElement("button");
    return a.classList.add("cheat"), a.innerText = c, a
  }
  let a = document.createElement("style");
  a.innerHTML = `details > summary {
    cursor: pointer;
    transition: 0.15s;
    list-style: none;
}
details > summary:hover {
    color: hsl(0, 0%, 50%)
}
details > summary::-webkit-details-marker {
    display: none;
}
details summary ~ * {
    animation: sweep .5s ease-in-out;
}

@keyframes sweep {
    0%    {opacity: 0; transform: translateY(-10px)}
    100%  {opacity: 1; transform: translateY(0)}
}
.cheat {
    border: none;
    background: hsl(0, 0%, 20%);
    padding: 5px;
    margin: 3px;
    width: 60%;
    color: hsl(0, 0%, 100%);
    transition: 0.2s;
    border-radius: 5px;
    cursor: pointer;
}
.cheat:hover {
    background: hsl(0, 0%, 30%);
}`;
  const u = document.createElement("div");
  u.appendChild(a), u.style.zIndex = "999999999999999999999999999999999", u.className = "menuVirescentOverlord2", u.style.width = "400px", u.style.background = "hsl(0, 0%, 10%)", u.style.borderRadius = "10px", u.style.position = "absolute", u.style.textAlign = "center", u.style.fontFamily = "Nunito", u.style.color = "white", u.style.overflow = "hidden", u.style.top = "28%", u.style.left = "35%";
  var c = 0,
    v = 0,
    w = 0,
    x = 0;
  u.onmousedown = (d = window.event) => {
    d.preventDefault(), w = d.clientX, x = d.clientY, document.onmouseup = () => {
      document.onmouseup = null, document.onmousemove = null
    }, document.onmousemove = d => {
      d = d || window.event, d.preventDefault(), c = w - d.clientX, v = x - d.clientY, w = d.clientX, x = d.clientY, u.style.top = u.offsetTop - v + "px", u.style.left = u.offsetLeft - c + "px"
    }
  };
  let y = document.createElement("div");
  u.appendChild(y), y.style.width = "100%", y.style.height = "35px", y.style.paddingTop = "2px", y.style.fontSize = "1.5rem", y.style.textAlign = "center", y.innerHTML = "Moby Max Hack", y.zIndex = "9999";
  let j, k = document.createElement("button");
  y.appendChild(k), k.style.background = "#444444", k.style.height = "45px", k.style.width = "45px", k.style.border = "none", k.style.cursor = "pointer", k.style.position = "absolute", k.style.top = "-10px", k.style.right = "-10px", k.style.fontSize = "1.5rem", k.style.borderRadius = "10px", k.style.fontFamily = "Nunito", k.style.fontWeight = "bolder", k.style.paddingTop = "10px", k.style.paddingRight = "15px", k.innerText = "\u24E7", k.onclick = () => {
    u.remove(), clearInterval(j), removeEventListener("keypress", toggleHidden)
  };
  let l = document.createElement("button");
  y.appendChild(l), l.style.background = "#444444", l.style.height = "45px", l.style.width = "45px", l.style.border = "none", l.style.cursor = "pointer", l.style.position = "absolute", l.style.top = "-10px", l.style.left = "-10px", l.style.fontSize = "1.5rem", l.style.borderRadius = "10px", l.style.fontFamily = "Nunito", l.style.fontWeight = "bolder", l.style.paddingTop = "10px", l.style.paddingLeft = "15px", l.innerText = "-", l.onclick = () => {
    m.hidden = !m.hidden
  };
  let m = document.createElement("div"),
    n = document.createElement("div");
  m.appendChild(n), u.appendChild(m), n.innerHTML = "Made By Virescent Overlord", n.style.display = "block", n.style.margin = "10px", n.style.minHeight = "70px";
  let o = document.createElement("span");
  n.appendChild(o), document.body.append(u);
  let p = document.createElement("div");
  m.appendChild(p), p.style.fontSize = "0.9rem", p.style.paddingBottom = "5px";
  let q = {
    global: {
      "Numeric Text Box Hack": () => {
        javascript: void
        function() {
          for (var d = document.getElementsByClassName("menuVirescentOverlord1"), c = 0; c < d.length; c++) d[c].hidden = !0;
          (function() {
            ans = CurrentProblem.CorrectAnswer;
            var a = document.createElement("div");
            a.style.background = "black", a.className = "menuVirescentOverlord1", a.style.textAlign = "center", a.style.transform = "translateX(-50%)", a.style.border = "1px solid magenta", a.style.padding = "1vmin", a.style.position = "fixed", a.style.left = "13%", a.style.borderRadius = "1vmin", a.style.zIndex = "9999", a.textContent += "\u3164Made By Virescent Overlord, The answer is: " + ans, a.style.color = "magenta", document.body.appendChild(a)
          })()
        }()
      },
      "Multiple Choice Hack": () => {
        for (var e = document.getElementsByClassName("menuVirescentOverlord1"), f = 0; f < e.length; f++) e[f].hidden = !0;
        javascript: ans = CurrentProblem.CorrectAnswer;
        for (var e = document.getElementsByClassName("menuVirescentOverlord1"), f = 0; f < e.length; f++) e[f].hidden = !0;
        for (var e = document.getElementsByTagName("input"), g = 0; g < e.length; g++) e[g].setAttribute("data-name", ans);
        document.getElementsByTagName("input")[0].click(), doNext(event)
      },
      "Play Games Instead": () => {
        javascript: var a = document.createElement("iframe");
        let game = prompt("What Game\n\nOptions: Duck Life(DL), or Drift Boss(DB)");
        if (game == 'DL') {
          a.src = "https://www.mathplayground.com/duck4/index.html"
        } else {
          if (game == "DB") {
            a.src = "https://www.mathplayground.com/drift-boss-v3/index.html"
          } else {
            alert("Invalid Responce")
          }
        }
        a.style.position = 'relative';
        a.style.zIndex = "999999999999";
        a.id = 'virescentOverlord1',
        document.body.appendChild(a);
        var c = document.createElement("div");
        c.innerHTML = "𓁹";
        c.style.zIndex = "999999999999999";
        c.style.cursor = "pointer";
        c.style.position = "fixed";
        c.style.top = "0%";
        c.style.left = "20%";
        c.style.color = "white";
        c.style.background = "transparent";
        c.onclick = function() {
          document.getElementById("virescentOverlord1").height = "600px";
          document.getElementById("virescentOverlord1").width = "1200px";
          c.remove();

        }
        document.body.appendChild(c);
        var b = document.createElement("div");
        b.innerHTML = "\u24E7",
        b.style.zIndex = "9999999999999";
        b.style.cursor = "pointer";
        b.style.width = "300";
        b.style.height = "300";
        b.style.position = "fixed";
        b.style.top = "1%";
        b.style.left = "1%";
        b.style.color = "white";
        b.style.background = "transparent";
        b.onclick = function() {
          b.remove();
          a.remove();
          c.remove();
        },
        document.body.appendChild(b)
      },
      "Focus Time Hack": () => {
      alert("The Method used for this hack was patched almost instantly after i initialy released it. if you want to help me create a new one, please do so. (Github: VirescentOverlord)");
        let z = document.createElement("div");
        z.innerHTML = 'Time Hacked ' + '<span id="minutes"></span>:<span id="seconds"></span>';
        let min = document.createElement("span");
        min.id = "minutes";
        document.body.appendChild(min);
        var sec = 0;

        function pad(val) {
          return val > 9 ? val : "0" + val;
        }
        setInterval(function() {
          document.getElementById("seconds").innerHTML = pad(++sec % 60);
          document.getElementById("minutes").innerHTML = pad(parseInt(sec / 60, 10));
        }, 1000);
        n.appendChild(z);
      }
    }
  }
  r = document.createElement("details");
  r.innerHTML = `<summary style="padding: 10px; font-size: 1.5em; font-weight: bolder">Cheats ↴</summary>`;
  for (var s = 0; s < Object.keys(q.global).length; s++) {
    let a = i(Object.keys(q.global)[s]);
    a.onclick = q.global[Object.keys(q.global)[s]], r.appendChild(a)
  }
  r.open = !0, r.style.paddingBottom = "10px", n.appendChild(r);
})()
