const getPath = window.location.href;
function autoRedirect() {
  setTimeout(function () {
    window.location.href = getPath + "second.html";
  }, 7000);
}

autoRedirect();
