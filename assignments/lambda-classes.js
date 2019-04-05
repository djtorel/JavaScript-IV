// CODE here for your Lambda Classes
class Person {
  constructor({ name, age, location, gender }) {
    this.name = name;
    this.age = age;
    this.location = location;
    this.gender = gender;
  }

  speak() {
    console.log(`Hello my name is ${this.name}, I am from ${this.location}`);
  }
}

class Instructor extends Person {
  constructor({
    name,
    age,
    location,
    gender,
    specialty,
    favLanguage,
    catchPhrase,
  }) {
    super({ name, age, location, gender });
    this.specialty = specialty;
    this.favLanguage = favLanguage;
    this.catchPhrase = catchPhrase;
  }

  demo(subject) {
    console.log(`Today we are learning about ${subject}`);
  }

  grade(student, subject) {
    console.log(`${student.name} receives a prefect score on ${subject}`);
  }
}

class Student extends Person {
  constructor({
    name,
    age,
    location,
    gender,
    previousBackground,
    className,
    favSubjects,
  }) {
    super({ name, age, location, gender });
    this.previousBackground = previousBackground;
    this.className = className;
    this.favSubjects = favSubjects;
  }

  listSubjects() {
    this.favSubjects.forEach(subject => console.log(subject));
  }

  PRAssignment(subject) {
    console.log(`${this.name} has submitted a PR for ${subject}`);
  }

  sprintChallenge(subject) {
    console.log(`${this.name} has begun spring challenge on ${subject}`);
  }
}

class ProjectManager extends Instructor {
  constructor({
    name,
    age,
    location,
    gender,
    specialty,
    favLanguage,
    catchPhrase,
    gradClassName,
    favInstructor,
  }) {
    super({
      name,
      age,
      location,
      gender,
      specialty,
      favLanguage,
      catchPhrase,
    });
    this.gradClassName = gradClassName;
    this.favInstructor = favInstructor;
  }

  standUp(channel) {
    console.log(`${this.name} announces to ${channel}, @channel standy times!`);
  }

  debugsCode(student, subject) {
    console.log(`${this.name} debugs ${student.name}'s code on ${subject}`);
  }
}

const bob = new Person({
  name: 'Bob',
  age: 34,
  location: 'Tulsa',
  gender: 'Male',
});

bob.speak();

const sue = new Person({
  name: 'Sue',
  age: 24,
  location: 'Anchorage',
  gender: 'Female',
});

sue.speak();

const fred = new Instructor({
  name: 'Fred',
  location: 'Bedrock',
  age: 37,
  gender: 'Male',
  favLanguage: 'JavaScript',
  specialty: 'Front-end',
  catchPhrase: `Don't forget the homies`,
});

fred.speak();
fred.demo('React');

const betty = new Student({
  name: 'Betty',
  age: 23,
  location: 'Phoenix',
  gender: 'Female',
  previousBackground: 'Geologist',
  className: 'WebPT5',
  favSubjects: ['HTML', 'CSS', 'JavaScript'],
});

fred.grade(betty, 'JavaScript');
betty.listSubjects();
betty.PRAssignment('JavaScript Classes');
betty.sprintChallenge('JavaScript Fundamentals');

const allie = new ProjectManager({
  name: 'Allie',
  age: 25,
  location: 'Columbus',
  gender: 'Female',
  specialty: 'Full-Stack',
  favLanguage: 'JavaScript',
  catchPhrase: 'Collaborate with each other!',
  gradClassName: 'CS12',
  favInstructor: 'Cam Pope',
});

allie.speak();
allie.demo('ReasonML');
allie.grade(betty, 'JavaScript Classes');
allie.standUp('#webpt5_allie');
allie.debugsCode(betty, 'JavaScript Classes');
