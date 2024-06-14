// Importing database functions. DO NOT MODIFY THIS LINE.
import { central, db1, db2, db3, vault } from "./databases.js";

async function getUserData(id) {
try{
  const dbs = {
    db1: db1,
    db2: db2,
    db3: db3
  };
  //Access the central database that returns a string that identifies which database to access for that particular user's information.
  const centralDB = await central(id);

}catch(e){
  console.log(e.message)}
}