function timer() {
    let deadline = '2018-10-21';

    const getTimeRemaining = endtime => {
        const checkTime = i => {
            if (i < 10) { return i = "0" + i; } else { return i;}
        };
        
        let t = Date.parse(endtime) - Date.parse(new Date()),
            seconds = Math.floor((t / 1000) % 60),
            minutes = Math.floor((t / 1000 / 60) % 60),
            hours = Math.floor((t / (1000 * 60 * 60)));
    
        return {
            'total': t,
            'hours': checkTime(hours),
            'minutes': checkTime(minutes),
            'seconds': checkTime(seconds)
        };
    };
    
    const setClock = (id, endtime) => {
        let timer = document.getElementById(id),
            hours = timer.querySelector('.hours'),
            minutes = timer.querySelector('.minutes'),
            seconds = timer.querySelector('.seconds'),
            timeInterval = setInterval(updateClock, 1000);
    
        function updateClock() {
            let t = getTimeRemaining(endtime);
    
            hours.textContent = t.hours;
            minutes.textContent = t.minutes;
            seconds.textContent = t.seconds;
    
            if (t.total <= 0) {
                hours.textContent = '00';
                minutes.textContent = '00';
                seconds.textContent = '00';
                clearInterval(timeInterval);
            }
        }
    };
    setClock('timer', deadline);
}

export default timer;