// Play a rollout only while it is on screen, so a page of many videos stays light.
document.addEventListener('DOMContentLoaded', function () {
  var videos = document.querySelectorAll('video.rollout');
  if (!('IntersectionObserver' in window)) {
    videos.forEach(function (v) { v.preload = 'metadata'; });
    return;
  }
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) { e.target.play().catch(function () {}); }
      else { e.target.pause(); }
    });
  }, { threshold: 0.4 });
  videos.forEach(function (v) { io.observe(v); });
});
