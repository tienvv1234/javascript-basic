//const p = document.querySelector('p');
//p.remove(); // remove all selector

// query all and remove
const ps = document.querySelectorAll('p');
ps.forEach(function(p) {
  p.textContent = 'abc';
  //console.log(p.textContent);
  //p.remove();
});
