import { Simon } from './business.js';


$(document).ready(function() {

  var newGame= new Simon();
  function selectColor(color){
    $('.container div').removeClass('selected');
    $(`#${color}`).addClass('selected');
    console.log(newGame.sequence);
  }

  function colorLoop() {
    for (var i = 0 ; i < newGame.sequence.length ; i++) {
      setInterval(selectColor(newGame.sequence[i]),1000*i);
    }
  }

  $("#start").click(function(){
    newGame.newColor();
    colorLoop();

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
