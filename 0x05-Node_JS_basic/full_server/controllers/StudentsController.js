const readDatabase = require('../utils');

class StudentsController {
    static getAllStudents(req, res) {
        const databasePath = process.argv[2];

        readDatabase(databasePath)
            .then((data) => {
                let response = 'This is the list of our students';
                const fields = Object.keys(data).sort();

                for (const field of fields) {
                    const names = data[field];
                    response += `\nNumber of students in ${field}: ${names.length}. List: ${names.join(', ')}`;
                }

                res.status(200).send(response);
            })
            .catch(() => {
                res.status(500).send('Cannot load the database');
            });
    }

    static getAllStudentsByMajor(req, res) {
        const databasePath = process.argv[2];
        const { major } = req.params;

        if (major !== 'CS' && major !== 'SWE') {
            res.status(500).send('Major parameter must be CS or SWE');
            return;
        }

        readDatabase(databasePath)
            .then((data) => {
                const names = data[major];
                res.status(200).send(`List: ${names.join(', ')}`);
            })
            .catch(() => {
                res.status(500).send('Cannot load the database');
            });
    }
}

module.exports = StudentsController;
