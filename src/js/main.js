window.onload = function () {

    // play-gif-wrap play-gif-wrap--loading
    
    // выбираем все необходимые изображения
    var picture = document.querySelectorAll('img.play-gif');

    // в цикле для каждого изображения вызываем необходимую функцию
    for (var i = 0; i < picture.length; i++) {
        // футлция отсдеживает склик по нужному элементу меняет значение атрибута src на значение атрибута data-src
        div = createWrapButton (picture[i]);
        playGifImg(picture[i], div);
    }

    function playGifImg(element, div) {
        // отслеживаем клик
        div.querySelector('button').addEventListener('click', function () {
            // если есть атрибут data-src
            if (element.getAttribute('data-src')) {
                // обновляем/добавляем атрибут src
                element.src = element.getAttribute('data-src');
                // удаляем атрибут data-src
                element.removeAttribute('data-src');
                // если есть атрибут data-srcset
                if (element.getAttribute('data-srcset')) {
                    // обновляем/добавляем атрибут srcset
                    element.setAttribute('srcset', element.getAttribute('data-srcset'));
                    // удаляем атрибут data-src
                    element.removeAttribute('data-srcset');
                }

                div.querySelector('button').remove();
                div.classList.add('play-gif-wrap--loading');

                element.onload = function () {
                    div.classList.add('play-gif--wrap');
                    div.classList.remove('play-gif-wrap');
                };

            }
        });
    }

    function createWrapButton (img) {
        var div = document.createElement('div');
        div.classList.add('play-gif-wrap');

        var parentElement = img.parentNode;
        parentElement.insertBefore(div, img);

        div.appendChild(img);

        var button = document.createElement('button');
        
        button.setAttribute('aria-label', img.getAttribute('data-aria') || 'Play to gif');

        div.appendChild(button);

        return div;
    }
};