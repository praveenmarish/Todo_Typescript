import express, { Express } from 'express'
import mongoose, { connection } from 'mongoose'
import cors from 'cors'
import todoRoutes from './routes'
import * as dotenv from 'dotenv'
import connectDB from './config'


dotenv.config()

const app: Express = express()

const PORT: string | number = process.env.PORT || 4000
connectDB()
app.use(cors())

app.use(express.json());
app.use(todoRoutes)

const server = app.listen(PORT, () =>
            console.log(`Server running on http://localhost:${PORT}`)
        )

process.on("unhandledRejection", (err:Error) => {
            console.log(`Logged Error: ${err.message}`);
            server.close(() => process.exit(1));
          });