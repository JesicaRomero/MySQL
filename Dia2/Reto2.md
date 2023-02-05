Reto 2
• Obtén el id y la nota de los alumnos que tengan un id entre 1 y 20, o que tenga una nota mayor de 8 y la nota tenga fecha del año pasado.

    SELECT student_id, mark FROM `school-node`.mark 
    WHERE (student_id BETWEEN 1 AND 20) OR (mark > 8 AND date >= DATE_SUB(NOW(), INTERVAL 1 YEAR));

    
• Obtén la media de las notas que se han dado en el último año por asignatura.

    SELECT subject_id, AVG(mark) as avg_mark FROM `school-node`.mark
    WHERE date >= DATE_SUB(NOW(), INTERVAL 1 YEAR)
    GROUP BY subject_id;


• Obtén la media aritmética de las notas que se han dado en el último año por alumno.

    SELECT student_id, AVG(mark) as avg_mark FROM `school-node`.mark   
    WHERE date >= DATE_SUB(NOW(), INTERVAL 1 YEAR)
    GROUP BY student_id;
