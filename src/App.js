import logo from './logo.svg';
import './App.css';
import {getDatabase , ref , set} from "firebase/database"
import { db } from './firebase';
import { collection , getDocs } from "firebase/firestore"
import { createRef, useEffect, useState } from 'react';

function App() {
  const  [users, setUsers]= useState([]);
  const [name, setName]=useState("")
  const [age, setAge]= useState(0)

  // int 
  /* const db=getDatabase(app)
  const putdata= ()=>{
    set(ref(db, "user/harekrishna") ,{
      id:1,
      name:"harekrishna mishra",
      age:21,
      role: "associate frontend developer"
    })
  } */

  const createUser=() =>{

  }

  const getUserRef=collection(db,"crud")
  useEffect(()=>{
    const getUsers= async ()=>{
      const data= await getDocs(getUserRef)
      const allData=data.docs.map((dc)=>({
        ...dc.data(),id:dc.id
      }))
      console.log(allData)
      setUsers(allData)
    }
    getUsers()
  },[])

  return (
    <div className="App">
        <h1>Firebase CRUD app</h1>
        {/* <button  onClick={putdata} >Put Data</button> */}
        <input placeholder='Name' onClick={(e)=>{setName(e.target.value)}}></input>
        <input placeholder='age' onClick={(e)=>{setAge(e.target.value)}}></input>
        <button onClick={createUser}>Create User</button>
        {
          users.map((e)=>{
            return(
              <div>
              <h5>
                Name:-{e.name} Age: {e.age} 
              <button>Edit</button>
              <button>Delete</button>
              </h5>
            </div>
            )
          })
        }
    </div>
  );
}

export default App;
