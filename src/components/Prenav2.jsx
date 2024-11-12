import React from 'react';
import { SiYoutubekids } from "react-icons/si";
import { FaFacebook } from "react-icons/fa";
// Icons import code below
import { CiSearch } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { Link } from 'react-router-dom';
import Collapsedsidepanel from './Collapsedsidepanel';



const Prenav2 = () => {

  return (
    <div className='prenav2'>
      <div className="collapsedsidepanel">
        <Collapsedsidepanel />
      </div>

      <div className="logo">
        <img src="https://stylo.pk/cdn/shop/files/110x60-Logo_45_140x.png?v=1705411679"
          alt='brand logo' />
      </div>
      <div className="lio">
        <div className="youtube"> <a href="https://www.youtube.com/channel/UCFvLQNgT9Gy4GKmLkhSMG-Q"><SiYoutubekids />  </a></div>
     
     <div className="facebook"><a href="https://www.facebook.com/StyloShoes/"> <FaFacebook />
     </a></div>
    
     </div>

      <div className="icons">

        <Link className='link' to={"/search"} >
          <div className='icon1' >
            <CiSearch />
          </div>
        </Link>

        <Link className='link' to={'/signup'}>
          <div className="icon2">
            <CiUser />
          </div>
        </Link>

        <div className="icon3"><CiHeart /></div>
        <div className="icon4"><CiShoppingCart /></div>

      </div>
    </div>
  )
}

export default Prenav2;

