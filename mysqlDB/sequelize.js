import Sequelize from 'sequelize';

export const sequelize = new Sequelize('nodejs-udemy-course', 'root', 'P@ssw0rd', {
  dialect: 'mysql',
  logging: console.log,
});
