import React from 'react'

export default function About() {
    return (
        <div id='about'>

            <div className="container-fluid bg-dark " id='aboutMaindiv'>

                <div className="container row p-5 " id='aboutContainer'>

                    {/* 1 box */}
                    <div className="col col-lg-3 col-md-3 col-sm-12 col-12 mt-3 ">
                        <div className="card1">
                            <strong className='fs-1'>180+</strong><br /> <br />year expireance
                        </div>
                    </div>


                    {/* 2 box */}
                    <div className="col col-lg-3 col-md-3 col-sm-12 col-12 mt-3">
                        <div className="card2">
                            <strong className='fs-1'>10+</strong><br /> <br /> expert doctor
                        </div>
                    </div>

                    {/* 3 box */}
                    <div className="col col-lg-3 col-md-3 col-sm-12 col-12 mt-3">
                        <div className="card3">
                            <strong className='fs-1'>15k</strong><br /> <br /> expert doctor
                        </div>
                    </div>

                    {/* 4 box */}
                    <div className="col col-lg-3 col-md-3 col-sm-12 col-12 mt-3">
                        <div className="card4">
                            <strong className='fs-1'>350+</strong><br /> <br /> expert doctor
                        </div>
                    </div>


                </div>

            </div>

        </div>
    )
}
