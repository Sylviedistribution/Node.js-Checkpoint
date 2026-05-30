const generator = require('generate-password');

function genPassword() {
  const password = generator.generate({
    length: 12,
    numbers: true,
    symbols: true,
    uppercase: true,
    lowercase: true,
    strict: true
  });
  console.log('Generated password:', password);
  return password;
}

if (require.main === module) genPassword();

module.exports = { genPassword };
