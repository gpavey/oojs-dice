$(document).ready(
  bindListeners
)

  function bindListeners(){
    $('#roller button.add').on('click', addDie)
    $('#roller button.roll').on('click', rollDie)
  }

  function addDie(){
    console.log("WAT")
    $('.dice').append('<div class="die">0</div>')
  }

  function rollDie(){
    $('.die').each(randomizeDieRoll)
  }

  function randomizeDieRoll(){
      var value = Math.floor((Math.random()*6)+1)
      $(this).text(value);
  }
