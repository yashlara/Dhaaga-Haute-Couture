$(document).ready(function() {
    $("#pic-2").hide();
    $("#pic-3").hide();
    $("#pic-4").hide();
    $("#pic-5").hide();
});

$("#image_1").click(function(){
    $("#pic-1").show();
    $("#pic-2").hide();
    $("#pic-3").hide();
    $("#pic-4").hide();
    $("#pic-5").hide();
})

$("#image_2").click(function(){
    $("#pic-1").hide();
    $("#pic-2").show();
    $("#pic-3").hide();
    $("#pic-4").hide();
    $("#pic-5").hide();
})
$("#image_3").click(function(){
    $("#pic-1").hide();
    $("#pic-2").hide();
    $("#pic-3").show();
    $("#pic-4").hide();
    $("#pic-5").hide();
})
$("#image_4").click(function(){
    $("#pic-1").hide();
    $("#pic-2").hide();
    $("#pic-3").hide();
    $("#pic-4").show();
    $("#pic-5").hide();
})
$("#image_5").click(function(){
    $("#pic-1").hide();
    $("#pic-2").hide();
    $("#pic-3").hide();
    $("#pic-4").hide();
    $("#pic-5").show();
})