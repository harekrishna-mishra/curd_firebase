import logo from './logo.svg';
import './App.css';
import {getDatabase , ref , set} from "firebase/database"
import { db } from './firebase';
import { collection , getDocs } from "firebase/firestore"
import { useEffect, useState } from 'react';

function App() {
  const  [users, setUsers]= useState([]);
  const [name, setName]=useState("")
  const [age, setAge]= useState(0)
  /* const db=getDatabase(app)
  const putdata= ()=>{
    set(ref(db, "user/harekrishna") ,{
      id:1,
      name:"harekrishna mishra",
      age:21,
      role: "associate frontend developer"
    })
  } */
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
        <input placeholder='Name'></input>
        <input placeholder='age'></input>
        <button>Create User</button>
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
