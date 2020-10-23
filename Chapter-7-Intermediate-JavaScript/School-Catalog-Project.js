/*
Practice the use of classes and class inheritance by coding the following requirements:
School
Properties: name (string), level (one of three strings: 'primary', 'middle', or 'high'), and numberOfStudents (number)
Getters: all properties have getters
Setters: the numberOfStudents property has a setter
Methods: .quickFacts() and .pickSubstituteTeacher() (this is a static method)
Primary
Includes everything in the School class, plus one additional property
Properties: pickupPolicy (string)
Middle
Does not include any additional properties or methods
High
Includes everything in the School class, plus one additional property
Properties: sportsTeams (array of strings)
*/

class School {
  constructor(name,level,numberOfStudents){
    this._name = name;
    this._level = level;
    this._numberOfStudents = numberOfStudents;
  }

  get name(){
    return this._name;
  }
  get level(){
    return this._level;
  }
  get numberOfStudents(){
    return this._numberOfStudents;
  }

  set numberOfStudents(newNumberOfStudents){
    if (typeof newNumberOfStudents == 'number'){
      this._numberOfStudents = newNumberOfStudents;
    }else {
      console.log('Invalid input: numberOfStudents must be set to a number.');
    }
  }

  quickFacts(){
    console.log(`${this._name} educates ${this._numberOfStudents} students at the ${this._level} school level.`);
  }

  static pickSubstituteTeacher(substituteTeachers){
    let randomIdx = Math.floor(Math.random() * substituteTeachers.length);
    return substituteTeachers[randomIdx];
  }
}

class PrimarySchool extends School {
  constructor(name,numberOfStudents,pickupPolicy){
    super(name,'primary',numberOfStudents);
    this._pickupPolicy = pickupPolicy;
  }

  get pickupPolicy(){
    return this._pickupPolicy;
  }
}

class HighSchool extends School {
  constructor(name,numberOfStudents,sportsTeams){
    super(name,'High School',numberOfStudents);
    this._sportsTeams = sportsTeams;
  }

  get sportsTeams(){
    return this._sportsTeams;
  }
}

// Tests
const lorraineHansbury = new PrimarySchool('Lorraine Hansbury',514,'Students must be picked up by a parent, guardian, or a family member over the age of 13.');
lorraineHansbury.quickFacts();
console.log(School.pickSubstituteTeacher(['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli']));

const alSmith = new HighSchool('Al E. Smith',415,['Baseball', 'Basketball', 'Volleyball', 'Track and Field']);
console.log(alSmith.sportsTeams);

// this is a new comment!
// second awesome comment