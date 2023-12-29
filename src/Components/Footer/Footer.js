import React from 'react'
import '../Footer/Footer.css'
import pic from '../../assets/pic.jpg'
const Footer = () => {
    return (
        <div className='footer col-md-12 d-flex justify-content-center py-3  '>
            <div className='align-items-center justify-content-center '>
            <img src={pic} alt='Green Logo' />
            <p> <a href='https://wa.me/9613194420'>Contact us on Whatsapp <i class="fab fa-whatsapp"></i> </a></p>
            <h3>Find us</h3>
            <p>Tripoli, Jabal Mohsen</p>
            </div>
            
            

        </div>
    )
}

export default Footer