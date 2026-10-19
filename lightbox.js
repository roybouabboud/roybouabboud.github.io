// Opens project and hobby photos in an overlay. Close with the X, a click outside the photo, or Esc.
(function () {
  var box = document.createElement('div');
  box.className = 'lightbox';
  box.hidden = true;
  box.setAttribute('role', 'dialog');
  box.setAttribute('aria-modal', 'true');
  box.innerHTML = '<button class="lightbox-close" type="button" aria-label="Close">×</button><img alt="">';
  document.body.appendChild(box);
  var img = box.querySelector('img');
  var closeBtn = box.querySelector('.lightbox-close');
  var lastFocus = null;

  function open(src, alt) {
    img.src = src;
    img.alt = alt || '';
    lastFocus = document.activeElement;
    box.hidden = false;
    document.body.style.overflow = 'hidden';
    closeBtn.focus();
  }
  function close() {
    box.hidden = true;
    img.removeAttribute('src');
    document.body.style.overflow = '';
    if (lastFocus) lastFocus.focus();
  }

  document.addEventListener('click', function (e) {
    var target = e.target.closest('.gallery img, .strip img, .figure img');
    if (!target) return;
    e.preventDefault();
    var link = target.closest('a');
    open(link ? link.getAttribute('href') : target.getAttribute('src'), target.alt);
  });
  box.addEventListener('click', function (e) {
    if (e.target !== img) close();
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !box.hidden) close();
  });
})();
