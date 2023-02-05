• Obtén todos los nombres y apellidos de los profesores y los nombres de las asignaturas que imparten.

    SELECT `school-node`.teacher.first_name, `school-node`.teacher.last_name, `school-node`.subject.title
    FROM `school-node`.teacher
    INNER JOIN `school-node`.subject_teacher ON `school-node`.teacher.teacher_id = `school-node`.subject_teacher.teacher_id
    INNER JOIN `school-node`.subject ON `school-node`.subject_teacher.subject_id = `school-node`.subject.subject_id;

