$(document).ready(function(){
$('#add').on("click", function(){
  $('input').val();
  var value=$('input').val();
 $('#1').append("<p>"+value+"</p>"); 
     });
$('#clear').on("click", function(){
  $('input').val();
  $('#1').empty(); 
     });
})
