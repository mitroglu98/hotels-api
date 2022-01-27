import express from 'express';
import { Application } from 'express';
import { createConnection } from 'typeorm';

import dbConfig from './common/db-config';

// import routera 
import hotelRouter from './routing/hotel-routing';

const app: Application = express(); 
app.use(express.json());

app.use(hotelRouter);

createConnection(dbConfig)
  .then(connection => {
    console.log("Connected to DB!");
  })
  .catch(err => {
    console.log("Error while connecting to DB");
    console.log(err);
  })

const listener: any = app.listen(3000, () => {
  console.log('Server is listening at port 3000'); 
  console.log(listener.address().port) ; 
})

