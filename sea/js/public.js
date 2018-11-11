$('.listIcon').click(function () {
    $('.left_menu').animate({
        left:0
    },300)
    $('.backdrop').show()
})
$('.backdrop').click(function () {
    $('.left_menu').animate({
        left:'-50%'
    },300)
    $('.backdrop').hide()
})
$('.head_right button').click(function () {
    $('.call').show(200)
})
$('.closeX').click(function () {
    $('.call').hide(200)
    $('.setout').hide()
    $('.maichu').hide()
})
$('.zhuanrang').click(function () {
    $('.setout').show()
})
function maichu() {
    $('.maichu').show()
}
$(document).on('click','.showBtn',function () {
    $('.mairu').show();
    $(this).removeClass('sanjiao showBtn')
    $(this).addClass('dsanjiao hideBtn')
})
$(document).on('click','.hideBtn',function () {
    $('.mairu').hide();
    $(this).removeClass('dsanjiao hideBtn')
    $(this).addClass('sanjiao showBtn')
})
$(document).on('click','.maichuShow',function () {
    $('.maichuBox').show();
    $(this).removeClass('sanjiao maichuShow')
    $(this).addClass('dsanjiao maichuHide')
})
$(document).on('click','.maichuHide',function () {
    $('.maichuBox').hide();
    $(this).removeClass('dsanjiao maichuHide')
    $(this).addClass('sanjiao maichuShow')
})