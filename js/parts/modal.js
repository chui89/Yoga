function modal() {
    let more = document.querySelector('.more'),
    overlay = document.querySelector('.overlay'),
    close = document.querySelector('.popup-close'),
    descriptionBtn = document.querySelectorAll('.description-btn'); 

    more.addEventListener('click', () => {showModal();});

    for (let i = 0; i < descriptionBtn.length; i++) {
        descriptionBtn[i].addEventListener('click', () => showModal());
    }

    const showModal = () => {
        overlay.style.display = 'block';
        overlay.classList.add('more-splash');
        document.body.style.overflow = 'hidden';
    };

    // Закрытие модального окна по клику на overlay
    overlay.addEventListener('click', function(event) {
        let target = event.target;
        if (target == overlay) {
            overlay.style.display = 'none';
            more.classList.remove('more-splash');        
            document.body.style.overflow = '';
        }
    });

    // Закрытие модального окна по кнопке Esc
    document.addEventListener('keydown', function(event) {
        if (event.which == 27) {
            overlay.style.display = 'none';
            more.classList.remove('more-splash');        
            document.body.style.overflow = '';   
        }    
    });

    // Закрытие модального окна по лику на крестик
    close.addEventListener('click', () => {
        overlay.style.display = 'none';
        more.classList.remove('more-splash');        
        document.body.style.overflow = '';   
    });

    let message = {
        loading: 'Загрузка...',
        success: 'Спасибо! Скоро мы с вами свяжемся',
        failure: 'Что-то пошло не так...'
    };

    let statusMessage = document.createElement('div'),
        body = document.querySelector('body'),
        phoneInput = document.getElementsByName('phone');

    for (let i = 0; i < phoneInput.length; i++) {
        phoneInput[i].addEventListener('input', function(event) {                
            let target = event.target;
            target.value = target.value.replace(/[^0-9+]/, '');
            // if (/^[+]{1}([0-9]{0,17})?$/.test(target.value)) {
            // } else {
            //     target.value = '';
            // }
        });
    }
    statusMessage.classList.add('status');

    const requestData = (target) => {
        let input = target.getElementsByTagName('input');
        target.appendChild(statusMessage);
        let request = new XMLHttpRequest();
        request.open('POST', 'server.php');
        request.setRequestHeader('Content-Type', 'application/json; charset=utf-8');

        let formData = new FormData(target);

        let obj = {};
        formData.forEach(function(value, key) {
            obj[key] = value;
        });
        let json = JSON.stringify(obj);

        request.send(json);

        request.addEventListener('readystatechange', function() {
            if (request.readyState < 4) {
                statusMessage.innerHTML = message.loading;
            } else if (request.readyState === 4 && request.status == 200) {
                statusMessage.innerHTML = message.success;
            } else {
                statusMessage.innerHTML = message.failure;
            }
        });
        for(let j = 0; j < input.length; j++) {
            input[j].value = '';
        }        
    };

    body.addEventListener('submit', function(event) {
        event.preventDefault();        
        let target = event.target;
        
        if ((target.classList = 'main-form') || (target.id = 'form')) {
            requestData(target);
        } else {
            return target;
        }
    });
}

export default modal;