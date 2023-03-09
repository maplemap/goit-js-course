class Countdown {
  #intervalId = null;

  #days = 0;
  #hours = 0;
  #minutes = 0;
  #seconds = 0;

  #onChangeCallback = () => {};

  constructor({ onChange } = {}) {
    if (onChange) {
      this.#onChangeCallback = onChange;
    }
  }

  #calculateData(year) {
    const delta = new Date(year, 0) - Date.now();
    // const delta = year - Date.now();

    console.log(delta);

    if (delta > 0) {
      const days = Math.floor(delta / (1000 * 60 * 60 * 24));
      const hours = Math.floor((delta % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((delta % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((delta % (1000 * 60)) / 1000);

      console.log({ days, hours, minutes, seconds });
      this.#updateData({ days, hours, minutes, seconds });
    } else {
      this.stop();
    }
  }

  #updateData({ days, hours, minutes, seconds }) {
    this.#days = days;
    this.#hours = hours;
    this.#minutes = minutes;
    this.#seconds = seconds;

    this.#onChangeData();
  }

  #onChangeData() {
    this.#onChangeCallback({
      days: Countdown.formatValue(this.#days),
      hours: Countdown.formatValue(this.#hours),
      minutes: Countdown.formatValue(this.#minutes),
      seconds: Countdown.formatValue(this.#seconds),
    });
  }

  start(year) {
    const isStartDateValid = Countdown.isDateValid(year);
    if (!isStartDateValid) {
      console.error('"year" is not a valid date');
      return;
    }

    // const date = Date.now() + 4000;
    this.#calculateData(year);
    this.#intervalId = setInterval(() => this.#calculateData(year), 1000);
  }

  stop() {
    clearInterval(this.#intervalId);
  }

  static formatValue(value) {
    return value.toString().padStart(2, '0');
  }

  static isDateValid(dateString) {
    return !isNaN(Date.parse(dateString));
  }
}

// markup
const markup = `
  <section class="countdown">
      <article id="js-countdown" class="countdown__timer">
          <section class="countdown__value countdown__days">00</section>
          <section class="countdown__value">:</section>
          <section class="countdown__value countdown__hours">00</section>
          <section class="countdown__value">:</section>
          <section class="countdown__value countdown__minutes">00</section>
          <section class="countdown__value">:</section>
          <section class="countdown__value countdown__seconds">00</section>
      </article>
      <form class="countdown__actions" data-action="start">
        <input class="countdown__datepicker" type="number" min="2024" max="2099" name="year" step="1" value="2024" />
        <button type='submit' class="countdown__toggle">start</button>
      </form>
  </section>
`;

// add to DOM
document.body.innerHTML = markup;
const countdown = new Countdown({ onChange: onCountdownChange });

//add refs
const ref = {
  actionForm: document.querySelector('form.countdown__actions'),
  days: document.querySelector('.countdown__days'),
  hours: document.querySelector('.countdown__hours'),
  minutes: document.querySelector('.countdown__minutes'),
  seconds: document.querySelector('.countdown__seconds'),
};

ref.actionForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const submitBtn = e.currentTarget.querySelector('button[type="submit"]');
  const { year, dataset } = e.currentTarget;

  if (e.currentTarget.dataset.action === 'start') {
    submitBtn.textContent = 'stop';
    dataset.action = 'stop';
    year.disabled = true;

    countdown.start(year.value);
  } else {
    submitBtn.textContent = 'start';
    dataset.action = 'start';
    year.disabled = false;

    countdown.stop();
  }
});

function onCountdownChange({ days, hours, minutes, seconds }) {
  ref.days.textContent = days;
  ref.hours.textContent = hours;
  ref.minutes.textContent = minutes;
  ref.seconds.textContent = seconds;
}
