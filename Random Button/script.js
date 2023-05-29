document.getElementById('changeBgButton').addEventListener('click', function() {
    var colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#00ffff'];
    var randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
  });
  