// Importing database functions. DO NOT MODIFY THIS LINE.
import { central, db1, db2, db3, vault } from "./databases.js";

async function getUserData(id) {

  //Check values outside of the range( 1 and 10)
  if(typeof id !== "number"){ return Promise.reject(new Error("Invalid Input -- Not a Number"))};
  if (id < 1 || id > 10) { return Promise.reject (new Error("Invalid Input -- Out of Range"))};

  const dbs = {
    db1: db1,
    db2: db2,
    db3: db3
  };

  try{
  
  //Access the central database that returns a string that identifies which database to access for that particular user's information.
  const centralDB = await central(id);


}catch(e){
  console.log(e.message)}
}