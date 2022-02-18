$(document).ready(function () {

    // Ползунок

    $(".point").on("click", function (e) {
        let getTotalPoints = $(".point").length,
            getIndex = $(this).index();
        getCompletedIndex = $(".point--active").index();
        $(".bar__fill").css("width", (getIndex - 1) / (getTotalPoints - 1) * 100 + '%'),
            $(".bar__fill-mobile").css("height", (getIndex - 1) / (getTotalPoints - 1) * 100 + '%')
        if (getIndex => getCompletedIndex) {
            $(".point--active").addClass("point--complete").removeClass("point--active");
            $(this).addClass("point--active");
            $(this).prevAll().addClass("point--complete");
            $(this).nextAll().removeClass("point--complete");
        }
    });

    function classFunction() {
        if ($('body').width() < 600) {
            $('.bar__fill').removeClass('bar__fill').addClass('bar__fill-mobile');
        }
        else {
            $('.bar__fill-mobile').removeClass('bar__fill-mobile').addClass('bar__fill');
        }
    }

    classFunction();
    $(window).resize(classFunction);


    // Слайдер

    $('.cooperation__slider').slick({
        dots: true,
        adaptiveHeight: true,
    });

    $('.slider__review').slick({
        dots: true,
        adaptiveHeight: true,
    });

    $('#showMore').on('click', function () {
        $('.dots').css('display', 'none');
        $('.more').css('display', 'inline');
        $('.slider__review').slick('setPosition');
        $('#showMore').css('display', 'none');
    })

    $('#showMore-second').on('click', function () {
        $('.dots-second').css('display', 'none');
        $('.more-second').css('display', 'inline');
        $('.slider__review').slick('setPosition');
        $('#showMore-second').css('display', 'none');
    })

    $('#showMore-third').on('click', function () {
        $('.dots-third').css('display', 'none');
        $('.more-third').css('display', 'inline');
        $('.slider__review').slick('setPosition');
        $('#showMore-third').css('display', 'none');
    })

    $('#showMore-fourth').on('click', function () {
        $('.dots-fourth').css('display', 'none');
        $('.more-fourth').css('display', 'inline');
        $('.slider__review').slick('setPosition');
        $('#showMore-fourth').css('display', 'none');
    })

    $('#showMore-fifth').on('click', function () {
        $('.dots-fifth').css('display', 'none');
        $('.more-fifth').css('display', 'inline');
        $('.slider__review').slick('setPosition');
        $('#showMore-fifth').css('display', 'none');
    })

    // Скролл к блокам

    $("[data-scroll]").on("click", function (event) {
        event.preventDefault();

        var $this = $(this)
        blockId = $this.data('scroll'),
            blockOffset = $(blockId).offset().top;

        $('nav a').removeClass('active');
        $this.addClass('active');

        $('html, body').animate({
            scrollTop: blockOffset
        }, 1000)
    })

    $().ready(function () {
        moment.locale('ru'),
            $('#dateCounter').text(moment().add(1, 'days').format('D MMMM'));
    });

    // Modal

    const modalCall = $('[data-modal]');
    const modalClose = $('[data-close]');

    modalCall.on('click', function (event) {

        event.preventDefault();

        let $this = $(this);
        let modalId = $this.data('modal');

        $(modalId).addClass('show')
    });

    modalClose.on('click', function (event) {

        event.preventDefault();

        let $this = $(this);
        let modalId = $this.data('modal');
        let modalParent = $this.parents(modalId);

        modalParent.removeClass('show');
    });

})

