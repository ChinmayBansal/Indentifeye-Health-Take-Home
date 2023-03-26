// /*
//  This program reads in a .txt file in which it contains instructions
//  to add or delete patients and exams. It then outputs the information 
//  to the console.
// */

//Used to read and write to files
const fs = require('fs');

//Create map to store patient and exmas in key value pairs
const patients = new Map();
const exams = new Map();

//Function takes in a single line for .txt file and process it.
function processInstruction(instruction) {
  //Takes the line and splits it to a command, type, id, and name
  const line = instruction.split(' ')
  const command = line[0]
  const type = line[1]
  const id = line[2]
  const nameOrExamID = (line.slice(3)).join(' ')
  
  executeCommand(command, type, id, nameOrExamID);
}

function executeCommand(command, type, id, nameOrExamID) {
  // Goes to function depending if command or first argument is add or delete
  if (command === 'ADD') {
    if (type === 'PATIENT') {
      addPatient(id, nameOrExamID);
    } else if (type === 'EXAM') {
      addExam(id, nameOrExamID);
    }
  } else if (command === 'DEL') {
    if (type === 'PATIENT') {
      deletePatient(id);
    }  else if (type === 'EXAM') {
      deleteExam(id);
    }
  }
}

function addPatient(id, nameOrExamID) {
  // Checks if patient id already exists
  if (!patients.has(id)) {
    // Adds a key of the patient ID
    // Add a value object that contains patient name and a set of exams
    // which are unique
    patients.set(id, { nameOrExamID, patientExams: new Set() });
  }
}

function addExam(id, nameOrExamID) {
  // Checks if patient id exists, otherwise skip
  if (patients.has(id)) {
    // Adds examID to exams set of the patient
    patients.get(id).patientExams.add(nameOrExamID);

    // If exam ID does not exit in the exams map, it will add it
    // to the map with a key of the exam ID and a value
    // which is a set that contains the patient IDS that have taken the exam
    if (!exams.has(nameOrExamID)) {
      exams.set(nameOrExamID, new Set());
    }

    // Adds patient ID to the set of current exam ID
    exams.get(nameOrExamID).add(id)
    
    ;
  }
}

function deletePatient(id) {
  // Checks if patient ID exists
  if (patients.has(id)) {
    // Delete patient IDs from exams map
    patients.get(id).patientExams.forEach(examID => exams.get(examID).delete(id));
    //Delte patient ID from patient map
    patients.delete(id);
  }
}

function deleteExam(id) {
  // Checks if exam ID exists in exam map
  if (exams.has(id)) {
    //Get set of patient IDs that have taken exam
    const patientIds = exams.get(id);
    patientIds.forEach(patientId => {
      //Delete exam from set of patient exams
      if (patients.has(patientId)) {
        patients.get(patientId).patientExams.delete(id);
      }
    });
    //Delete exam ID from exams map
    exams.delete(id);
  }
}

function summarizePatients() {
  for (const [id, patient] of patients.entries()) {
    //Print output
    console.log(`Name: ${patient.nameOrExamID}, Id: ${id}, Exam Count: ${patient.patientExams.size}`);
  }
}

fs.readFile('test8.txt', 'utf-8', (err, data) => {
  if (err) throw err;

  // Read file and split into an array where each index is one line
  // and call the process function and then print the output.
  const instructions = data.trim().split('\n');
  instructions.forEach(processInstruction);

  summarizePatients();
});


