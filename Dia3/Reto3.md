• Obtén el número total de alumnos por asignatura, el nombre de la asignatura y el nombre y apellidos del profesor que la imparte.

    SELECT `school-node`.subject.title as "Subject", CONCAT(`school-node`.teacher.first_name, ' ', `school-node`.teacher.last_name) as "Teacher", COUNT(`school-node`.student.student_id) as "Total students"
    FROM `school-node`.subject
    INNER JOIN `school-node`.subject_teacher ON `school-node`.subject.subject_id = `school-node`.subject_teacher.subject_id
    INNER JOIN `school-node`.teacher ON `school-node`.subject_teacher.teacher_id = `school-node`.teacher.teacher_id
    INNER JOIN `school-node`.group ON `school-node`.subject_teacher.group_id = `school-node`.group.group_id
    INNER JOIN `school-node`.student ON `school-node`.group.group_id = `school-node`.student.group_id
    GROUP BY `school-node`.subject.subject_id, `school-node`.teacher.teacher_id;
