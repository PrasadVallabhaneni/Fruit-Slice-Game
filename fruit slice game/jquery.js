var score, trialsLeft, step, action;
var fruits=["apple","orange","watermelon","grapes","pear","peach","cherries","banana","mango"];
$(function(){
    
    $("#startreset").click(function(){
        // $("#video").pause();
        score=0;
        $("#scorevalue").html(score);
        $("#trialsLeft").show();
        trialsLeft=3;
        addHeart();
        $("#startreset").html("Reset Game");
       
        $("#startreset").click(function(){
            location.reload();
            $("#trialsLeft").hide();
            $("#fruit1").hide();
        });
       startaction();
       $("#fruit1").mouseover(function(){
           score++;
           $("#scorevalue").html(score);
           $("#slicesound")[0].play();
        //    
        
        
     stopaction();
    //  startaction();
          setTimeout(startaction, 500);
       });
              
    });


})



function addHeart(){
    $("#trialsLeft").empty();
    for(i=0;i<trialsLeft;i++){
        
        $("#trialsLeft").append('<img src="images/heart.png" class="life"> ')
    }
}
function startaction(){
    $("#fruit1").show();
    choosefruit();
    $("#fruit1").css({'left':Math.round(550*Math.random()),'top':-50})
    step= 1+Math.round(5*Math.random());
   
    action=setInterval(function(){
        // $("#fruit1").css('top', top+=step);
        $("#fruit1").css('top', $("#fruit1").position().top+step)
        
        if ($("#fruit1").position().top>$("#fruitsContainer").height()){
           if(trialsLeft>1){
               $("#fruit1").show();
               choosefruit();
               $("#fruit1").css({ 'left': Math.round(550 * Math.random()), 'top': -50 })
               step = 1 + Math.round(5 * Math.random());
               trialsLeft--;
               addHeart();
           }else{
               $("#trialsLeft").empty();
               $("#gameOver").show();
               $("#finalscore").html(score);
            //    startaction().hide();
            
           }
        }
    },10);
    
}
function choosefruit() {
    $("#fruit1").attr('src', 'images/' + fruits[Math.round(8 * Math.random())] + '.png')
}
function stopaction(){
    clearInterval(action);
    $("#fruit1").hide("explode",500);
    // $("#fruit1").hide();
    
}

