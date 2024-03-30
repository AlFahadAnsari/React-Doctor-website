import React from 'react'


 function Navbar() {
  return (
    <>
    <div id='nav'>

<nav class="navbar  navbar-expand-lg  bg-white rounded-3 p-3">
    <div class="container-fluid">
      <a class="navbar-brand me-auto " id="brand" href="#">alFahad ansari</a>

      <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
        <div class="offcanvas-header">
          <h5 class="offcanvas-title" id="offcanvasNavbarLabel">alfahad ansari</h5>
          <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>


        <div class="offcanvas-body">


          
          <ul class="navbar-nav justify-content-center flex-grow-1 pe-3">



            <li class="nav-item">
              <a class="nav-link active fs-5 mx-1" aria-current="page" href="#">Home</a>
            </li>



            <li class="nav-item">
              <a class="nav-link fs-5 mx-1" href="#about">about</a>
            </li>



            <li class="nav-item">
              <a class="nav-link fs-5 mx-1" href="#step">step</a>
            </li>



            <li class="nav-item">
              <a class="nav-link fs-5 mx-1" href="#doctor">doctors</a>
            </li>


            <li class="nav-item">
              <a class="nav-link fs-5 mx-1" href="#footer">contact</a>
            </li>

          </ul>
        </div>
      </div>

      <a href="" id="loginBtn">login</a>


      <button class="navbar-toggler" id="navbar-toggler" type="button" data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

    </div>
  </nav>



    {/* <marquee behavior="down" direction="right" loop="">thnks you so much ❤️</marquee> */}



    </div>
    </>
  )
}

export default Navbar

