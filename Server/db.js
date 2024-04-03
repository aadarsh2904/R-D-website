import mysql from 'mysql'

const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"root2004",
    database:"r&d_website"
});

db.connect((error)=>{
    if(error){
        console.log(error);
    }else{
    console.log("Database connected");
    }
});
export default db;
