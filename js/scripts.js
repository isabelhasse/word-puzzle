var indexes = [];

$(document).ready(function(){
  $("form").submit(function(event){
    var string = $("#string").val();
    for(var i=1; i < string.length; i++){
      if(string[i]==="a" || string[i]==="e" || string[i]==="i" || string[i]==="o" || string[i]==="u"){
        indexes.push(i);
      };
    };

    console.log(indexes);
    event.preventDefault();
  });
});
