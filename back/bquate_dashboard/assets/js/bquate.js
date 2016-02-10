$('#template input:radio').addClass('input_hidden');
$('#template label').click(function(){
    $(this).addClass('selected').siblings().removeClass('selected');
});