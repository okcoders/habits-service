const restify = require('restify');
const db = require('./db.js')

function habits(req, res, next) {
  db.Habit
    .findAll()
    .then(habits => habits.map(h => h.get({plain: true})))
    .then(habits => {
      res.send(habits)
      next();
    });
}

function newHabit(req, res, next) {
  db.Habit
  .create({name: req.body.name, amount: req.body.amount, per: req.body.per})
  .then(habit => {
    console.log(habit)
    console.log(habit.get({plain: true}))
    res.send(habit.get({plain: true}));
    next();
  })
}

const server = restify.createServer();
server.use(restify.plugins.bodyParser())
server.get('/habits', habits);
server.post('/habits', newHabit);
// server.get('/habits/:id', habitById);
// server.delete('/habits/:id', deleteHabitById);

server.listen(8080, function() {
  console.log('%s listening at %s', server.name, server.url);
});
