console.log("...loaded");
//make the game object
guessGame = {};
//Make a random number
guessGame.makeRandomNum =function(){
  var topNum = 100; // sets range 00-100
  this.answer = Math.floor(Math.random()*100);
}
//Get the number that's input
//see if it's correct
//if it's not tell the user
//clear
//signal a win


guessGame.setFormHandler =function(){
  scope = this;
  this.formDiv.submit(function(e){
    e.preventDefault();
    scope.checkGuess();
  });
};

guessGame.checkGuess = function(){
  this.guess =this.guessDiv.val();
  console.log(this.guess);
  console.log(this.answer);
  if (this.guess == this.answer){
    this.youWin();
  } else{
    this.youLose();
  };
};

guessGame.youWin = function(){
  this.h2Div.text("You win!");
};

guessGame.youLose = function(){
  this.h2Div.text("Loser!");
};

guessGame.init =function(){
  this.makeRandomNum();
  this.setFormHandler();
};


//defining
//*************
//doing
$(function(){

  guessGame.formDiv = $("#guessForm");
  guessGame.guessDiv= guessGame.formDiv.find("input").first();
  guessGame.h2Div = $("h2");
  guessGame.submitDiv = $("#guessSubmit");
  guessGame.init();

})
