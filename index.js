function pad(value) {
  return String(value).padStart(2, "0");
}

class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.selector = selector;
    this.targetDate = targetDate;
    this.timerVal = document.querySelector(selector);
    this.daysVal = this.timerVal.querySelector('span[data-value="days"]');
    this.hoursVal = this.timerVal.querySelector('span[data-value="hours"]');
    this.minsVal = this.timerVal.querySelector('span[data-value="mins"]');
    this.secsVal = this.timerVal.querySelector('span[data-value="secs"]');

    let timerId = setInterval(() => {
      const time = this.targetDate - new Date();
      const days = pad(Math.floor(time / (1000 * 60 * 60 * 24)));
      const hours = pad(
        Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      );
      const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
      const secs = pad(Math.floor((time % (1000 * 60)) / 1000));

      this.daysVal.textContent = `${days}`;
      this.hoursVal.textContent = `${hours}`;
      this.minsVal.textContent = `${mins}`;
      this.secsVal.textContent = `${secs}`;

      if (time < 1) {
        clearInterval(timerId);
      }
    }, 1000);
  }
}

new CountdownTimer({
  selector: "#timer-1",
  targetDate: new Date("August 13, 2021"),
});
