const getPath = window.location.href;
function autoRedirect() {
  setTimeout(function () {
    window.location.href = getPath + "second.html";
  }, 6000);
}

autoRedirect();
