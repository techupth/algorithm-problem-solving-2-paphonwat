function findStudentIndex(students, searchStudent) {
	// เริ่มเขียนโค้ดตรงนี้จ้า
	//ถ้า index ไม่เท่ากับ -1 คือเจอนักเรียน แต่ถ้าไม่เจอก็จะ return เป็น -1
	const index = students.indexOf(searchStudent);
	if (index !== -1) {
		return index;
	} else {
		return -1;
	}
}

// ตอบคำถามตรงนี้จ้า
let studentsA = ["Andrew", "Bobby", "Diana", "George", "Hannah", "Isaac", "Jasmine", "John"];
let searchStudentA = "John";
console.log(findStudentIndex(studentsA, searchStudentA));

let studentsB = ["Alice", "Bob", "Charlie", "Diana", "Ethan", "Fiona"];
let searchStudentB = "Andrew";
console.log(findStudentIndex(studentsB, searchStudentB));
