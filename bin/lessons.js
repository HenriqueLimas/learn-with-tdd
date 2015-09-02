var jsLogo = require('./js-logo');
var chalk = require('chalk');

module.exports = {
  js: {
    logo: jsLogo,
    welcome: chalk.cyan.bold('Welcome to Javascript Course'),
    lesson1: {
      files: ['lesson-01/*.js'],
      lessonNumber: chalk.bold('Lesson 01'),
      title: chalk.bold('Variables')
    },
    lesson2: {
      files: ['lesson-02/*.js'],
      lessonNumber: chalk.bold('Lesson 02'),
      title: chalk.bold('Objects')
    },
    lesson3: {
      files: ['lesson-03/*.js'],
      lessonNumber: chalk.bold('Lesson 03'),
      title: chalk.bold('Strings')
    },
    lesson4: {
      files: ['lesson-04/*.js'],
      lessonNumber: chalk.bold('Lesson 04'),
      title: chalk.bold('Numbers')
    },
    lesson5: {
      files: ['lesson-05/*.js'],
      lessonNumber: chalk.bold('Lesson 05'),
      title: chalk.bold('If-else')
    },
    lesson6: {
      files: ['lesson-06/*.js'],
      lessonNumber: chalk.bold('Lesson 06'),
      title: chalk.bold('Array (part 1)')
    },
    lesson7: {
      files: ['lesson-07/*.js'],
      lessonNumber: chalk.bold('Lesson 07'),
      title: chalk.bold('Loops')
    },
    lesson8: {
      files: ['lesson-08/*.js'],
      lessonNumber: chalk.bold('Lesson 08'),
      title: chalk.bold('Functions')
    },
    lesson9: {
      files: ['lesson-09/*.js'],
      lessonNumber: chalk.bold('Lesson 09'),
      title: chalk.bold('Array (part 2)')
    },
    lesson10: {
      files: ['lesson-10/*.js'],
      lessonNumber: chalk.bold('Lesson 10'),
      title: chalk.bold('Array (part 3)')
    },
  }
};
