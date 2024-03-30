import React from 'react'
import img1 from '../assets/img1.jpg'
import img2 from '../assets/img2.jpg'
import img3 from '../assets/img3.jpg'
import { Link } from 'react-router-dom'

export default function Sec6Cards() {

 

  return (
    <div className=' pt-4' id='doctor'>

        <h1 id='sec5h1 ' className='text-center'>Our Specialist Doctor Team</h1>
        <p className='text-center pt-4'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia voluptatibus quidem ipsum suscipit, nihil optio blanditiis fugit deleniti facilis ea.</p>



        <div className="container mt-5" id='sec6cardmain'>
            <div className="row px-5 py-1">



                <div className="col col-sm-12 col-md-4 col-lg-4 col-12">
                    <div className="card mx-3 my-4">        
                            <img src={img1} alt="loding....." className="img-fluid" id="team-img"/>
                            <h5 className="card-title pt-3  px-2">dr.Name example</h5>
                            <div className="para"><p>exaple hospital</p> <p>⭐⭐⭐⭐⭐</p></div>
                            <p className='text-center'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, inventore?</p>
                            <Link to="/doctor1" className="btn btn-primary">read more</Link>        

                            {/* <button className='btn btn-primary'><a href="doctor1.js">read more</a></button> */}

                           
                    </div>
                </div>

                    
                <div className="col col-sm-12 col-md-4 col-lg-4 col-12 ">
                    <div className="card mx-3 my-4 ">        
                            <img src={img2} alt="loding....." className="img-fluid" id="team-img"/>
                            <h5 className="card-title pt-3  px-2">dr.Name example</h5>
                            <div className="para"><p>exaple hospital</p> <p>⭐⭐⭐⭐</p></div>
                            <p className='text-center'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, inventore?</p>
                            <Link to="/doctor2" className="btn btn-primary">read more</Link>        
                    </div>
                </div>



                <div className="col col-sm-12 col-md-4 col-lg-4 col-12">
                    <div className="card mx-3 my-4">        
                            <img src={img3} alt="loding....." className="img-fluid" id="team-img"/>
                            <h5 className="card-title pt-3  px-2">dr.Name example</h5>
                            <div className="para"><p>exaple hospital</p> <p>⭐⭐⭐⭐⭐</p></div>
                            <p className='text-center'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, inventore?</p>
                            <Link to="/doctor3"  className="btn btn-primary">read more</Link>        
                    </div>
                </div>       
            </div>
         </div>


            <div className="endpart">
                <h1 className='text-center pt-5'>It's Time To Change Your Life To Day</h1>
                <p className='text-center pt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta eaque officiis sed quia expedita ratione saepe fugiat fuga aspernatur adipisci.</p>

                    <div className="contbtns">
                <button className="contact-btn">contact us</button>
                <button className='appoimentbtn'>make an appoinment</button>
                </div>
            </div>

    <div id='end'>
       <button><a href="#nav"><i class="fa-solid fa-arrow-up text-end" id='toparrow'></i></a></button> 
        </div>

    </div>
  )
}
