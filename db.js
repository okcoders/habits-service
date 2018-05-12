const Sequelize = require('sequelize');

const sequelize = new Sequelize('postgres://postgres:mysecretpassword@0.0.0.0:5432/habits')

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

const Habit = sequelize.define('habit', {
  habitId: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: Sequelize.TEXT
  },
  amount: {
    type: Sequelize.INTEGER
  },
  per: {
    type: Sequelize.TEXT
  },
});

const HabitLog = sequelize.define('habit_log', {
  logId: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  habitId: {
    type: Sequelize.INTEGER
  },
  logTime: {
    type: Sequelize.DATE,
    defaultValue: Sequelize.NOW
  }
});

sequelize.sync()

module.exports = {
  sequelize: sequelize,
  Habit: Habit,
  HabitLog: HabitLog
}
