const parser = new DOMParser();

let studentsData;
fetch('http://127.0.0.1:5500/Lab/CAT2/students.xml')
	.then((response) => response.text())
	.then((response) => {
		studentsData = response;
		const xmlDoc = parser.parseFromString(studentsData, 'text/xml');
		const students = Array.from(xmlDoc.getElementsByTagName('STUDENT'));

		console.log(students);
		students.forEach((student) => {
			console.log(
				`Name: ${
					student.getElementsByTagName('STU-NAME')[0].textContent
				}; College: ${
					student.getElementsByTagName('STU-COLLEGE')[0].textContent
				}`
			);
		});
	});
