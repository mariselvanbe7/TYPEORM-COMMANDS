import "reflect-metadata"
import {DataSource} from "typeorm"
import {Students} from "./Entity/Student"
import * as dotenv from "dotenv"

dotenv.config()

export const MyDataSource = new DataSource({
    type: "mysql",
    host: process.env.DB_HOST,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    port :3306,
    synchronize: true,
    logging: false,
    entities: [Students],
})
