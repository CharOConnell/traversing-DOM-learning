$(document).ready(function () {
    // put your code here

    $(".theButton").click(function () {
        // when a coloured panel is clicked, all panels vanish
        // $(".theButton").parent().hide();
        // when a coloured panel is clicked, just that panel vanishes
        // $(this).parent().hide();
        
    });
    $(".container").click(function() {
        // when a panel is clicked, all siblings fade to 10% opacity
        $(this).siblings().fadeTo('slow',0.1);
    });
    $(".superButton").click(function() {
        // when reset is clicked, all panels revert to full opacity
        $(".container").fadeTo('slow',1);
    })
    $(".theButton").mouseenter(function() {
        // when the mouse hovers over a panel, that panel turns black
        var colourName = $(this).css("background-color");
        console.log(colourName);
        $(this).addClass("makeBlack");
        // change text in the reset button to the RGB value of the selected panel
        $(".superButton").text(colourName);
    });
    $(".theButton").mouseleave(function() {
        $(this).removeClass("makeBlack");
    });
    

});