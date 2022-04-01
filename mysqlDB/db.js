import mysql2 from 'mysql2';

export const db = mysql2
  .createPool({
    host: 'localhost',
    user: 'root',
    database: 'nodejs-udemy-course',
    password: 'P@ssw0rd',
  })
  .promise();
