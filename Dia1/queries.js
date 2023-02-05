const createQueries = [
  `CREATE TABLE IF NOT EXISTS subject (
      subject_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, 
      title VARCHAR(45) NOT NULL
    )`,
  `CREATE TABLE IF NOT EXISTS teacher (
      teacher_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
      first_name VARCHAR(45) NOT NULL,
      last_name VARCHAR(45) NOT NULL
    )`,
  `CREATE TABLE IF NOT EXISTS \`group\` (
      group_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(45) NOT NULL
    )`,
  `CREATE TABLE IF NOT EXISTS subject_teacher (
      subject_id INT NOT NULL,
      teacher_id INT NOT NULL,
      group_id INT NOT NULL,
      PRIMARY KEY (subject_id, teacher_id, group_id),
      CONSTRAINT FK_subject_id FOREIGN KEY (subject_id) REFERENCES subject(subject_id),
      CONSTRAINT FK_teacher_id FOREIGN KEY (teacher_id) REFERENCES teacher(teacher_id),
      CONSTRAINT FK_group_id FOREIGN KEY (group_id) REFERENCES \`group\`(group_id)
    )`,
  `CREATE TABLE IF NOT EXISTS student (
      student_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
      first_name VARCHAR(45) NOT NULL,
      last_name VARCHAR(45) NOT NULL,
      group_id INT NOT NULL,
      CONSTRAINT FK_group_student FOREIGN KEY (group_id) REFERENCES \`group\`(group_id)
    )`,
  `CREATE TABLE IF NOT EXISTS mark (
      mark_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
      student_id INT NOT NULL,
      subject_id INT NOT NULL,
      date DATE,
      mark INT NOT NULL
    )`,
]

