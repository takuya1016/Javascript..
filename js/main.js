const target = document.getElementById("line");
target.addEventListener('click', () => {
  target.classList.toggle('open');
  const nav = document.getElementById("drawer");
  nav.classList.toggle('in');
});
