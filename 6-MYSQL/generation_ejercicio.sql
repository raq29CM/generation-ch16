USE generation;

-- 1) Run the following SQL Query to complete your first JOIN to see more information about the Students
SELECT Students.*, Countries.name country FROM Students INNER JOIN Countries ON Students.nationality = Countries.idCountries;

-- 2) Modify the previous SQL statment so it joins the Students table with the IDTypes table to know each students' type of ID.
SELECT Students.idStudent, students.name, students.last_name, students.IdType_id, idtypes.name AS Nombre_IDType FROM students INNER JOIN idtypes ON students.IdType_id = idtypes.id_idTypes;

-- 3) Write an additional SQL statment to JOIN the Students table with the CourseHasStudent table to get the code of the courses that each students is enrolled in.


-- 4) Write a SQL query to join the CourseHasStudent table with the Courses table to get the name of the course information with the student ID of students enrolled in the course.


-- 5) Now that you have the two queries, use an INNER JOIN to combine the results of the queries (this is called nested queries, and will allow you to combine SQL queries to order the data the way you like).

