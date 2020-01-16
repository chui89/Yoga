'use strict';

function calc() {

    let priceInputs = document.querySelectorAll('.counter-block-input'),
    persons = document.querySelectorAll('.counter-block-input')[0],
    restDays = document.querySelectorAll('.counter-block-input')[1],
    place = document.getElementById('select'),
    totalValue = document.getElementById('total'),
    personsSum = 0,
    daysSum = 0,
    total = 0;

    totalValue.innerHTML = 0;

    for (let i = 0; i < priceInputs.length; i++) {
        priceInputs[i].addEventListener('input', function(event) {
            let target = event.target;
            if (/^(?!0.*$)(?!,$)([0-9]{1,9})$/.test(target.value)) {
            } else {
                target.value = '';
            }
        });
    }

    persons.addEventListener('input', function() {
        personsSum = +this.value;
        total = (daysSum + personsSum) * 4000;

        if ( persons.value == '' || restDays.value == '') {
            totalValue.innerHTML = 0;
        } else {
            totalValue.innerHTML = total;
        }
    });

    restDays.addEventListener('input', function() {
        daysSum = +this.value;
        total = (daysSum + personsSum) * 4000;

        if ( persons.value == '' || restDays.value == '') {
            totalValue.innerHTML = 0;
        } else {
            totalValue.innerHTML = total;
        }
    });
}

export default calc;