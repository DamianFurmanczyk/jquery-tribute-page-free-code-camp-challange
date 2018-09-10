(function () {
    let prev,
        curr,
        showedonce = false,
        timeout;

    const $header = $('#header'),
        $nav = $header.find('#nav'),
        $window = $(window),
        $body = $('body');

    function stick(e) {
        const $this = $(this);

        curr = $this.scrollTop();

        if (prev) {

            if (curr > $header.height() && prev > curr) {

                $nav.addClass('sticky');

                timeout = setTimeout(function () {
                    $nav.addClass('showed');
                }, 10);

                $('[href="#header"]').text('toTop');

                showedonce = true;
            } else {
                $nav.removeClass('sticky showed');
                $('[href="#header"]').text('jQuery');
            }

        }

        prev = $this.scrollTop();
    }

    function smoothScroll(e) {

        const obj = $(this).attr('href');
        if (!obj) {
            return false;
        }
        const dest = $(obj).offset().top;

        $('body').animate({
                'scrollTop': dest
            },
            300,
            'swing'
        );

        e.preventDefault();
    }

    $body.on('click', 'a', smoothScroll);

    $window.on('scroll', stick);

})();