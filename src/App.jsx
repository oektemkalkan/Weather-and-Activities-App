import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Form from './components/form';
import List from './components/list';
import { uid } from "uid";

function App() {
  const [activity, setActivity] = useState([]);

  function handleAddActivity(newActivity){
    setActivity([...activity,{ ...newActivity, id:uid()}])
  }

  return (
    <>
      <List activity={activity}/>
      <Form activity={activity} onAddActivity={handleAddActivity}/>
    </>
  )
}

export default App
