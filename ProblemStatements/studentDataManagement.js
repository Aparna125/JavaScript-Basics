function student_obj(studentId,student_name,age,department,engmark,mathmark,scmark){
        return{        
        studentId,
        student_name,
        age,
        department,
        engmark,
        mathmark,
        scmark,
        passOrfail:null,
        totalmark:null,
        averageMark:null,
        grade:null
        };
}
    
const students=[
    student_obj(101,"Anu",20,"CSE",95,92,88),
    student_obj(102,"Rahul",21,"ECE",75,82,78),
    student_obj(103,"Meera",21,"CSE",65,55,75),
    student_obj(104,"Arun",22,"ECE",35,45,50),
    student_obj(105,"Neha",21,"IT",90,96,94)
]

//display students
function displayStudentDetails(students){
   console.log(`StudentID:${students.studentId}`);
   console.log(`Name:${students.student_name}`);
   console.log(`Age:${students.age}`);
   console.log(`Department:${students.department}`);
   console.log(`English Mark:${students.engmark}`);
   console.log(`Maths Mark:${students.mathmark}`);
   console.log(`Science Mark:${students.scmark}`);
}   
for(let item of students){
    displayStudentDetails(item);
}

// academic performance
function calculateTotal(students){
    var totalMark=students.engmark+students.mathmark+students.scmark;
    console.log(`Total mark of student ${students.studentId} is ${totalMark}`);
    students.totalmark=totalMark;
}
for(let item of students){
        calculateTotal(item);
}

function calculateAverage(students){
    var averageMark=(students.engmark+students.mathmark+students.scmark)/3;
    console.log(`Average mark of student ${students.studentId} is ${averageMark}`);
    students.averageMark=averageMark;
    calculateGrade(averageMark);
}
for(let item of students){
        calculateAverage(item);
}

// grade calculation
function calculateGrade(averageMark){
    if(90<=averageMark && averageMark<=100){
        console.log('Student got A+')
        students.grade='A+'
    }else if(80<=averageMark && averageMark<=89){
        console.log('Student got A')
        students.grade='A'
    }else if(70<=averageMark && averageMark<=79){
        console.log('Student got B')
        students.grade='B'
    }else if(60<=averageMark && averageMark<=69){
        console.log('Student got C')
        students.grade='C'
    }else if(50<=averageMark && averageMark<=59){
        console.log('Student got D')
        students.grade='D'
    }else if(averageMark<50){
        console.log('Student got F')
        students.grade='D'
    }
}

//passorfail
function checkResult(students){
    if(students.engmark>=40 && students.mathmark>=40 && students.scmark>=40){
        console.log(`The student ${students.studentId} passed`);
        students.passOrfail=true;
    }else if(students.engmark<40 || students.mathmark<40 || students.scmark<40){
        console.log(`The student ${students.studentId} failed`);
        students.passOrfail=false;
    }
}
for(let item of students){
    checkResult(item);
}

// top performer
function findTopper(students){
    let highest=0;
    let topper=null;
   for(let item of students){
    let total=item.engmark+item.mathmark+item.scmark;
    if(highest<total){
        highest=total;
        topper=item;
    }
}
    if(topper!=null){
        console.log(`Student ${topper.student_name} have ${highest} marks.`)
    }
}
findTopper(students);

// student needs improvement
function  displayFailedStudents(students){
    for(let item of students){
        if(item.passOrfail===false){
        console.log(`Student ${item.student_name} failed`);
    }
    }
}
displayFailedStudents(students);

// department wise listing
function filterByDepartment(dep){
    let count=0;
    for(let item of students){
        if(item.department==dep){
            console.log(`Student ${item.student_name} id ${item.studentId}`);
            count++;
        }
    }
    if(count==0){
        console.log('No student in this department')
    }
}
filterByDepartment('CSE');

// Academic Report
function generateReport(students){
    console.log(`Student Name:${students.student_name},ID:${students.studentId},Total Marks:${students.totalMark},Average Marks:${students.averageMark},Grade:${students.grade},Pass Or Fail:${students.passOrfail}`);
} 
for(let item of students){
    generateReport(item);
}