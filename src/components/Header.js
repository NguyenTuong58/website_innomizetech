import React from 'react';
import { NavLink } from 'react-router-dom';




const Header = () => {
  return (
  <div>
    
    <header>
      <hr />
      <div className="links">
      <div className="menu">
        <nav class="navbar navbar-expand-lg   menu-main">
        
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Services
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <a class="dropdown-item" href="#">Action</a>
              <a class="dropdown-item" href="#">Another action</a>
              <a class="dropdown-item" href="#">Something else here</a>
            </div>
          </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Case studies</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Blog</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">About us</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Career</a>
            </li>
          </ul>
          <button type="button" class="btn btn-danger btn-menu">Contact Us</button>
        </div>
      </nav>
      </div>
        

      {/* menu */}

        
        {/* <button onclick="activateLasers()">
          <p>Contact Us</p>
        </button> */}
      </div>

      <div className="main">
        
      {/* banner */}

        <div className="main__banner">
          <div className="main__title">

          </div>
            <h1>We provide</h1>
            <h1 className="main__title--color">optimized IT solutions</h1>
            <h1>for your business!</h1>
            <div className="main__text">
              <p>we are experts in Cloud computing, Web Development, Mobile Development, DevOps, and Automation Testing that help you meet your business needs</p>
            </div>
            <button className="main__banner--btn" onclick="activateLasers()">
              <p>Our Services</p>
            </button>
        </div>

      {/* content */}

        <div className="main__content">
            <p>OUR CORE VALUES</p>
            <div className="main__content--title">
              <p>Found in 2008, our mission is to create awesome products that will make your everyday life essier. Our experienced engineering and development team are committed, pasionate, and continually challenge themselves on the advancements and changes of the technologies we utilize to deliver the most up-to-date and innovative solutions.</p>
            </div>
            <div className="main__content--information">
                <i class="fas fa-rocket"></i>
                <p>Committed</p>
                <h6>Our team puts in the extra hours to deliver their work efficiently, wasting no time, exceeding expectations; going above and beyond and showing initiative to deliver quality solutions.</h6>
            </div>
            <div className="main__content--information">
                <i class="fas fa-coins"></i>
                <p>Team Focuesd</p>
                <h6>Our team puts in the extra hours to deliver their work efficiently, wasting no time, exceeding expectations; going above and beyond and showing initiative to deliver quality solutions.</h6>
            </div>
            <div className="main__content--information">
              <i class="fas fa-users"></i>
                <p>Responsible</p>
                <h6>Our team puts in the extra hours to deliver their work efficiently, wasting no time, exceeding expectations; going above and beyond and showing initiative to deliver quality solutions.</h6>
            </div>

        </div>
      </div>
    </header>
   </div> 
  );
};

export default Header;