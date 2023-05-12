import './FooterStyles.scss'
export default function Footer(){
    return(
        <div className="footer">
            <div className='footer-content'>
              <div className="footer-logo">
                 <img src="https://www.xivtech.io./logo2.svg" alt="logo"/>
                 <img className="logo-name" src="https://www.xivtech.io./Text1.svg" alt="logo"/>
              </div>
              <div className="footer-para">
                 <p>By leveraging our full spectrum strategy, design, and technology capabilities, we deliver game-changing outcomes for our clients around the world.</p>
              </div>
            </div>
            <div className='footer-links'>
            <div className="footer-content2">
                <h2>Locations</h2>
                <p>Toronto</p>
                <p>New Delhi</p>
            </div>
            <div className="footer-content2">
                <h2>Services</h2>
                <p>Complete AI + RPA Automation</p>
                <p>Cloud Services</p>
                <p>Delivery Pipeline Automation</p>
                <p>Simplify Cloud Ops</p>
                <p>Build Better Apps</p>
            </div>
            <div className="footer-content2">
                <h2>XivTech</h2>
                <p>About</p>
                <p>Careers</p>
                <p>Contact</p>
            </div>
            </div>
          
        </div>
    )
}