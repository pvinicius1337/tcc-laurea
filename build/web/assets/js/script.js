$('nav a').click(function (e) {
    e.preventDefault();
    var id = $(this).attr('href'),
            targetOffset = $(id).offset().top,
            menuHeight = $('nav').innerHeight();

    $('html, body').animate({
        scrollTop: targetOffset
    }, 500);
});




if (window.SimpleSlide) {
    new SimpleSlide({
        slide: "quote", // nome do atributo data-slide="principal"
        nav: true, // se deve ou não mostrar a navegação
        auto: true, // se o slide deve passar automaticamente
        time: 5000 // tempo de transição dos slides
    })
    new SimpleSlide({
        slide: "portfolio", // nome do atributo data-slide="principal"
        nav: true, // se deve ou não mostrar a navegação
        auto: true, // se o slide deve passar automaticamente
        time: 5000 // tempo de transição dos slides
    })
}
if (window.SimpleAnime) {
    new SimpleAnime();
}
