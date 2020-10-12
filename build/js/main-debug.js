window.onload = function () {

    // play-gif-wrap play-gif-wrap--loading

    // выбираем все необходимые изображения
    var picture = document.querySelectorAll('img.play-gif');

    // в цикле для каждого изображения вызываем необходимую функцию
    for (var i = 0; i < picture.length; i++) {
        // создаем инлайн-блок и кнопку, кнопку и изображение помещаем в инлайн блок
        div = createWrapButton(picture[i]);
        // футлция отсдеживает склик по нужному элементу 
        // меняет значение атрибута src на значение атрибута data-src
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
                // удаляем кноку
                div.querySelector('button').remove();
                // показываем пользователю что идет загрузка анимации
                div.classList.add('play-gif-wrap--loading');

                // по завершению загрузки анимации
                element.onload = function () {
                    // убираем затемненый, прозрачный фон
                    div.classList.add('play-gif--wrap');
                    // делаем обвертку просто инлайновой
                    div.classList.remove('play-gif-wrap');
                };
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
};