//تفعيل التول توب
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));
// اظهار و اخفاء صندوف الغات
$(".language-nav").hover(function () {
        $(".dropdown-menu").fadeIn().addClass("show");
    }, function () {
        $(".dropdown-menu").fadeOut().removeClass("show");
    }
);
// فتح صندوق المستخدم الذي يحتوي على تسجيل عضو او اعدادات ... الخ
$(".img-user").click(function () {
        if($(this).hasClass("active")){
           $(this).removeClass("active");
           $(".user-info").slideUp(); 
        }else{
           $(this).addClass("active");
           $(".user-info").slideDown();
        } 
    }
);
$(".user-info").hover(function () {},
    function () {
        $(".user-info").slideUp(); 
        $(".img-user").click();
    }
);
// اظهار و اخفاء بلاس هولدر الانبت البحث
var x;
$(".search input").focus(function (e) { 
    e.preventDefault();
    x = $(this).attr('placeholder');
    $(this).attr('placeholder', '');
});
$(".search input").blur(function (e) { 
    e.preventDefault();
    $(this).attr('placeholder', x);
});
//وضع اكتف على الناف الادنى 
$(".nav-box li").click(function(){
    $(this).addClass("active").siblings().removeClass("active");
})
//اظهار و اخفااء صناديق الخاصة ب الناف الادنى
$(".btn-show").hover(function () {
        $(this).find("."+$(this).data('x')).addClass("active");
    }, function () {
        $(this).find("."+$(this).data('x')).removeClass("active");
    }
);
// هذا خاص بانماشن الايكون
$(".hamburger").hover(function () {    
        $(this).addClass("is-active")
    }, function () {
        $(this).removeClass("is-active")
    }
);
//اظهار و اخفاء المنيو 
$(".item-slider div span").click(function(){
    if($(this).hasClass("active")){
        $(this).parents('li.item-slider').find("ul").slideUp();
        $(this).removeClass("active"); 
    }else{
      $(".item-slider ul").slideUp();
      $(".item-slider div span").removeClass("active");
      $(this).parents('li.item-slider').find("ul").slideDown(); 
      $(this).addClass("active"); 
    }  
});
// خاص بجلب قيمة و وضعها في انبت 
$(".option-choose").click(function(){
   $(this).parents(".dropdown").find(".textbox").attr('value' , $(this).data('values') );
});
$(".dropdown").click(function(){
    $(this).toggleClass("active");
});

$(".main-carousel").hover(function () {
        $(".box-img img").addClass("animate__animated animate__rubberBand");
    }, function () {
        $(".box-img img").removeClass("animate__animated animate__rubberBand");
    }
);

$(".container-cards card").hover(function () {
    $(this).addClass("animate__animated animate__rubberBand");
}, function () {
    $(this).removeClass("animate__animated animate__rubberBand");
}
);