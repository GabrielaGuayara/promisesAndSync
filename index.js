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
  
  //Determine database to access for a particular user's information.
  const valueReturnedFromCentral = await central(id);

  //Access databases that contains the user's basic information, including username, website, and company. 
  const userPersonalData = await dbs[valueReturnedFromCentral](id)
    


}catch(e){
  console.log(e.message)}
}