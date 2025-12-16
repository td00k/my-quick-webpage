document.getElementById('greetBtn')?.addEventListener('click', function () {
  const name = prompt('What is your name?', '');
  if (name) {
    alert('Nice to meet you, ' + name + ' 👋');
  } else {
    alert('Hello! 👋');
  }
});
console.log('Simple site loaded — branch: simple-website');
