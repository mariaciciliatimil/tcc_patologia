import React from 'react'
import './activity.css'

// Imported Icons =========>
import {BsArrowRightShort} from 'react-icons/bs'

// Imported Images =========>
import user1 from '../../../Assets/user (1).png'
import user2 from '../../../Assets/user (2).png'
import user3 from '../../../Assets/user (3).png'
import user4 from '../../../Assets/user (4).png'
import user5 from '../../../Assets/user (5).png'

const Activity = () => {
  return (
    <div className='activitySection'>
       <div className="heading flex">
        <h1>Urgentes</h1>
        <button className='btn flex'>
          Ver Todos
          <BsArrowRightShort className="icon"/>
        </button>
       </div>

       <div className="secContainer grid">
        <div className="singleCustomer flex">
       {/* COMENTÁRIO JSX   <img src={user1} alt="Customer Image" />*/} 
          <div className="customerDetails">
            <span className="name">Preventivo</span>
            <small>Codigo 12345</small>
          </div>
          <div className="duration">
            2 min 
          </div>
        </div>

        <div className="singleCustomer flex">
          
          <div className="customerDetails">
            <span className="name">Preventivo</span>
            <small>Codigo 54321</small>
          </div>
          <div className="duration">
            2 min 
          </div>
        </div>

        <div className="singleCustomer flex">
         
          <div className="customerDetails">
            <span className="name">Preventivo</span>
            <small>Codigo9873</small>
          </div>
          <div className="duration">
            2 min 
          </div>
        </div>

        <div className="singleCustomer flex">
        
          <div className="customerDetails">
            <span className="name">Preventivo</span>
            <small>Codigo 8377</small>
          </div>
          <div className="duration">
            2 min 
          </div>
        </div>

        <div className="singleCustomer flex">
          
          <div className="customerDetails">
            <span className="name">Preventivo</span>
            <small>Codigo 4339</small>
          </div>
          <div className="duration">
            2 min 
          </div>
        </div>
       </div>

        
    </div>
  )
}

export default Activity