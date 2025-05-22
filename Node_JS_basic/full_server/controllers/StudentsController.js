import { readDatabase } from '../utils.js';

class StudentsController {
  static async getAllStudents(req, res) {
    const databaseFile = process.argv[2];
    if (!databaseFile) {
      return res.status(500).send('Cannot load the database');
    }

    try {
      const fields = await readDatabase(databaseFile);
      const response = ['This is the list of our students'];
      Object.keys(fields)
        .sort()
        .forEach((field) => {
          response.push(`Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}`);
        });
      res.status(200).send(response.join('\n'));
    } catch (error) {
      res.status(500).send('Cannot load the database');
    }
  }

  static async getAllStudentsByMajor(req, res) {
    const databaseFile = process.argv[2];
    const { major } = req.params;

    if (!['CS', 'SWE'].includes(major)) {
      return res.status(500).send('Major parameter must be CS or SWE');
    }

    try {
      const fields = await readDatabase(databaseFile);
      if (fields[major]) {
        res.status(200).send(`List: ${fields[major].join(', ')}`);
      } else {
        res.status(200).send('List:');
      }
    } catch (error) {
      res.status(500).send('Cannot load the database');
    }
  }
}

²export default StudentsController;
