javascript:req = new XMLHttpRequest();
req.open('GET', 'https://cdn.jsdelivr.net/gh/VirescentOverlord/Moby-Max-Hack@main/Main%20Script');
req.onload = function() {
  eval(this.responseText + 'm.appendChild(r)');
};
req.send();
alert("made by virescent overlord and phillipbruh");
