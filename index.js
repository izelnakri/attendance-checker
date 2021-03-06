const readline = require('readline'),
      async = require('async');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

var students = [
  'Jessica', 'Marie', 'William', 'Zahra', 'Marco', 'Mike', 'Kevin', 'Isis', 'Ela', 'Lorenzo'
  ],
  attendingStudents = [];

async.eachSeries(students, askAttendance, (error) => {
  console.log('Attending students are: ');

  attendingStudents.forEach((attendingStudent) => {
    console.log(attendingStudent);
  });

  rl.close();
});

function askAttendance(student, callback) {
  rl.question('Is ' + student + ' attending? ', (answer) => {
    if (answer === 'yes' || answer === 'y') {
      attendingStudents.push(student);
    }

    callback();
  });
}
