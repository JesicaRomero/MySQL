• Obtén los nombres y apellidos de los alumnos y los nombres de las asignaturas en las que están apuntados.

    SELECT `school-node`.student.first_name, `school-node`.student.last_name, `school-node`.subject.title
    FROM `school-node`.student
    INNER JOIN `school-node`.group ON `school-node`.student.group_id = `school-node`.group.group_id
    INNER JOIN `school-node`.subject_teacher ON `school-node`.group.group_id = `school-node`.subject_teacher.group_id
    INNER JOIN `school-node`.subject ON `school-node`.subject_teacher.subject_id = `school-node`.subject.subject_id;
