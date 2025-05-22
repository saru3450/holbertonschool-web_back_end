const express = require('express');
const fs = require('fs');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  const filePath = process.argv[2];
  if (!filePath) {
    res.send('This is the list of our students\n');
    return;
  }

  fs.readFile(filePath, 'utf-8', (err, data) => {
    if (err) {
      res.status(500).send('Cannot load the database');
      return;
    }

    const lines = data.split('\n').filter((line) => line.trim() !== ''); 
    const header = lines.shift();
    const students = lines.map((line) => line.split(',')).filter((cols) => cols.length === 3);

    const totalStudents = students.length;
    const fields = {};
    students.forEach((student) => {
      const field = student[2];
      if (!fields[field]) fields[field] = [];
      fields[field].push(student[0]);
    });

    let response = 'This is the list of our students\n';
    response += `Number of students: ${totalStudents}\n`;
    for (const [field, names] of Object.entries(fields)) {
      response += `Number of students in ${field}: ${names.length}. List: ${names.join(', ')}\n`;
    }

    res.send(response.trim());
  });
});

app.listen(1245, () => {
  console.log('Server is running on port 1245');
});

module.exports = app;
