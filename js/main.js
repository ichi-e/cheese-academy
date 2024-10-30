// slick
$(function () {
    $('.slide').slick({
        autoplay: true,
        centerMode: true,
        centerPadding: '100px',
        slidesToShow: 3,
        autoplaySpeed: 2000,
        responsive: [{
            breakpoint: 767,
            settings: {
                slidesToShow: 1
            }
        }]
    });
});

// drawer menu
$(function () {
    $('.menu li a').on('click', function (event) {
        $('#menu-btn').prop('checked', false);
    });
});