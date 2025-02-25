const { Pool } = require("pg");

const pool = new Pool({
  user: "development",
  password: "development",
  host: "localhost",
  database: "bootcampx"
});

const queryString = `
    SELECT DISTINCT teachers.name as teacher, cohorts.name as cohort
    FROM assistance_requests
    JOIN teachers ON teachers.id = teacher_id
    JOIN students ON students.id = student_id
    JOIN cohorts ON cohorts.id = cohort_id
    WHERE cohorts.name = $1
    ORDER BY teacher;
    `;

const cohortName = process.argv[2];
const values = [cohortName];

pool
  .query(queryString, values)
  .then((res) => {
    res.rows.forEach((res) => {
      console.log(`${res.cohort}: ${res.teacher}`);
    });
  })
  .catch((err) => console.error("query error", err.stack));