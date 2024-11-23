function createSakura() {
  const sakura = document.createElement('div');
  sakura.className = 'sakura';
  sakura.style.left = Math.random() * 100 + 'vw';
  sakura.style.animationDuration = Math.random() * 5 + 5 + 's';
  document.body.appendChild(sakura);

  setTimeout(() => {
    sakura.remove();
  }, 10000);
}

setInterval(createSakura, 300);