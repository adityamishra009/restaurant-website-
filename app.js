import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { dbConnection } from "./database/dbconnection.js";
import { errorMiddleware } from './error/error.js';
import reservationRouter from './routes/reservationRoute.js'

const app = express();
dotenv.config({path:"./config/config.env"});

app.use(cors({
  origin:[],
  methods:[],
  credentials:true,
}))

app.use(express.json());
app.use(express.urlencoded({ extended:true}));

app.use("/api/v1/reservation", reservationRouter)

dbConnection();


app.use(errorMiddleware)
export default app;