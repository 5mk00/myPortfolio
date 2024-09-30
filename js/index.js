$(document).ready(function(){
    designMoreBtn();
    designShow();
    designCloseCursor('#designShow');
    designNav('#design > div:first-of-type > input');
    menuActive();
});

function menuActive(){
    $('header nav').click(function(){
        $(this).toggleClass('active');
    });
}

function designMoreBtn(){
    $('#design > input').click(function(){
        if($(this).attr("value")=="LOAD MORE"){
            $('.designBox').addClass('active');
            $(this).val('LOAD LESS');
        }
        else{
            $('.designBox').removeClass('active');
            $(this).val('LOAD MORE');
        }
    });
}

function designShow(){
    $('#design ul li').click(function(){
        var imgSrc = $(this).find('img').attr('src');
        $('#designShow').find('img').attr('src', imgSrc);
        var imgName = $(this).find('figcaption').text();
        if(imgName=="배너"){
            var imgName = "Banner(배너)";
        }
        else if(imgName=="상세"){
            var imgName = "Detail(상세페이지)";
        }
        else if(imgName=="포스터"){
            var imgName = "ETC(포스터)";
        }
        else if(imgName=="패키지"){
            var imgName = "Package(패키지)";
        }
        else if(imgName=="인쇄물"){
            var imgName = "ETC(인쇄물)";
        }
        $('#designShow').find('figcaption').text(imgName);
        $('#designShow').addClass('active');
        $('body').addClass('stopScroll');
        $('#designShow figure').scrollTop(0);
    });
}

function designCloseCursor(closeBtn){
    $(closeBtn).click(function(){
        $('#designShow').removeClass('active');
        $('body').removeClass('stopScroll');
    });
}

function designNav(designNav){
    $('#design ul li').addClass("active");
    $(designNav).click(function(){
        $('#design > div:first-of-type > input').removeClass("active");
        $(this).addClass("active");
        var a = ".design"+$(this).val();
        $('.designBox').removeClass('active');
        $('.btn').val('LOAD MORE');

        var designImgBoxHeight;
        var maxHeight = parseInt($(this).parents("#design").children(".designBox").css('max-height'));;
        

        if(a==".designBanner"){
            $('#design ul li').removeClass("active");
            $(a).parents('li').addClass("active");
            designImgBoxHeight = $(this).parents("#design").children(".designBox").innerHeight();
        }
        else if(a==".designDetail"){
            $('#design ul li').removeClass("active");
            $(a).parents('li').addClass("active");
            designImgBoxHeight = $(this).parents("#design").children(".designBox").innerHeight();
        }
        else if(a==".designPackage"){
            $('#design ul li').removeClass("active");
            $(a).parents('li').addClass("active");
            designImgBoxHeight = $(this).parents("#design").children(".designBox").innerHeight();
        }
        else if(a==".designEtc"){
            $('#design ul li').removeClass("active");
            $(a).parents('li').addClass("active");
            designImgBoxHeight = $(this).parents("#design").children(".designBox").innerHeight();
        }
        else{
            $('#design ul li').addClass("active");
            designImgBoxHeight = $(this).parents("#design").children(".designBox").innerHeight();
        }  

        if(designImgBoxHeight < maxHeight){
            $(this).parents("#design").children(".btn").removeClass("active");
        }
        else if(designImgBoxHeight >= maxHeight){
            $(this).parents("#design").children(".btn").addClass("active");
        }
    })
}
