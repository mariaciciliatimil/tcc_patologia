import React from 'react'
import './top.css'

// Imported Icons ===========>
import {BiSearchAlt} from 'react-icons/bi'
import {TbMessageCircle} from 'react-icons/tb'
import {MdOutlineNotificationsNone} from 'react-icons/md'
import {BsArrowRightShort} from 'react-icons/bs'
import {BsQuestionCircle} from 'react-icons/bs'

// Imported Image =========>
import img from '../../../Assets/user (3).png'
//import img2 from '../../../Assets/micro.png'
import video from '../../../Assets/video.mp4'

const Top = () => {
  return (
    <div className='topSection'>
      <div className="headerSection flex">
        <div className="title">
          <h1>Bem Vindo ao Sistema.</h1>
        </div>

        

        <div className="adminDiv flex">
          <TbMessageCircle className="icon"/>
          <MdOutlineNotificationsNone className="icon"/>
          <div className="adminImage">
            <img src={img} alt="Admin Image" />
          </div>
        </div>

      </div>

      <div className="cardSection flex">

        

        <div className="leftCard flex">
          <div className="main flex">

             <div className="textDiv">
              <h1>Bandeja</h1>

              <div className="flex">
                <span>
                  Exames <br /> <small>4 </small>
                </span>
               
              </div>

               <span className="flex link">
                  Cadastrar Bandeja <BsArrowRightShort className="icon"/>
               </span>

             </div>

            <div className="imgDiv">
              
            </div>

           
          </div>

           {/* We shall use this card later .... 
            <div className="sideBarCard">
              <BsQuestionCircle className="icon"/>
              <div className="cardContent">
                <div className="circle1"></div>
                <div className="circle2"></div>

                <h3>Help Center</h3>
                <p>Having trouble in Planti, please contact us from for more questions.</p>

                <button className='btn'>Go to help center</button>
              </div>
            </div>
            */}
        </div>

      </div>
    </div>
  )
}

export default Top