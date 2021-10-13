const parser = new DOMParser();

let studentsData;
fetch('http://127.0.0.1:5500/Lab/CAT2/students.xml')
    .then(response => response.text())
    .then(response => {
        studentsData = response;
        // console.log(studentsData);
        const xmlDoc = parser.parseFromString(studentsData, 'text/xml');
        const student = xmlDoc.getElementsByTagName('STUDENT');
        console.log(student);
    });

