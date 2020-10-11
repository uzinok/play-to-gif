window.onload = function () {
    // play-gif-wrap play-gif-wrap--loading
    var picture = document.querySelectorAll('.play-gif');

    for (var i = 0; i < picture.length; i++) {
        if (picture[i].querySelector('img')) {
            playGifPicture(picture[i]);
        } else {
            playGifImg(picture[i]);
        }
    }

    function playGifImg(element) {
        var button;
        if (element.querySelector('img')) {

        } else {
            var div = createDivButton(element);
            button = div.querySelector('button');
        }


        button.addEventListener('click', function () {
            div.classList.add('play-gif-wrap--loading');
            button.remove();
            element.src = element.getAttribute('data-src');
            element.removeAttribute('data-src');

            element.onload = function () {
                div.classList.remove('play-gif-wrap--loading');
                div.classList.remove('play-gif-wrap');
                div.classList.add('play-gif--wrap');
            };
        });
    }

    function playGifPicture(element) {
        playGifImg(element.querySelector('img'));

        element.addEventListener('click', function () {
            var source = element.querySelectorAll('source');

            for (var i = 0; i < source.length; i++) {
                if (source[i].getAttribute('data-srcset')) {
                    source[i].setAttribute('srcset', source[i].getAttribute('data-srcset'));
                    source[i].removeAttribute('data-srcset');
                }
            }
        });
    }

    function createDivButton(element) {
        var div = document.createElement('div');
        div.classList.add('play-gif-wrap');

        var button = document.createElement('button');
        button.setAttribute('aria-label', 'Play to gif');

        element.parentNode.insertBefore(div, element);

        div.appendChild(element);
        div.appendChild(button);

        return button, div;

    }
};