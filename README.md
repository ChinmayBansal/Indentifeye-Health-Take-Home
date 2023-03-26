# Indentifeye-Health-Take-Home

## Overview
This program takes in a file with commands on each line and processes them to add/delete patients and exams. It then print outs the output after processing the file.

## Test Cases
This program contains 9 test files including the sample input provided in the pdf.

### Sample.txt

#### Input
ADD PATIENT 123 JOHN DOE
ADD PATIENT 321 JOE SCMOE
ADD PATIENT 321 JOHN SNOW
ADD PATIENT 789 JANE CROW
ADD EXAM 321 444
ADD EXAM 789 445
ADD EXAM 789 554
DEL PATIENT 321

#### Expected Output
Name: JOHN DOE, Id: 123, Exam Count: 0
Name: JANE CROW, Id: 789, Exam Count: 2

### Test1.txt

#### Input
ADD PATIENT 123 JOHN DOE
ADD PATIENT 123 JOHN SNOW

##### Expected Output
Name: JOHN DOE, Id: 123, Exam Count: 0

##### What it tests for
This test case tests for adding a patient with the same patient ID.



### Test2.txt

#### Input
ADD PATIENT 123 JOHN DOE
ADD EXAM 123 456
ADD EXAM 234 456
ADD EXAM 123 456
ADD EXAM 456 790

##### Expected Output
Name: JOHN DOE, Id: 123, Exam Count: 1

##### What it tests for
This test case tests for adding an exam with an exam ID that already exists and adding an exam with a patient ID that does not exist.



### Test3.txt

#### Input
ADD PATIENT 123 JOHN DOE
DEL PATIENT 123
DEL PATIENT 123
ADD PATIENT 456 JOHN SNOW
ADD PATIENT 123 JOHN DOE

##### Expected Output
Name: JOHN SNOW, Id: 456, Exam Count: 0
Name: JOHN DOE, Id: 123, Exam Count: 0

##### What it tests for
This test case tests for deleting a patient ID that does not exist.


### Test4.txt

#### Input
ADD PATIENT 123 JOHN DOE
DEL PATIENT 123
ADD PATIENT 456 JOHN SNOW
ADD EXAM 456 123
ADD PATIENT 123 JOHN DOE
ADD EXAM 123 123
##### Expected Output
Name: JOHN SNOW, Id: 456, Exam Count: 1
Name: JOHN DOE, Id: 123, Exam Count: 1

##### What it tests for
This test case tests for adding the same exam to two patients



### Test5.txt

#### Input
ADD PATIENT 123 JOHN DOE
DEL PATIENT 123
DEL PATIENT 456
ADD PATIENT 456 JOHN SNOW
ADD EXAM 456 123
ADD PATIENT 123 JOHN DOE
ADD EXAM 123 123
DEL EXAM 123
##### Expected Output
Name: JOHN SNOW, Id: 456, Exam Count: 0
Name: JOHN DOE, Id: 123, Exam Count: 0

##### What it tests for
This test case tests for adding the same exam to two patients and then deleting that exam.


### Test6.txt

#### Input
ADD PATIENT 123 JOHN DOE
ADD EXAM 123 456
ADD EXAM 123 789
ADD EXAM 123 234
DEL PATIENT 123
ADD PATIENT 123 JOHN DOE
ADD EXAM 123 456
##### Expected Output
Name: JOHN DOE, Id: 123, Exam Count: 1

##### What it tests for
This test case tests for adding muliple exams to one patient and then deleting it, and then adding a patient with an exam again.


### Test7.txt

#### Input
ADD PATIENT 123 JOHN DOE
ADD EXAM 123 456
ADD EXAM 123 456

##### Expected Output
Name: JOHN DOE, Id: 123, Exam Count: 1

##### What it tests for
This test case tests for adding the two exams that are the same to one patient.


### Test8.txt

#### Input
ADD PATIENT 123 JOHN DOE
ADD PATIENT 456 JOHN SNOW
ADD EXAM 123 789
ADD EXAM 456 789
DEL PATIENT 123


##### Expected Output
Name: JOHN SNOW, Id: 456, Exam Count: 1

##### What it tests for
This test case tests for adding two patients and the two same exams to each patient. It then deletes one of the patiensts.




## Running the Program
1. Download code and given .txt files
2. Specify file name on like 106
3. Run node index.js to print output











