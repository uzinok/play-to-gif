window.onload = function () {
    var picture = document.querySelectorAll('.play-gif');

    console.log(picture);

    picture.forEach(element => {
        if (element.querySelector('img')) {
            playGifPicture(element);
        } {
            playGifImg(element);
        }
    });

    function playGifImg(element) {
        element.addEventListener('click', function () {
            if (element.getAttribute('data-src')) {
                element.src = element.getAttribute('data-src');
                element.removeAttribute('data-src');

            } else {
                return false;
            }
        });
    }

    function playGifPicture(element) {
        var img = element.querySelector('img');
        playGifImg(img);

        element.addEventListener('click', function (){
            element.querySelectorAll('source').forEach(source => {
                if (source.getAttribute('data-srcset')) {
                    source.setAttribute('srcset', source.getAttribute('data-srcset'));
                    source.removeAttribute('data-srcset');
                }
            })
        });
    }
};