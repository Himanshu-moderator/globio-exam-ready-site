// Fades out the HTML pre-loader once Flutter has painted its first frame.
window.addEventListener('flutter-first-frame', function () {
  var b = document.getElementById('boot');
  if (!b) return;
  b.style.opacity = '0';
  setTimeout(function () { b.remove(); }, 400);
});
