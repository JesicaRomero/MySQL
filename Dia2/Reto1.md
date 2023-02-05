Reto 1
• Usando el ejemplo de base de datos que tenemos ya implementado desde unidades anteriores, calcular la nota media de los alumnos de la asignatura 1.

    SELECT AVG(mark) FROM mark WHERE subject_id = 1;


• Calcular el número total de alumnos que hay en el bootcamp.

    SELECT COUNT(*) FROM student;


• Listar todos los campos de la tabla “groups”.

    SELECT * FROM `group`;


• Elimina todas las notas de la base de datos que estén por encima de 5 y que sean del año pasado (no utilices BETWEEN).

    DELETE FROM mark WHERE mark > 5 AND year(date) = year(curdate()) - 1;


• Obtén los datos de todos los estudiantes que estén en el bootcamp este año. Para ello la tabla de estudiantes debe tener un campo que sea el año de ingreso.

    SELECT * FROM student WHERE year(date_of_entry) = year(curdate());


• Calcular el numero de profesores que hay por cada asignatura.

    SELECT subject_id, COUNT(DISTINCT teacher_id) FROM subject_teacher GROUP BY subject_id;
