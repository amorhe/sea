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
//关闭弹框
$('.guanbi').click(function () {
    $('.call').hide(200)
    $('.setout').hide()
    $('.maichu').hide()
})
$('.zhuanrang').click(function () {
    $('.setout').show()
})
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


// function ajaxDemo(page,pageSize){
//     if(!pageSize)var pageSize = 5;
//     var data = {},arr=[];
//     for(var i = 1;i<=31;i++){
//         arr.push(i);
//         if(i==pageSize){
//             data[1]=arr;
//             arr=[];
//         }else if(i==pageSize*2){
//             data[2]=arr;
//             arr=[];
//         }else if(i==pageSize*3){
//             data[3]=arr;
//             arr=[];
//         }else if(i==pageSize*4){
//             data[4]=arr;
//             arr=[];
//         }else if(i==pageSize*5){
//             data[5]=arr;
//             arr=[];
//         }else if(i==pageSize*6){
//             data[6]=arr;
//             arr=[];
//         }else if(i>=31){
//             data[7]=arr;
//             arr=[];
//         }
//     }
//     // return data[page];
//     console.log(data[page])
// }
//
// var page = 1;
// //下一页
// function next(pageSize) {
//     if(page>pageSize){
//         return
//     }else{
//         ajaxDemo(page)
//         page ++;
//     }
// }
// //上一页
// function prev() {
//     if(page==1){
//         return
//     }else{
//         page --;
//         ajaxDemo(page)
//     }
// }