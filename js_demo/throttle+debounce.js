function throttle(fn, timeout) {
  var time = Date.now();
  timeout = timeout || 200;
  return function() {
    if(Date.now() - time > timeout) {
      fn.apply(this, arguments);
      time = Date.now();
    }
  }
}

function throttle2(fn, threshhold, scope) {
  threshhold || (threshhold = 250);
  var last,
      deferTimer;
  return function () {
    var context = scope || this;

    var now = +new Date,
        args = arguments;
    if (last && now < last + threshhold) {
      // hold on to it
      clearTimeout(deferTimer);
      deferTimer = setTimeout(function () {
        last = now;
        fn.apply(context, args);
      }, threshhold);
    } else {
      last = now;
      fn.apply(context, args);
    }
  };
}

function debounce(fn, timeout) {
  var timer;
  timeout = timeout || 200;

  var later = function() {
    fn.apply(this, arguments);
  }

  return function() {
    clearTimeout(timer);
    timer = setTimeout(later, timeout);
  }
}

var init = Date.now()

window.addEventListener('mousemove', throttle2(function() { 
  console.log('throttle: ', Date.now() - init) 
}, 200), false);

window.addEventListener('scroll', debounce(function() { 
  console.log('debounce: ', Date.now() - init) 
}, 200), false);
