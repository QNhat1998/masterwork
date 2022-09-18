var btn = $('.backToTop');

$(window).scroll(function () {
    if ($(window).scrollTop() > 300) {
        btn.addClass('show');
    } else {
        btn.removeClass('show');
    }
});

btn.on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: 0 }, '300');
});

$(window).on("scroll", function () {
    var scroll = $(window).scrollTop();

    if (scroll >= 70) {
        $("#header-scroll").addClass("nav-fixed");
    } else {
        $("#header-scroll").removeClass("nav-fixed");
    }
});

// $(".counter").each(function () {
//     $(this)
//         .prop("Counter", 0)
//         .animate(
//             {
//                 Counter: $(this).text(),
//             },
//             {
//                 duration: 2000,
//                 easing: "swing",
//                 step: function (now) {
//                     now = Number(Math.ceil(now)).toLocaleString('en');
//                     $(this).text(now);
//                 },
//             }
//         );
// });

$(document).ready(function () {
    $(".counter").each(function () {
        var count = $(this);
        var countTo = count.attr('data-count');
        // console.log(countTo);
        $({countNum:count.text()}).animate({
                countNum:countTo,
            },
            {
     
                duration:3000,
                easing:'linear',
                step:function(){
                    count.text(Math.floor(this.countNum));
                },
                complete:function(){
                    count.text(this.countNum);
                }
            });
    });
});