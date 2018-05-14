module.exports = (req, res, next) => {
    const date = new Date();
    let h = date.getHours();
    let m = date.getMinutes();
    if (h < 10) {
      h = '0' + h;
    }
    if (m < 10) {
      m = '0' + m;
    }
    // Example: 10:33 GET request on /api/test
    console.log(h + ':'+ m + ' '+ req.method + " request on " + req.url);
    next();
  }