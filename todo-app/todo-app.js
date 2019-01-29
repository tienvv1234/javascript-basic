const p = document.querySelectorAll('p');

p.forEach(function(element) {
  if (element.textContent.includes('the')) {
    element.remove();
  }
});
