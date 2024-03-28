function validateEmail(email) {
  const regex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
  return regex.test(email);
}

console.log(validateEmail('jane.doe@domain.org'));
console.log(validateEmail('invalid-email'));
console.log(validateEmail('user@domain'));
console.log(validateEmail('john@example.com'));
console.log(validateEmail('@domain.com'));

module.exports = validateEmail;
