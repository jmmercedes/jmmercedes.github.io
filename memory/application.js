$(document).ready(function(){
  var click_count = 0;
  var myarray = ["1","1","2","2","3","3","4","4","5","5","6","6","7","7","8","8","9","9","10","10"];
  for(i in myarray){
    $('#card_holder').append('<div class="card"><p>'+ myarray[i]+'</p></div>');
  } 
  function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex ;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}
var my_array = shuffle(my_array);
  //$(this).css("border","1px");
    $('.card').on("click", function(){
        if(click_count == 0) {
            $(this).find('p').css('opacity', 1).addClass('clicked');
            value1=$(this).find('p').html();
            click_count=1;
        }
        else{
            $(this).find('p').css('opacity', 1).addClass('clicked');
            value2=$(this).find('p').html();
            click_count=0;
            if(value1 == value2){
              $('.clicked').css('opacity', 1).removeClass('clicked').addClass('correct');
            }
            else{
                $('.clicked').css('opacity', 0).removeClass('clicked');
            }
        }
    })

});
