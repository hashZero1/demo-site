import {Link} from 'react-router-dom'
import './HomeStyles.scss'
import './MediaQueries.scss'
import "animate.css/animate.min.css";

export default function Home(){
    return(
        <div className='container'>
           
            <h4>Let's Collaborate</h4>
           
            <div className='contents'>
                <div className='inner-content'>   
                    <h1>AI + RPA is what we do</h1>
                </div>
                <div className='inner-swap'>
                    <div className='inner-swap-content'>
                        <p>Future-Proof your business. Drive efficiency, profitability and deliver on customer experience</p>
                        <Link to='/services/automation'>ai + rpa automation<span><img src='https://cdn1.iconfinder.com/data/icons/freeline/32/Arrow-Right-512.png' alt='images'/></span></Link>
                    </div>
                    <div className='inner-img'>
                        <img src='https://www.xivtech.io./rp2.jpg' alt='robot'/>
                    </div>
                </div>
            </div>
         

            <div className='contents'>
                <div className='inner-content'>   
                    <h1>Make Bolder Choices</h1>
                </div>
                <div className='inner-swap'>
                  <div className='inner-swap-content'>
                     <p>Digital focused strategies to realize market-changing ideas</p>
                     <Link to='/services/cloud-native'>Build Better App<span><img src='https://cdn1.iconfinder.com/data/icons/freeline/32/Arrow-Right-512.png' alt='images'/></span></Link>
                  </div>

                  <div className='inner-img'>
                     <img src='https://www.xivtech.io./p1.png' alt='robot'/>
                  </div>
                </div>
            </div>
           
            <div className='contents'>
                <div className='inner-content'>   
                    <h1>Innovate with Speed</h1>
                </div>
                <div className='inner-swap'>
                  <div className='inner-swap-content'>
                     <p>Create higher quality software, deliver on customer expectations and business goals</p>
                     <Link to='/services/devops'>DevOps<span><img src='https://cdn1.iconfinder.com/data/icons/freeline/32/Arrow-Right-512.png' alt='images'/></span></Link>
                  </div>

                  <div className='inner-img'>
                     <img src='https://www.xivtech.io./p2.jpg' alt='robot'/>
                  </div>
                </div>
            </div>
          
            <div className='contents'>
                <div className='inner-content'>   
                    <h1>Embrace Cloud</h1>
                </div>
                <div className='inner-swap'>
                  <div className='inner-swap-content'>
                     <p>With Cloud-First accelerate innovation and optimize performance</p>
                     <Link to='/services/cloud-transition'>cloud services<span><img src='https://cdn1.iconfinder.com/data/icons/freeline/32/Arrow-Right-512.png' alt='images'/></span></Link>
                  </div>

                  <div className='inner-img'>
                     <img src='https://www.xivtech.io./p3.jpg' alt='robot'/>
                  </div>
                </div>
            </div>
            <div className='wrapper extra-links'>
            <button><span>Get in touch</span></button>
            </div>
        </div>
    )
}