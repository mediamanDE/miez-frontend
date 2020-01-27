const getTimeFormate = require('./timeFormate');

module.exports = () => {
  const times = Array.from(document.getElementsByClassName('countdown'));
  setInterval(() => {
    times.forEach(elem => {
      const time = elem.getAttribute('data-src');
      const timeDiff = getTimeFormate(time - Date.now());
      elem.innerHTML = `${timeDiff} (${getTimeFormate(time)} Uhr)`;
    });
  }, 100);
};
