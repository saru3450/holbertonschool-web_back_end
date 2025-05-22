import fs from 'fs/promises';

export async function readDatabase(filePath) {
  try {
    const data = await fs.readFile(filePath, 'utf-8');
    const lines = data.split('\n').filter((line) => line.trim() !== '');
    const students = lines.slice(1).map((line) => line.split(','));
    const fields = {};

    students.forEach(([firstname, , field]) => {
      if (!fields[field]) {
        fields[field] = [];
      }
      fields[field].push(firstname);
    });

    return fields;
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}
