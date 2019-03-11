export function Simon(){
  this.colors=["red","blue","green","yellow"];
  this.sequence=[];
  this.playerSequence=[];
  this.playerTurn = false;
}

Simon.prototype.newColor= function(){
  var random= Math.ceil(Math.random()*4);
  var color= this.colors[random-1];
  this.sequence.push(color);
  return color;
}

Simon.prototype.inputColor=function(color){
  this.playerSequence.push(color);
}

Simon.prototype.checkInput=function(){
  for (var i=0; i<this.playerSequence.length;i++){
    for (var j=0; j<this.sequence.length;j++){
      if(this.playerSequence[i]!==this.sequence[j]){
        alert("Game Over");
      }
    }
  }
  this.playerSequence=[];
}
