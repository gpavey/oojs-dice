// ----- Controller -----

$(document).ready (
  function() {
    var view        = new View()
    var model       = new Model()
    var controller  = new Controller(view,model)
    controller.bindListeners()
  })

function Controller(view,model){
  this.view  = view
  this.model    = model
}

Controller.prototype = {
  bindListeners: function() {
    $('#roller button.add').on('click', this.addDie.bind(this))
    $('#roller button.roll').on('click', this.rollDie.bind(this))
  },

  addDie: function(){
    this.view.addDie()
  },

  rollDie: function() {
    console.log('roll')
    var dieCount = this.view.dieCount;
    for (var i = 0; i < dieCount; i++){
      this.view.updateDie(i,this.model.randomizeDieRoll())
    }
  },

}

// ----- view -----
function View(){
  this.dieCount = 0
}

View.prototype =  {
  addDie: function() {
    $('.dice').append('<div class="die">0</div>')
    this.dieCount = $('.die').length
  },

  updateDie: function(i,value){
    $('.die:eq('+ i +')').text(value)
  },
}

// ------ Model -----
function Model(){
}

Model.prototype = {
  randomizeDieRoll: function() {
    return Math.floor((Math.random()*6)+1)
  },

}