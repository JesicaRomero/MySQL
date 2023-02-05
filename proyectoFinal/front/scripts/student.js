const API_URL = 'http://localhost:3000/alumnos'
let studentsData = []

async function getStudents() {
  const data = await fetch(API_URL, {
    method: 'GET',
  })
  const { students } = await data.json()
  studentsData = students
}

async function getStudent(id) {
  const data = await fetch(`${API_URL}?id=${id}`, {
    method: 'GET',
  })
  const { students } = await data.json()
  studentsData = students
}

async function createOrUpdateStudent() {
  const first_name = document.getElementById('first_name').value.trim()
  const last_name = document.getElementById('last_name').value.trim()
  const group_id = document.getElementById('group_id').value
  const student = {
    first_name,
    last_name,
    group_id: Number(group_id),
  }
  const action = document.getElementById('sendButton').textContent.trim()

  if (action === 'Crear') {
    const data = await fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json; charset=UTF-8' },
      body: JSON.stringify(student),
    })
    const result = await data.json()
    if (result.ok) {
      await showTable()
    }
  }
  if (action === 'Actualizar') {
    const student_id = document.getElementById('student_id').value
    const data = await fetch(`${API_URL}?id=${student_id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json; charset=UTF-8' },
      body: JSON.stringify(student),
    })
    const result = await data.json()
    if (result.ok) {
      await showTable()
    }
  }
}

async function deleteStudent(id) {
  await fetch(`${API_URL}?id=${id}`, {
    method: 'DELETE',
  })
  await showTable()
}

async function updateStudent(student) {
  document.getElementById('student_id').value = student.student_id
  document.getElementById('first_name').value = student.first_name
  document.getElementById('last_name').value = student.last_name
  document.getElementById('group_id').value = student.group_id
  document.getElementById('sendButton').innerHTML = 'Actualizar'
  window.scrollTo(0, 0)
}

async function showTable() {
  const id = document.getElementById('id').value
  id ? await getStudent(id) : await getStudents()
  let data = `<h1>Alumnos</h1>
    <table>
    <tr>
      <th>Nombre</th>
      <th>Apellido</th>
      <th>Grupo</th>
      <th></th>
      <th></th>
    </tr>
    `
  studentsData.forEach((student) => {
    data += `<tr>
      <td>${student.first_name}</td>
      <td>${student.last_name}</td>
      <td>${student.group_id}</td>
      <td>
        <button class="btn-delete" onclick='deleteStudent("${
          student.student_id
        }")'>
            <i class="fa-regular fa-trash-can"></i>
        </button>
      </td>
      <td>
        <button class="btn-edit" onclick='updateStudent(${JSON.stringify(
          student
        )})'>
            <i class="fa-solid fa-pen"></i>
        </button>
      </td>
    </tr>
  </tr>`
  })

  data += `</table>`
  document.getElementById('studentsSection').innerHTML = data
}
