module.exports = timeInput => {
  const date = new Date(parseInt(timeInput));
  const h = new Date(date).getHours();
  const m = new Date(date).getMinutes();
  const s = new Date(date).getSeconds();
  return `${h >= 10 ? h : '0' + h}:${m >= 10 ? m : '0' + m}:${
    s >= 10 ? s : '0' + s
  }`;
};
