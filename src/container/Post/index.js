import React from 'react';
import Layout from '../../components/Layout';
import { Link } from 'react-router-dom';
import './style.css'

const Post = (props) => {

    console.log(props);


  return(
        <Layout>
           <div className="row mt-5 ">
              <div className="col-sm-6">
                <Link to='/post/Cristiano-Ronaldo-JOINS-UNITED!' className='custom-card'>
                  <div className="card cardcss">
                    <div className='card-img-div'>
                         <img className="card-img-top profileImageContainer" src='/blogPostImages/ronaldo.png' alt="Card image cap" />
                    </div>
                    <div className="card-body">
                      <h5 className="card-title">Cristiano Ronaldo JOINS UNITED!</h5>
                      <p className="card-text">The Story begins where it all started 12 years ago, Cristiano Ronaldo reached an agreement with Manchester United 12 years after he left Old Trafford for Real Madrid. Where it all started from the rumors-Cristiano to City...</p>
                    </div>
                  </div>
                  </Link>
              </div>
              <div className="col-sm-6">
              <Link to='/post/beautiful-and-special-moment' className='custom-card'>
                  <div className="card cardcss">
                  <div className='card-img-div'>
                     <img className="card-img-top profileImageContainer" src="/blogPostImages/3.png" alt="Card image cap" />
                   </div>
                    <div className="card-body">
                      <h5 className="card-title">Beautiful & Special Moment</h5>
                      <p className="card-text">Extremity direction existence as Dashwood's do up. Securing Marianne led welcomed offended but offering six raptures. Conveying concluded newspaper rapturous oh at...</p>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
            <div className="row mt-5">
              <div className="col-sm-6">
              <Link to='/post/beauti-lies-within-special' className='custom-card'>
                <div className="card cardcss">
                <div className='card-img-div'>
                   <img className="card-img-top" src="/blogPostImages/1.png" alt="Card image cap" />
                </div>
                  <div className="card-body">
                    <h5 className="card-title">Beauti lies within special</h5>
                    <p className="card-text">Blessed you're lights. There. Behold may yielding meat can't void rule, earth green have creepeth land let gathering great fruitful under gathered waters...</p>    
                  </div>
                </div>
                </Link>
              </div>
              <div className="col-sm-6">
              <Link to='/post/sliding-my-way-to-life' className='custom-card'>
                <div className="card cardcss">
                <div className='card-img-div'>
                   <img className="card-img-top" src="/blogPostImages/2.png" alt="Card image cap" />
                </div>
                  <div className="card-body">
                    <h5 className="card-title">Sliding My Way To Life</h5>
                    <p className="card-text">Arrived compass prepare an on as. Reasonable particular on my it in sympathize. Size now easy eat hand how. Unwilling he departure elsewhere dejection at..</p>
                  </div>
                </div>
                </Link>
              </div>
            </div>
            <div className="row mt-5">
              <div className="col-sm-6">
              <Link to='/post/memories-from-last-summer' className='custom-card'>
                <div className="card cardcss">
                <div className='card-img-div'>
                   <img className="card-img-top" src="/blogPostImages/4.png" alt="Card image cap" />
                </div>
                  <div className="card-body">
                    <h5 className="card-title">Memories From Last Summer</h5>
                    <p className="card-text">Purus Convallis nascetur diam torquent sit id adipiscing in netus praesent etiam enim nec massa fusce orci nam potenti hac tortor montes placerat tortor natoque ante volutpat className className platea hymenaeos...</p>
                  </div>
                </div>
                </Link>
              </div>
            </div>
         </Layout>
   )

 }

export default Post;