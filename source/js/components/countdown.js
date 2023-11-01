const countDownDate = new Date("dec 10, 2023 23:37:25").getTime();
const items = document.querySelectorAll('.h2o-timer');

function formatedValue(value, countValue) {
    return value < countValue ? '0' + value : '' + value
}

items.forEach(function(item){
  const daysText = item.querySelector('.h2o-timer__days');
  const minutesText = item.querySelector('.h2o-timer__minutes');
  const hoursText = item.querySelector('.h2o-timer__hours');
  const secondsText = item.querySelector('.h2o-timer__seconds');

  const x = setInterval(function() {

    const now = new Date().getTime();
    const distance = countDownDate - now;
  
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
    daysText.innerText = formatedValue(days,10);
    hoursText.innerText = formatedValue(hours,10);
    minutesText.innerText = formatedValue(minutes, 10);
    secondsText.innerText = formatedValue(seconds, 10);

    // item.innerHTML = formatedValue(days,10) + " " + formatedValue(hours,10) + " "
    // + formatedValue(minutes, 10)  + " " + formatedValue(seconds, 10) + " ";
  
    // if (distance < 0) {
    //   clearInterval(x);
    //   item.innerHTML = "EXPIRED";
    // }
  }, 1000);
})

