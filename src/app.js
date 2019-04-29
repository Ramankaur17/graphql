import express from 'express';
import graphqlHTTP from 'express-graphql';
import schema from './schema';

const app = express();
const PORT = 3000;

app.get('/', (request, response) => {
  return response.json({
    msg: 'Hello World'
  })
})

app.listen(PORT, () => {
  console.log(`Server is running at PORT ${PORT}`);
});


//const schema = {};
app.use('/graphql', graphqlHTTP({
  graphiql: true,
  schema
}));