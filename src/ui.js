import { Simon } from './business.js';


$(document).ready(function() {

  var newGame= new Simon();
  function selectColor(color){
    $('.container div').removeClass('selected');
    $(`#${color}`).addClass('selected');
  }

  $("#start").click(function(){
    var currentColor=newGame.newColor();
    selectColor(currentColor)
    console.log(newGame);


  });
  $("#red").click(function(){
    newGame.inputColor("red");
    selectColor("red");
  });
  $("#green").click(function(){
    newGame.inputColor("green");
    selectColor("green");
  });
  $("#yellow").click(function(){
    newGame.inputColor("yellow");
    selectColor("yellow");
  });
  $("#blue").click(function(){
    newGame.inputColor("blue");
    selectColor("blue");
  });
});
