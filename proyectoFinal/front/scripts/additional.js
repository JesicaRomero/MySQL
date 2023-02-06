const API_URL = 'http://localhost:3000'

function getId() {
  return document.getElementById('id').value.trim()
}

function showData(data) {
  document.getElementById('dataSection').innerHTML = data
}

async function getAvgMark() {
  const id = getId()
  const data = await fetch(`${API_URL}/media?id=${id}`, {
    method: 'GET',
  })
  const { avg } = await data.json()
  const avgData = `<div>Nota media: ${avg}<div>`
  showData(avgData)
}

async function getStudentsSubjects() {
  const id = getId()
  if (id) {
    const data = await fetch(`${API_URL}/apuntadas?id=${id}`, {
      method: 'GET',
    })
    const { subjects } = await data.json()
    let subjectsList = '<h2>Asignaturas apuntadas</h2><ul>'
    subjects.forEach((subject) => (subjectsList += `<li>${subject}</li>`))
    subjectsList += '</ul>'
    showData(subjectsList)
  } else {
    const res = await fetch(`${API_URL}/apuntadas`, {
      method: 'GET',
    })
    const data = await res.json()
    let table = `<h2>Listado</h2><table>
    <tr><th>Nombre</th><th>Apellido</th><th>Asignatura</th></tr>`
    data.data.forEach(
      (element) =>
        (table += `<tr>
        <td>${element.first_name}</td>
        <td>${element.last_name}</td>
        <td>${element.title}</td>
        </tr>`)
    )
    table += '</table>'
    showData(table)
  }
}

async function getTeachersSubjects() {
  const id = getId()
  if (id) {
    const data = await fetch(`${API_URL}/impartidas?id=${id}`, {
      method: 'GET',
    })
    const { subjects } = await data.json()
    let subjectsList = '<h2>Asignaturas impartidas</h2><ul>'
    subjects.forEach((subject) => (subjectsList += `<li>${subject}</li>`))
    subjectsList += '</ul>'
    showData(subjectsList)
  } else {
    const res = await fetch(`${API_URL}/impartidas`, {
      method: 'GET',
    })
    const data = await res.json()
    let table = `<h2>Listado</h2><table>
      <tr><th>Nombre</th><th>Apellido</th><th>Asignatura</th></tr>`
    data.data.forEach(
      (element) =>
        (table += `<tr>
          <td>${element.first_name}</td>
          <td>${element.last_name}</td>
          <td>${element.title}</td>
          </tr>`)
    )
    table += '</table>'
    showData(table)
  }
}
