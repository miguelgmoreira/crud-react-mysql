import mysql from "mysql"

export const db = mysql.createConnection({
    host: "containers-us-west-209.railway.app",
    user: "root",
    password: "NAq62PWvnEuwgH7r6UEO",
    database: "railway"
})