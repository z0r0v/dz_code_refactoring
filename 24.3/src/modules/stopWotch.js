let differenceMilliseconds = 0;
let totalSecondsDifference = 0;
let differenceSeconds = 0;


const runTime = (element, startTime) => {
  differenceMilliseconds = new Date().getTime() - startTime;
  differenceSeconds =
    Math.round(differenceMilliseconds / 1000) + totalSecondsDifference;
  let seconds = parseInt(differenceSeconds % 60);
  let minutes = parseInt((differenceSeconds / 60) % 60);
  let hours = parseInt((differenceSeconds / 3600) % 60);
  if (seconds < 10) {
    seconds = `0${seconds}`;
  }
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  if (hours < 10) {
    hours = `0${hours}`;
  }
  element.innerText =`${hours}:${minutes}:${seconds}`;
};

function StopWotch() {}

StopWotch.prototype.init = function(element, startTime) {
  setInterval(()=>{runTime(element, startTime)}, 1000);
};

export {StopWotch};

