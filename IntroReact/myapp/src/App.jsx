import { useState } from 'react'
import './App.css'
import UserCard from './components/Practice-1/UserCard'
import adiyogi from "./assets/adiyogi.png"
import maharana from "./assets/maharana.jpeg"
import prithviraj from "./assets/prithviraj.webp"
import useStatePractice from './components/Practice-2/useStatePractice'

function App() {
  const [mytask, setTask] = useState("")
  const saveTask = () => {
    localStorage.setItem('task', mytask)
    setTask("");
    console.log("Task saved:", mytask)
  }

  return (
    // <>
    //   <div className='container'>
    //     <h4>Login</h4>
    //     <div className='main'>
    //       <div>
    //         <h3>Username</h3>
    //         <input type='username' placeholder='username'/>
    //       </div>
    //        <div>
    //         <h3>Password</h3>
    //         <input type='password' placeholder='password'/>
    //       </div>
    //       <div>
    //         <button onClick={saveTask}>Add Task</button>
    //       </div>
    //     </div>
    //   </div>
    // </>

    <div className='parent'>
      <div className='component1-parent'>
      <UserCard name="Shivji" description="Image of Shivji" myImage={adiyogi} />
      <UserCard name="Maharana Pratap" description="Image of Maharan Pratap" myImage={maharana}/>
      <UserCard  name="Prithvi Raj Chouhan" description="Image of Prithiv Raj Chouhan" myImage={prithviraj}/>
      </div>
      <div>
        <useStatePractice />
      </div>
    </div>
  )
}

export default App
