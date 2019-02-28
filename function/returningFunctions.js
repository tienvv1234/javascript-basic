function interviewQuestion(job) {
  if (job === 'designer') {
    return function(name) {
      console.log('1' + name);
    };
  } else if (job === 'teacher') {
    return function(name) {
      console.log('2' + name);
    };
  } else {
    return function(name) {
      console.log('3' + name);
    };
  }
}

var teacherQuestion = interviewQuestion('teacher');
teacherQuestion('abc');

interviewQuestion(designer)('asdas');
