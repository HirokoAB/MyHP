//コンタクトリストへジャンプ

$(window).scroll(function() {
 
    console.log($(this).scrollTop()); 
});

$('.contactbtn').on('click',function(){
    $('#footer').animate({ scrollTop:0 }, 500);
    console.log(hogehogeeeee)
});



//自己紹介の表示と非表示
$('.selfy').on('click',function(){
    $('.mydata,.mydata_close').fadeIn(1000);
});
$('.mydata_close').on('click',function(){
    $('.mydata,.mydata_close').fadeOut(1000);
});


//お問い合わせリスト表示
$('#contactlist').on('click',function(){
    $(this).toggleClass('on');
    $(this).siblings().slideToggle();
});


//オクトパスのモーダル
$('#oct').on('click',function(){
    $('.modal-content').fadeIn('slow');
    $('#modal-bg').fadeIn('slow');
});

$('.js-modal-close').on('click',function(){
    $('.modal-content').fadeOut(1000);
    $('#modal-bg').fadeOut(1000);
});