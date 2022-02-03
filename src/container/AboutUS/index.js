import React from 'react'
import './style.css'
import dp from '../../assets/dp.jpg'
import dp1 from '../../assets/brother.jpg'
import Footer from '../../components/Footer'

function AboutUS() {
    return (
        <div>
            <div className='mt-5 collage d-flex justify-content-center align-items-center'>
                  
                  <div className="card text-center" style={{backgroundColor:'transparent'}}>
                    <div className="card-header">
                       <h1>TRAVEL</h1>
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">"I don't know where I'm going, but I'm on my way."</h5>
                        <a href="#" className="btn btn-primary mt-5">Let's Explore</a>
                    </div>
                    </div>
            </div>
            <div className='row mt-5' style={{textAlign: 'center'}}>
                  <div className='col col-md-4 col-md-push-8' style={{maxWidth: '12.5rem'}}>
                       <span className='name'>Saksham Hadokar</span>
                       <span className='role'>Content Writer</span>
                  </div>
            </div>

            <div className='mt-3 row'>
                <div className='col-12 col-md-6' style={{maxWidth: '12.5rem'}}>
                    <a ><img className='team-img' src={dp1}></img></a>
                </div>
                <div className='col-12 col-md-6'>
                      <p className='para'>hey this is saksham nice to meet you guys 
                      hey this is anshika nice to meet you guys font-size: 1.125rem; line-height: 1.8; Meera is the UK editor of Adventure.com and based in London. It was her first solo trip in 2004, a four-month adventure around Southeast Asia, which kickstarted her life as a freelance travel writer, and she has written for publications such as Rough Guides, the Guardian, National Geographic Traveller, Telegraph, Travel Weekly and Bloomberg, and co-authored her first guidebook, the 2017 Rough Guide to Cambodia. Her passion for adventure travel has seen her spend two months at a game lodge in South Africa, sail aboard a cargo passenger ship in French Polynesia and feed endangered bear cats in Cambodia. But no matter how itchy the feet, they always bring her home to her beloved London. Full Bio
</p>
                </div>

            </div>
            <hr></hr>
            <div className='d-flex flex-row-reverse mt-5'>
                  <div className='col-12 col-md-4 col-md-push-8' style={{maxWidth: '12.5rem',textAlign:'center'}}>
                       <span className='name'>Anshika</span>
                       <span className='role'>Software Developer</span>
                  </div>
            </div>

            <div className='d-flex mt-3 flex-row-reverse '>
                <div className='col-12 col-md-6' style={{maxWidth: '12.5rem',textAlign:'center'}}>
                    <a ><img className='team-img' src={dp}></img></a>
                </div>
                <div className='col-12 col-md-6'>
		              <p className='para' style={{textAlign:'right'}}>Hello I'm Anshika Kapoor    from Palampur.<br/>
	Currently I'm pursuing my B.tech from nit Hamirpur.
	I am in final year of my B.tech program in Computer Science and Engineering and will be graduating in may 2022.<br/> 
	I'm well versed with the technologies like c++ and react.
	I did few projects during my b.tech based on these technologies. You can check them on my github.
	Also I did couple of internships where I worked as front-end web developer.<br/> 
	I like playing basketball and have been part of my college basketball team for last 3 years
	</p>
                </div>

            </div>
             <Footer />
        </div>
    )
}

export default AboutUS
