// https://ru.hexlet.io/courses/js-object-oriented-design/lessons/configuration/exercise_unit

const hasNumber = (string) => (string.search(/\d/) !== -1);

// BEGIN (write your solution here)
export default class PasswordValidator {
  constructor(options = {}) {
    const defaultOptions = {
      minLength: 8,
      containNumbers: true,
    };

    this.options = { ...defaultOptions, ...options };
  }

  validate(password) {
    const errors = {};

    if (password.length < this.options.minLength) {
      errors.minLength = 'too small';
    }

    if (this.options.containNumbers) {
      if (!hasNumber(password)) {
        errors.containNumbers = 'should contain at least one number';
      }
    }

    return errors;
  }
}

// END
