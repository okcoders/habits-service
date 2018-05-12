# habits service

- [restify](http://restify.com/docs/home/)
- [sequelize](http://docs.sequelizejs.com/manual/installation/getting-started.html)

```
npm install --save sequelize
npm install --save restify
npm install --save pg pg-hstore
```

run a blank postgres database

```
docker run --name habits-db \
  -e POSTGRES_PASSWORD=mysecretpassword \
  -e POSTGRES_DB=habits \
  -p 5432:5432 \
  -d \
  postgres
```
