import React from 'react';
import './style.css';
import Card from '../../../components/ui';
import { Link } from 'react-router-dom';

const RecentPosts = (props) => {
  return(
    <div style={props.style}>
        <Card style={{marginBottom: '20px', paddingBottom:'20px'}}>
            <div className="postImageWrapper">
                <img src='/blogPostImages/ronaldo.png' alt=""/>
            </div>

            <div className='mt-3' style={{textAlign: 'center'}}>

                <span>Sports Update</span>
                <h2 className='mt-4'>Cristiano Ronaldo JOINS UNITED!</h2>
                <span>posted on September 09,2021 by Saksham Hadokar</span>
                <p className='mt-4'>The Story begins where it all started 12 years ago, Cristiano Ronaldo reached an agreement with Manchester United 12 years after he left Old Trafford for Real Madrid. Where it all started from the rumors-Cristiano to City...</p>

                <Link to='/post/Cristiano-Ronaldo-JOINS-UNITED!' className='btn btn-dark mt-3'>Read More</Link>     

            </div>

            


        </Card>
    </div>
   )

 }

export default RecentPosts