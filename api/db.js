import mysql from "mysql"

export const db = mysql.createConnection({
    host: "containers-us-west-208.railway.app",
    user: "root",
    password: "CLlp0RW9FaePcUUyexoG",
    database: "railway"
})