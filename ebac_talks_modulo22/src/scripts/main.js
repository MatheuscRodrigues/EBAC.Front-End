AOS.init();

const eventDate = new Date("Feb 14, 2024 20:00:00");
const eventTimeStamp = eventDate.getTime();

const eventTime = setInterval(function() {
    const currentTimeStamp = new Date().getTime()

    const timeOfEvent = eventTimeStamp - currentTimeStamp;

    const minuteInMs = 1000 * 60 // Um minuto possui 60s, 1s possui 1000ms, então realizando a multiplicação consigo o valor em MS de um minuto.
    const hourInMs = minuteInMs * 60
    const dayInMs = hourInMs * 24

    const daysForEvent = Math.floor(timeOfEvent / dayInMs);
    const hoursForEvent = Math.floor((timeOfEvent % dayInMs) / hourInMs);
    const minutesForEvent = Math.floor((timeOfEvent % hourInMs) / minuteInMs);
    const secondsForEvent = Math.floor((timeOfEvent % minuteInMs) / 1000);

    document.getElementById('counter').innerHTML = `O maior evento de tecnologia do Brasil começa em ${daysForEvent}d ${hoursForEvent}h ${minutesForEvent}m ${secondsForEvent}s`

    if(timeOfEvent < 0) {
        clearInterval(eventTime);
        document.querySelector('#counter').innerHTML = 'Em breve novas datas para o maior evento de tecnlogia do Brasil. Aguarde!';
        document.querySelector('.hero__info').classList.add('hero__info--afterEvent');
    }


}, 1000)