import React from 'react'
import './listing.css'

// imported icons ===========>
import {AiFillHeart} from 'react-icons/ai'
import {BsArrowRightShort} from 'react-icons/bs'
import {AiOutlineHeart} from 'react-icons/ai'

// imported Images ===========>
import img from '../../../Assets/image (1).png'
import img1 from '../../../Assets/image (9).png'
import img2 from '../../../Assets/image (8).png'
import img3 from '../../../Assets/image (10).png'
import user1 from '../../../Assets/user (1).png'
import user2 from '../../../Assets/user (2).png'
import user3 from '../../../Assets/user (3).png'
import user4 from '../../../Assets/user (4).png'

const Listing = () => {
  return (
    <div className='lisitingSection'>

      <div className="heading flex">
        <h1>Etapa Inicial</h1>
        <button className='btn flex'>
        
        </button>
      </div>

      <div className="secContainer flex">
        <div className="singleItem">
          <AiFillHeart className="icon"/>
          
          <h3>Etapa 1</h3>
        </div>

        <div className="singleItem">
          <AiOutlineHeart className="icon"/>
          
          <h3>Etapa 2</h3>
        </div>

        <div className="singleItem">
          <AiOutlineHeart className="icon"/>
         
          <h3>Etapa 3</h3>
        </div>

        <div className="singleItem">
          <AiFillHeart className="icon"/>
         
          <h3>Etapa 4</h3>
        </div>
      </div>

      <div className="sellers flex">
        <div className="topSellers">
          

          
        </div>


        <div className="featuredSellers">
          

         
        </div>
      </div>
    </div>
  )
}

export default Listing