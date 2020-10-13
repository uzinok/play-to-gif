window.onload = function () {

    // play-gif-wrap play-gif-wrap--loading

    // выбираем все необходимые изображения
    var picture = document.querySelectorAll('.play-gif');

    // в цикле для каждого изображения вызываем необходимую функцию
    for (var i = 0; i < picture.length; i++) {
        if (picture[i].tagName == 'IMG') {
            // создаем инлайн-блок и кнопку, кнопку и изображение помещаем в инлайн блок
            div = createWrapButton(picture[i]);
            // футлция отсдеживает склик по нужному элементу 
            // меняет значение атрибута src на значение атрибута data-src
            playGifImg(picture[i], div, false);
        } else if (picture[i].tagName == 'PICTURE') {
            // создаем инлайн-блок и кнопку, кнопку и изображение помещаем в инлайн блок
            div = createButton(picture[i]);
            // футлция отсдеживает склик по нужному элементу 
            // меняет значение атрибута src на значение атрибута data-src
            playGifImg(div.querySelector('img'), div, true);
        }
    }

    function playGifImg(element, div, bol) {
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
                // удаляем кноку устаревшим способом для кроссбраузерности
                div.removeChild(div.querySelector('button'));
                // показываем пользователю что идет загрузка анимации
                div.classList.add('play-gif-wrap--loading');

                // по завершению загрузки анимации
                element.onload = function () {
                    // убираем затемненый, прозрачный фон
                    div.classList.remove('play-gif-wrap');
                    // убираем анимацию загрузки
                    div.classList.remove('play-gif-wrap--loading');
                    // делаем обвертку просто инлайновой
                    div.classList.add('play-gif--wrap');
                };

            }
            if (bol) {
                var sourse = div.querySelectorAll('source');

                for (var i = 0; i < sourse.length; i++) {
                    if (sourse[i].getAttribute('data-srcset')) {
                        sourse[i].setAttribute('srcset', sourse[i].getAttribute('data-srcset'));
                    }
                }
            }
        });
    }

    function createWrapButton(img) {
        // создаем обвертку
        var div = document.createElement('div');
        // добавляем класс для затемненного фона и позиционирования кнопки
        div.classList.add('play-gif-wrap');

        // для кроссбраузерности используем insertBefore
        // получаем родителя
        var parentElement = img.parentNode;
        // добавляем div перед изображением
        parentElement.insertBefore(div, img);

        // внутрь дива переносим изображение
        div.appendChild(img);

        // создаем кнопку
        var button = document.createElement('button');

        // добавляем для доступности aria-label
        button.setAttribute('aria-label', img.getAttribute('data-aria') || 'Play to gif');

        // в div вставляем кнопку
        div.appendChild(button);

        // возврашаем див для дальнейшей работы
        return div;
    }

    function createButton(picture) {
        picture.classList.add('play-gif-wrap');

        // создаем кнопку
        var button = document.createElement('button');

        // добавляем для доступности aria-label
        button.setAttribute('aria-label', picture.querySelector('img').getAttribute('data-aria') || 'Play to gif');

        // в div вставляем кнопку
        picture.appendChild(button);

        return picture;
    }
};