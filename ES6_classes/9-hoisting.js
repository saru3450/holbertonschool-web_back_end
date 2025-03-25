// Classe pour représenter une classe Holberton
export class HolbertonClass {
  constructor(year, location) {
    this._year = year;
    this._location = location;
  }

  // Getter pour year
  get year() {
    return this._year;
  }

  // Getter pour location
  get location() {
    return this._location;
  }
}

// Classe pour représenter un étudiant Holberton
export class StudentHolberton {
  constructor(firstName, lastName, holbertonClass) {
    this._firstName = firstName;
    this._lastName = lastName;
    this._holbertonClass = holbertonClass;
  }

  // Getter pour le nom complet
  get fullName() {
    return `${this._firstName} ${this._lastName}`;
  }

  // Getter pour la classe Holberton
  get holbertonClass() {
    return this._holbertonClass;
  }

  // Description complète de l'étudiant
  get fullStudentDescription() {
    return `${this._firstName} ${this._lastName} - ${this._holbertonClass.year} - ${this._holbertonClass.location}`;
  }
}

// Création des classes Holberton
const class2019 = new HolbertonClass(2019, 'San Francisco');
const class2020 = new HolbertonClass(2020, 'San Francisco');

// Création des étudiants
const student1 = new StudentHolberton('Guillaume', 'Salva', class2020);
const student2 = new StudentHolberton('John', 'Doe', class2020);
const student3 = new StudentHolberton('Albert', 'Clinton', class2019);
const student4 = new StudentHolberton('Donald', 'Bush', class2019);
const student5 = new StudentHolberton('Jason', 'Sandler', class2019);

// Liste des étudiants
export const listOfStudents = [student1, student2, student3, student4, student5];
