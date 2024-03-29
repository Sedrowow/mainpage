import "./rxcss.min.js";
import "./Rx.min.js";

const timeElm = document.getElementById("time");
const doc = document.documentElement;
const { clientWidth, clientHeight } = doc;

const pad = (val) => (val < 10 ? `0${val}` : val);

const time$ = Rx.Observable.interval(1000)
  .map(() => {
    const time = new Date();

    return {
      hours: time.getHours(),
      minutes: time.getMinutes(),
      seconds: time.getSeconds(),
    };
  })
  .subscribe(({ hours, minutes, seconds }) => {
    timeElm.setAttribute("data-hours", pad(hours));
    timeElm.setAttribute("data-minutes", pad(minutes));
    timeElm.setAttribute("data-seconds", pad(seconds));
  });

const mouse$ = Rx.Observable.fromEvent(document, "mousemove").map(
  ({ clientX, clientY }) => ({
    x: (clientWidth / 2 - clientX) / clientWidth,
    y: (clientHeight / 2 - clientY) / clientHeight,
  })
);

RxCSS(
  {
    mouse: Rx.Observable.interval(0, Rx.Scheduler.animationFrame)
      .withLatestFrom(mouse$, (_, m) => m)
      .scan(RxCSS.lerp(0.1)),
  },
  timeElm
);
