function setCountDownTime(time) {
    let time = time | 60;
    let timeStop = setInterval(function () {
      time--;
      if (time <= 0) {
        clearInterval(timeStop);
        return false;
      } else {
        console.log(time);
        return time;
      }
    });
}

// bind time to your data
