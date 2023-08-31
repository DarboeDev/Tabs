import { useState, useEffect } from 'react'
import './App.css'

import { FaAngleDoubleRight } from 'react-icons/fa'
const url = 'https://course-api.com/react-tabs-project'
function App() {
 const [tabs, setTabs] = useState([])
const [value, setValue] = useState(0)
const [loading, setLoading] = useState(true)

const fetchData = async () =>{
  const reponse = await fetch(url)
  const data = await reponse.json()
  setTabs(data)
  setLoading(false)
}
useEffect(()=>{
   fetchData()
}, [])
if(loading){
  return(
    <main>
     <span class="loader"></span>
    </main>
  )
}
const {id, title, company, dates, duties} = tabs[value]
  return (
   <div className="container">
    <div className="btn-container">
      {
        tabs.map((item, index) =>{
          return(
            <button className={`btn ${index === value && 'active'}`}
            onClick={()=> setValue(index)} 
            key={item.id}>
              {item.company}
            </button>
          )
        } )
      }
    </div>
    <div className="wrapper">
      <h1 className="job">
        {title}
      </h1>
      <h4 className="company">{company}</h4>
      <p className="date">{dates}</p>
      
      {
        duties.map((duty, index)=>{
          return(
            <div className="desc" key={index}>
              <FaAngleDoubleRight className='icon'/>
              <p className="duty">{duty}</p>
            </div>
          )
        })
      }
    </div>
   </div>
  )
}

export default App
