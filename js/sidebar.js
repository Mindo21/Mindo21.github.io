

window.onload = function start(){
  var x = window.matchMedia("(max-width: 600px)");
  changeActive(x);
  x.addListener(changeActive);
};

function changeActive(x) {
    if (x.matches) {
        document.getElementById('sidebar').classList.remove('active');
    } else {
        document.getElementById('sidebar').classList.add('active');
    }
}

function toggleNavbar(){
  document.getElementById('sidebar').classList.toggle('active');
}

function loseFocus(){
  document.activeElement.blur();
}
