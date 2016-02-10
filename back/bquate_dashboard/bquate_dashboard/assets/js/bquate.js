$('#template input:radio').addClass('input_hidden');
$('#template label').click(function(){
    $(this).addClass('selected').siblings().removeClass('selected');
});
$(document).ready(function(){
    $('input[type="radio"]').click(function(){
        if($(this).attr("value")=="opt1"){
            $(".box").not(".opt1_excel").hide();
            $(".opt1_excel").show();
        }
        if($(this).attr("value")=="opt2"){
            $(".box").not("opt2_email").hide();
            $(".opt2_email").show();
        }
        
    });
});