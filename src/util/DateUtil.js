export const getDate = () => {
  const diff = new Date().getTimezoneOffset() * 60 * 1000;
  return new Date(Date.now() - diff);
};

export const getFormattedNowTime = () => {
  const nowISOstring = getDate().toISOString();
  const array = nowISOstring.split(":");
  const sliced = array.slice(0, 2);
  return sliced.join(":");
};

export const millSecToMin = (millSec) => {
  return millSec / 60 / 1000;
};

export const convertUnixTime = (stringTime) => {
  const time = new Date(stringTime).getTime();
  return time;
};
