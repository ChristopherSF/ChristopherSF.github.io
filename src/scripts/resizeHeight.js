let lastHeight = window.innerHeight

export function updateHeight() {
  const pages = document.getElementsByClassName('page')
  const newHeight = window.innerHeight

  Array.from(pages).forEach(page => {
    if (newHeight !== lastHeight) {
        page.style.height = newHeight + 'px';
        lastHeight = newHeight;
      }
  });
}

export function init() {
    window.addEventListener('resize', updateHeight)
    window.addEventListener('orientationchange', updateHeight)
    updateHeight()
}


