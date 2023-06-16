function generatePalette() {
    var colors = [];
  
    for (var i = 0; i < 5; i++) {
      var color = generateRandomColor();
      colors.push(color);
    }
  
    var paletteElement = document.getElementById('palette');
    paletteElement.innerHTML = '';
  
    colors.forEach(function(color) {
      var colorBox = document.createElement('div');
      colorBox.style.backgroundColor = color;
      colorBox.style.width = '100px';
      colorBox.style.height = '100px';
      colorBox.style.marginRight = '10px';
      paletteElement.appendChild(colorBox);
    });
  }
  
  function generateRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
  
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
  
    return color;
  }
  