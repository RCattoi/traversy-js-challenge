const isValidIPv4 = (ip) => {
  const ipArray = ip.split('.');
  if (ipArray.length !== 4) return false;
  return ipArray.every((num) => {
    if (num.length > 1 && num[0] === '0') return false;
    return num >= 0 && num <= 255;
  });
};

isValidIPv4('1.2.3.4'); // true
isValidIPv4('123.45.67.89'); // true
isValidIPv4('1.2.3'); // false
isValidIPv4('1.2.3.4.5'); // false
isValidIPv4('123.456.78.90'); // false
isValidIPv4('123.045.067.089');
module.exports = isValidIPv4;
