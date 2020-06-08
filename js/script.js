$('.banner_slider').slick({
    dots: false
});

$('.wrap1').ready(function () {
    $('.wrap1-img2').hide();
    $('.wrap1-img3').hide();
    
    $('.wrap1-btn2').click(function () {
        $('.wrap1-img1').hide();
        $('.wrap1-img3').hide();
        $('.wrap1-img2').toggle(1);
        $('.wrap1-btn2').click(function () {
            $('.wrap1-img2').fadeIn();
        });
    });
    $('.wrap1-btn1').click(function () {
        $('.wrap1-img2').hide();
        $('.wrap1-img3').hide();
        $('.wrap1-img1').toggle(1);
        $('.wrap1-btn1').click(function () {
            $('.wrap1-img1').fadeIn();
        });
    });
    $('.wrap1-btn3').click(function () {
        $('.wrap1-img1').hide();
        $('.wrap1-img2').hide();
        $('.wrap1-img3').toggle(1);
        $('.wrap1-btn3').click(function () {
            $('.wrap1-img3').fadeIn();
        });
    });
});

$('.wrap2').ready(function () {
    // $('.wrap2-img2').hide();
    
    // $('.wrap2-btn1').click(function () {
    //     // $('.wrap2-img1').hide();
    //     $('.wrap2-img1').toggle(1);
    //     $('.wrap2-btn1').click(function () {
    //         $('.wrap2-img1').fadeIn();
    //     });
    // });
});

$('.wrap3').ready(function () {
    $('.wrap3-img2').hide();
    $('.wrap3-img3').hide();
    $('.wrap3-img4').hide();
    $('.wrap3-img5').hide();
    $('.wrap3-img6').hide();
    
    $('.wrap3-btn2').click(function () {
        $('.wrap3-img1').hide();
        $('.wrap3-img3').hide();
        $('.wrap3-img4').hide();
        $('.wrap3-img5').hide();
        $('.wrap3-img6').hide();
        $('.wrap3-img2').toggle(1);
        $('.wrap3-btn2').click(function () {
            $('.wrap3-img2').fadeIn();
        });
    });
    $('.wrap3-btn1').click(function () {
        $('.wrap3-img2').hide();
        $('.wrap3-img3').hide();
        $('.wrap3-img4').hide();
        $('.wrap3-img5').hide();
        $('.wrap3-img6').hide();
        $('.wrap3-img1').toggle(1);
        $('.wrap3-btn1').click(function () {
            $('.wrap3-img1').fadeIn();
        });
    });
    $('.wrap3-btn3').click(function () {
        $('.wrap3-img1').hide();
        $('.wrap3-img2').hide();
        $('.wrap3-img4').hide();
        $('.wrap3-img5').hide();
        $('.wrap3-img6').hide();
        $('.wrap3-img3').toggle(1);
        $('.wrap3-btn3').click(function () {
            $('.wrap3-img3').fadeIn();
        });
    });
    $('.wrap3-btn4').click(function () {
        $('.wrap3-img1').hide();
        $('.wrap3-img2').hide();
        $('.wrap3-img3').hide();
        $('.wrap3-img5').hide();
        $('.wrap3-img6').hide();
        $('.wrap3-img4').toggle(1);
        $('.wrap3-btn4').click(function () {
            $('.wrap3-img4').fadeIn();
        });
    });
    $('.wrap3-btn5').click(function () {
        $('.wrap3-img1').hide();
        $('.wrap3-img2').hide();
        $('.wrap3-img3').hide();
        $('.wrap3-img4').hide();
        $('.wrap3-img6').hide();
        $('.wrap3-img5').toggle(1);
        $('.wrap3-btn5').click(function () {
            $('.wrap3-img5').fadeIn();
        });
    });
    $('.wrap3-btn6').click(function () {
        $('.wrap3-img1').hide();
        $('.wrap3-img2').hide();
        $('.wrap3-img3').hide();
        $('.wrap3-img5').hide();
        $('.wrap3-img4').hide();
        $('.wrap3-img6').toggle(1);
        $('.wrap3-btn6').click(function () {
            $('.wrap3-img6').fadeIn();
        });
    });
});

$('.wrap4').ready(function () {
    $('.wrap4-img2').hide();
    $('.wrap4-img3').hide();
    
    $('.wrap4-btn2').click(function () {
        $('.wrap4-img1').hide();
        $('.wrap4-img3').hide();
        $('.wrap4-img2').toggle(1);
        $('.wrap4-btn2').click(function () {
            $('.wrap4-img2').fadeIn();
        });
    });
    $('.wrap4-btn1').click(function () {
        $('.wrap4-img2').hide();
        $('.wrap4-img3').hide();
        $('.wrap4-img1').toggle(1);
        $('.wrap4-btn1').click(function () {
            $('.wrap4-img1').fadeIn();
        });
    });
    $('.wrap4-btn3').click(function () {
        $('.wrap4-img1').hide();
        $('.wrap4-img2').hide();
        $('.wrap4-img3').toggle(1);
        $('.wrap4-btn3').click(function () {
            $('.wrap4-img3').fadeIn();
        });
    });
});

$(function(){
    $("a[href^='#']").click(function(){
            var _href = $(this).attr("href");
            $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
            return false;
    });
});


$('[data-modal=consultation]').on('click', function() {
    $('.overlay, #consultation').fadeIn('slow');
});
$('.modal__close').on('click', function() {
    $('.overlay, #consultation, #thanks, #order').fadeOut('slow')
});


$('.button_mini').each(function(i) {
    $(this).on('click', function() {
        $('#order .modal__descr').text($('.catalog-item__subtittle').eq(i).text());
        $('.overlay, #order').fadeIn('slow');
    })
});

function valideForms(form){
    $(form).validate({
        rules: {
            name: {
                required: true,
                minlength: 2
            },
            phone: "required",
            email: {
                required: true,
                email: true
            }
        },
        messages: {
            name: {
                required: "Пожалуйста, введите свое имя",
                minlength: jQuery.validator.format("Введите {0} символов!")
              },
            phone: "Пожалуйста, введите свой номер телефона",
            email: {
                required: "Пожалуйста, введите свою почту",
                email: "Неверно введен адрес почты"
            }
        }
    });
};

valideForms('#consultation-form');
valideForms('#consultation form');
valideForms('#order form');

$('input[name=phone]').mask("+7 (999) 999-9999");

$('form').submit(function(e) {
    e.preventDefault();
    $.ajax({
        type: "POST",
        url: "mailer/smart.php",
        data: $(this).serialize()
    }).done(function() {
        $(this).find("input").val("");
        $('#consultation, #order').fadeOut();
        $('.overlay, #thanks').fadeIn('slow');

        $('form').trigger('reset');
    });
    return false;
});




