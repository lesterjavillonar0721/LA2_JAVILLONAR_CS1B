// Define the Student class
class Student {
  constructor(firstName, middleName, lastName, birthdate, birthplace, address, course, dreamJob) {
    this.firstName = firstName;
    this.middleName = middleName;
    this.lastName = lastName;
    this.birthdate = birthdate;
    this.birthplace = birthplace;
    this.address = address;
    this.course = course;
    this.dreamJob = dreamJob;
  }

  // Method to return the student's information as a formatted string
  getStudentInfo() {
    return `Student Information:\n` +
      `Name: ${this.firstName} ${this.middleName} ${this.lastName}\n` +
      `Birthdate: ${this.birthdate}\n` +
      `Birthplace: ${this.birthplace}\n` +
      `Address: ${this.address}\n` +
      `Course: ${this.course}\n` +
      `Dream Job: ${this.dreamJob}\n`;
  }
}

// Create two student instances

// Student 1
let student1 = new Student(
  "LESTER", 
  "BEGNALEN", 
  "JAVILLONAR", 
  "MM/DD/YYYY", // Replace with actual birthdate
  "CANDALICAN, STA CRUZ, ILOCOS SUR, 2713", // Replace with actual zip code
  "CANDALICAN, STA CRUZ, ILOCOS SUR", 
  "BSCS-1B", 
  "web developer"
);

// Classmate 2
let classmate2 = new Student(
  "LEE ALFIE", // Replace with actual first name
  "ABLAN",  // Replace with actual middle name
  "SAGARA", // Replace with actual last name
  "02/15/2006", // Replace with actual birthdate
  "LAS UD STA CRUZ, ILOCOS SUR , 2713", // Replace with actual zip code
  "LAS UD, STA CRUZ, ILOCOS SUR",
  "BSCS-1B", 
  "data scientist" // Replace with classmate's dream job
);

// Print the details of both students
console.log(student1.getStudentInfo());
console.log(classmate2.getStudentInfo());
