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

    const days = Math.floor(delta / (1000 * 60 * 60 * 24));
    const hours = Math.floor((delta % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((delta % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.round((delta % (1000 * 60)) / 1000);

    if (delta > 0) {
      this.#updateData({ days, hours, minutes, seconds });
    } else {
      this.stop();
    }
  }

  #updateData({ days = 0, hours = 0, minutes = 0, seconds = 0 } = {}) {
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

    this.#calculateData(year);
    this.#intervalId = setInterval(() => this.#calculateData(year), 1000);
  }

  stop() {
    clearInterval(this.#intervalId);
    this.#updateData();
  }

  static formatValue(value) {
    return value.toString().padStart(2, '0');
  }

  static isDateValid(dateString) {
    return !isNaN(Date.parse(dateString));
  }
}

// markup
const ACTION = {
  START: 'start',
  STOP: 'stop',
};
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
  submitBtn: document.querySelector('form.countdown__actions button[type="submit"]'),
  yearField: document.querySelector('form.countdown__actions input[name="year"]'),
  days: document.querySelector('.countdown__days'),
  hours: document.querySelector('.countdown__hours'),
  minutes: document.querySelector('.countdown__minutes'),
  seconds: document.querySelector('.countdown__seconds'),
};

ref.actionForm.addEventListener('submit', (e) => {
  e.preventDefault();

  if (e.currentTarget.dataset.action === ACTION.START) {
    countdown.start(ref.yearField.value);
    setFormToStopMode();
  } else {
    countdown.stop();
    setFormToStartMode();
  }
});

function setFormToStartMode() {
  ref.actionForm.dataset.action = ACTION.START;
  ref.submitBtn.textContent = ACTION.START;
  ref.yearField.disabled = false;
}

function setFormToStopMode() {
  ref.actionForm.dataset.action = ACTION.STOP;
  ref.submitBtn.textContent = ACTION.STOP;
  ref.yearField.disabled = true;
}

function onCountdownChange(params) {
  ref.days.textContent = params.days;
  ref.hours.textContent = params.hours;
  ref.minutes.textContent = params.minutes;
  ref.seconds.textContent = params.seconds;

  const isDataReset = Object.values(params).join('').replace(/0/g, '').length === 0;
  if (isDataReset) {
    setFormToStartMode();
  }
}
