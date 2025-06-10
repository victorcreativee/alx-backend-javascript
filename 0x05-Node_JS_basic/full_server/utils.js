const fs = require('fs');

function readDatabase(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const lines = data.trim().split('\n');
      const students = lines.slice(1).filter((line) => line.trim() !== '');
      const result = {};

      for (const student of students) {
        const [first, , , field] = student.split(',');
        if (!result[field]) {
          result[field] = [];
        }
        result[field].push(first);
      }

      resolve(result);
    });
  });
}

module.exports = readDatabase;
