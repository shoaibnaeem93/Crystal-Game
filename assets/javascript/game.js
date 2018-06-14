$( document ).ready(function(){
    var Random=Math.floor(Math.random()*101+19)
    // Selects a random number between 19-120 to be shown at the start of the game
  
    $('#randomNumber').text(Random);
    // Appends the random number to the randomNumber id in the html
    
    var num1= Math.floor(Math.random()*11+1)
    var num2= Math.floor(Math.random()*11+1)
    var num3= Math.floor(Math.random()*11+1)
    var num4= Math.floor(Math.random()*11+1)
    // Setting up random numbers between 1-12 for each jewel

    var userTotal= 0; 
    var wins= 0;
    var losses = 0;
    //  Decaring scoresheet variables

  $('#Wins').text(wins);
  $('#Losses').text(losses);
  //appends the wins and losses count to the html
  

  function reset(){
        Random=Math.floor(Math.random()*101+19);
        console.log(Random)
        $('#randomNumber').text(Random);
        num1= Math.floor(Math.random()*11+1);
        num2= Math.floor(Math.random()*11+1);
        num3= Math.floor(Math.random()*11+1);
        num4= Math.floor(Math.random()*11+1);
        userTotal= 0;
        $('#finalTotal').text(userTotal);
        } 
//resets the game

  
  function win(){
  alert("You won!");
    wins++; 
    $('#Wins').text(wins);
    reset();
} //adds the wins to the userTotal and resets game
  
  function loss(){
  alert ("You lose!");
    losses++;
    $('#Losses').text(losses);
    reset()
  } //adds the losses to the userTotal and resets game

 
    $('#one').on ('click', function(){
      userTotal = userTotal + num1;
      console.log("New userTotal= " + userTotal);
      $('#finalTotal').text(userTotal); 
 //sets up click for jewels and when clicking it to increase users score by the amount of that jewel

//Below we create if/else statements for different game scanarios and how that changes score
          if (userTotal == Random){
            win();
          }
          else if ( userTotal > Random){
            loss();
          }   
    }) 

// we do this same setup for the other three jewels respectively 
//jewel 2
    $('#two').on ('click', function(){
      userTotal = userTotal + num2;
      console.log("New userTotal= " + userTotal);
      $('#finalTotal').text(userTotal); 
          if (userTotal == Random){
            win();
          }
          else if ( userTotal > Random){
            loss();
          } 
    })  

//Jewel 3
    $('#three').on ('click', function(){
      userTotal = userTotal + num3;
      console.log("New userTotal= " + userTotal);
      $('#finalTotal').text(userTotal);
            if (userTotal == Random){
            win();
          }
          else if ( userTotal > Random){
            loss();
          } 
    })  

//Jewel 4
    $('#four').on ('click', function(){
      userTotal = userTotal + num4;
      console.log("New userTotal= " + userTotal);
      $('#finalTotal').text(userTotal); 
        
            if (userTotal == Random){
            win();
          }
          else if ( userTotal > Random){
            loss();
          }
    });   
  }); 