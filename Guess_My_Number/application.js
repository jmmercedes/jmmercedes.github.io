$(document).ready(function(){
  var guess = 0;
  //find a way for the program to choose a random number between 1 and 100, save this as a variable
  var comp_integer = Math.floor(Math.random()*100);
  console.log(comp_integer);
  //when the player clicks on the 'guess' button
  $('button').on('click', function(){
    $("#feedback").empty();
    //save their guess as a variable
    guess = guess + 1;
    var play_guess = parseInt($('input').val());
    console.log(play_guess);
    //and compare this guess to the random number that the computer picked
    //if the user guessed the correct number...
    $("#guess_counter").empty();
    $("#guess_counter").append(guess);// we tried to update it but it didnt work...sorry
    if(play_guess===comp_integer){
      //what happens if the guess is correct?
      $("#feedback").append("Correct!");
    }
    //if the user guessed too high...
    else if(play_guess>comp_integer){
 $("#feedback").append("number too high!");
    }
    else
      //update the 'feedback' paragraph to tell them to guess lower
      
    //otherwis$("#feedback").append("number too high!");e, the user guessed too low...
    $("#feedback").append("number too low!");
      //update the 'feedback' paragraph to tell them to guess higher
    $("#guess_counter").empty();
  });
});
