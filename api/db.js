import mysql from "mysql"

export const db = mysql.createConnection({
    host: "bc9upqx0nbamjnpolfnl-mysql.services.clever-cloud.com",
    user: "ueegjw6lakm9lbcp",
    password: "032QL7MNmmYbLmD6xhdR",
    database: "bc9upqx0nbamjnpolfnl"
})