const insertQueries = [
  `INSERT INTO subject (title) VALUES ('Matemáticas'), ('Español'), ('Historia'), ('Ciencias'), ('Inglés'), ('Arte'), ('Educación Física'), ('Tecnología'), ('Geografía'), ('Música')`,
  `INSERT INTO teacher (first_name, last_name) VALUES ('Juan', 'Pérez'), ('Ana', 'García'), ('Pedro', 'Martínez'), ('María', 'Rodríguez'), ('Carlos', 'González'), ('Luis', 'Sánchez'), ('Isabel', 'Ruiz'), ('Fernanda', 'Díaz'), ('Sofía', 'Jiménez'), ('Jorge', 'Moreno')`,
  `INSERT INTO \`group\` (name) VALUES
        ('A'),
        ('B'),
        ('C'),
        ('D'),
        ('E'),
        ('F'),
        ('G'),
        ('H'),
        ('I'),
        ('J')`,
  `INSERT INTO subject_teacher (subject_id, teacher_id, group_id) VALUES
        (1, 1, 1),
        (2, 2, 2),
        (3, 3, 3),
        (4, 4, 4),
        (5, 5, 5),
        (6, 6, 6),
        (7, 7, 7),
        (8, 8, 8),
        (9, 9, 9),
        (10, 10, 10)`,
  `INSERT INTO student (first_name, last_name, group_id) VALUES ('María', 'Pérez', 1), ('Juan', 'Rodríguez', 1), ('Pedro', 'García', 2), ('Ana', 'Martínez', 2), ('Luis', 'Sánchez', 3), ('Isabel', 'González', 3), ('David', 'López', 4), ('Sofía', 'Ramírez', 4), ('Miguel', 'Jiménez', 5), ('Laura', 'Ruiz', 5), ('Jose', 'Hernández', 6), ('Marta', 'Díaz', 6), ('Javier', 'Moreno', 7), ('Daniela', 'Álvarez', 7), ('Francisco', 'Torres', 8), ('Rosa', 'Gómez', 8), ('Carlos', 'Martín', 9), ('Paula', 'Álvarez', 9), ('Antonio', 'Ruiz', 10), ('Carmen', 'Hernández', 10), ('Jorge', 'García', 1), ('Elena', 'Sánchez', 2), ('Ricardo', 'Rodríguez', 3), ('Lucía', 'Martínez', 4), ('Eduardo', 'Pérez', 5), ('Verónica', 'Gonzále z', 6), ('José', 'López', 7), ('Noelia', 'Jiménez', 8), ('Fernando', 'Hernández', 9), ('Adriana', 'Gómez', 10), ('Juan Carlos', 'Ramírez', 9), ('Andrea', 'Díaz', 8), ('Ángel', 'Moreno', 7), ('Alejandra', 'Álvarez', 6), ('Raúl', 'Torres', 8), ('Karla', 'García', 8), ('José Luis', 'Sánchez', 9), ('Cecilia', 'Rodríguez', 9), ('Enrique', 'Martínez', 2), ('Araceli', 'Pérez', 2), ('Víctor', 'González', 2), ('Marisol', 'López', 2), ('Javier', 'Jiménez', 2), ('Teresa', 'Hernández', 2), ('Joaquín', 'Gómez', 3), ('Ana María', 'Ramírez', 2), ('Gerardo', 'Díaz', 4), ('Mercedes', 'Moreno', 4), ('Juan Manuel', 'Álvarez', 5), ('Luz', 'Torres', 2)`,
  `INSERT INTO mark (student_id, subject_id, date, mark) VALUES 
        (1, 1, '2011-01-01', 8),
        (2, 2, '2011-02-01', 9),
        (3, 3, '2011-03-01', 7),
        (4, 4, '2011-04-01', 6),
        (5, 5, '2011-05-01', 5),
        (6, 6, '2011-06-01', 10),
        (7, 7, '2011-07-01', 9),
        (8, 8, '2011-08-01', 8),
        (9, 9, '2011-09-01', 7),
        (10, 10, '2011-10-01', 6),
        (11, 11, '2011-11-01', 5),
        (12, 12, '2011-12-01', 4),
        (13, 13, '2012-01-01', 3),
        (14, 14, '2012-02-01', 2),
        (15, 15, '2012-03-01', 1),
        (16, 1, '2012-04-01', 0),
        (17, 2, '2012-05-01', 10),
        (18, 3, '2012-06-01', 9),
        (19, 4, '2012-07-01', 8),
        (20, 5, '2012-08-01', 7),
        (21, 6, '2012-09-01', 6),
        (22, 7, '2012-10-01', 5),
        (23, 8, '2012-11-01', 4),
        (24, 9, '2012-12-01', 3),
        (25, 10, '2013-01-01', 2),
        (26, 11, '2013-02-01', 1),
        (27, 12, '2013-03-01', 0),
        (28, 13, '2013-04-01', 10),
        (29, 14, '2013-05-01', 9),
        (30, 15, '2013-06-01', 8),
        (31, 1, '2013-07-01', 7),
        (32, 2, '2013-08-01', 6),
        (33, 3, '2013-09-01', 5),
        (34, 4, '2013-10-01', 4),
        (35, 5, '2013-11-01', 3),
        (36, 6, '2013-12-01', 2),
        (37, 7, '2014-01-01', 1),
        (38, 8, '2014-02-01', 0),
        (39, 9, '2014-03-01', 10),
        (40, 10, '2014-04-01', 9),
        (41, 11, '2014-05-01', 8),
        (42, 12, '2014-06-01', 7),
        (43, 13, '2014-07-01', 6),
        (44, 14, '2014-08-01', 5),
        (45, 15, '2014-09-01', 4),
        (46, 1, '2014-10-01', 3),
        (47, 2, '2014-11-01', 2),
        (48, 3, '2014-12-01', 1),
        (49, 4, '2015-01-01', 0),
        (50, 5, '2015-03-03', 10)
`,
]

const queries = [
  'UPDATE mark set mark = 0',
  'SELECT first_name, last_name from student',
  'SELECT * from teacher',
  'DELETE from mark where date < DATE_SUB(NOW(), INTERVAL 10 YEAR)',
  'UPDATE mark set mark = 5 where mark < 5',
]

module.exports = { createQueries, insertQueries, queries }
