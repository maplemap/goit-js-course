import Notiflix from 'notiflix';

class Notifier {
  constructor() {
    Notiflix.Notify.init({
      width: '80%',
      opacity: 1,
      fontSize: '16px',
      position: 'top',
      useIcon: false,
      borderRadius: '3px',
      fontFamily: 'Roboto Mono',
      info: {
        background: '#d7d7d7',
        textColor: '#333',
      },
    });
  }

  success(message) {
    Notiflix.Notify.success(message);
  }

  warning(message) {
    Notiflix.Notify.warning(message);
  }

  info(message) {
    Notiflix.Notify.info(message);
  }

  error(message) {
    Notiflix.Notify.failure(message);
  }
}

export default new Notifier();
