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
        $('#designShow figure').find('img').detach();
        var className=$(this).hasClass("designMore");
        if(className==false){
            var imgSrc = $(this).find('img').attr('src');
            $('#designShow figure').append('<img src="'+imgSrc+'">');
            
        }
        else if(className==true){
            var imgSrc = 'images/'+$(this).find('figure').attr('class')+'_1.jpg';
            $('#designShow').find('img').attr('src', imgSrc);
            if($(this).find('figure').hasClass('design_detail01')==true){
                $('#designShow figure').append('<img src="images/design_detail01_1.jpg" alt="상세페이지 디자인" class="designDetail">');
                $('#designShow figure').append('<img src="images/design_detail01_2.jpg" alt="상세페이지 디자인" class="designDetail">');
                $('#designShow figure').append('<img src="images/design_detail01_3.jpg" alt="상세페이지 디자인" class="designDetail">');
                $('#designShow figure').append('<img src="images/design_detail01_4.jpg" alt="상세페이지 디자인" class="designDetail">');
                $('#designShow figure').append('<img src="images/design_detail01_5.jpg" alt="상세페이지 디자인" class="designDetail">');
                $('#designShow figure').append('<img src="images/design_detail01_6.gif" alt="상세페이지 디자인" class="designDetail">');
                $('#designShow figure').append('<img src="images/design_detail01_7.jpg" alt="상세페이지 디자인" class="designDetail">');
                $('#designShow figure').append('<img src="images/design_detail01_8.jpg" alt="상세페이지 디자인" class="designDetail">');
            }
            else if($(this).find('figure').hasClass('design_SNS01')==true){
                $('#designShow figure').append('<img src="images/design_SNS01_1.jpg" alt="SNS 디자인" class="designSNS">');
                $('#designShow figure').append('<img src="images/design_SNS01_2.jpg" alt="SNS 디자인" class="designSNS">');
                $('#designShow figure').append('<img src="images/design_SNS01_3.jpg" alt="SNS 디자인" class="designSNS">');
                $('#designShow figure').append('<img src="images/design_SNS01_4.jpg" alt="SNS 디자인" class="designSNS">');
                $('#designShow figure').append('<img src="images/design_SNS01_5.jpg" alt="SNS 디자인" class="designSNS">');
            }
            else if($(this).find('figure').hasClass('design_SNS02')==true){
                $('#designShow figure').append('<img src="images/design_SNS02_1.jpg" alt="SNS 디자인" class="designSNS">');
                $('#designShow figure').append('<img src="images/design_SNS02_2.jpg" alt="SNS 디자인" class="designSNS">');
                $('#designShow figure').append('<img src="images/design_SNS02_3.jpg" alt="SNS 디자인" class="designSNS">');
                $('#designShow figure').append('<img src="images/design_SNS02_4.jpg" alt="SNS 디자인" class="designSNS">');
                $('#designShow figure').append('<img src="images/design_SNS02_5.jpg" alt="SNS 디자인" class="designSNS">');
                $('#designShow figure').append('<img src="images/design_SNS02_6.jpg" alt="SNS 디자인" class="designSNS">');
            }
            else if($(this).find('figure').hasClass('design_SNS03')==true){
                $('#designShow figure').append('<img src="images/design_SNS03_1.jpg" alt="SNS 디자인" class="designSNS">');
                $('#designShow figure').append('<img src="images/design_SNS03_2.jpg" alt="SNS 디자인" class="designSNS">');
                $('#designShow figure').append('<img src="images/design_SNS03_3.jpg" alt="SNS 디자인" class="designSNS">');
                $('#designShow figure').append('<img src="images/design_SNS03_4.jpg" alt="SNS 디자인" class="designSNS">');
                $('#designShow figure').append('<img src="images/design_SNS03_5.jpg" alt="SNS 디자인" class="designSNS">');
                $('#designShow figure').append('<img src="images/design_SNS03_6.jpg" alt="SNS 디자인" class="designSNS">');
                $('#designShow figure').append('<img src="images/design_SNS03_7.jpg" alt="SNS 디자인" class="designSNS">');
            }
        }


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
        else if(imgName=="SNS"){
            var imgName = "SNS(광고)";
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
        else if(a==".designSNS"){
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
