const fs = require('fs');
const origReaddir = fs.readdirSync;
fs.readdirSync = function(...args) {
  for (let i = 0; i < 10; i++) {
    try { return origReaddir.apply(this, args); }
    catch(e) { if (e.code === 'EAGAIN') { continue; } throw e; }
  }
  throw new Error('EAGAIN after 10 retries');
};
const origReaddirCb = fs.readdir;
fs.readdir = function(...args) {
  const callback = args[args.length - 1];
  if (typeof callback === 'function') {
    let retries = 0;
    const retryCb = (err, result) => {
      if (err && err.code === 'EAGAIN' && retries < 10) {
        retries++;
        origReaddirCb.apply(fs, args);
      } else {
        callback(err, result);
      }
    };
    args[args.length - 1] = retryCb;
  }
  return origReaddirCb.apply(this, args);
};
