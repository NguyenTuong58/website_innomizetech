import React, { Component } from "react";
import Fade from "react-reveal";

class Footer extends Component {
  render() {
    if (!this.props.data) return null;

    const networks = this.props.data.social.map(function (network) {
      return (
        <li key={network.name}>
          <a href={network.url}>
            <i className={network.className}></i>
          </a>
        </li>
      );
    });

    return (
      <footer>
        <div className="row">
          <Fade bottom>
            <div className="container footer">
              <div className="row">
                <div className="col-md-6">
                  <img src="footer.png" width="350" height="95" alt=""/>
                  <p className="footer-content">As a start-up company, our team is our highest priority and we welcome new talent in our team. Along with our young spirit. our aim is to create an ideal and open open anvironment where each is eager to work and encouraged by the creactive ability of every member of our team. Com and see us!</p>
                </div>
                <div className="col-md-2">
                  <h1 className="footer-title">Explore</h1>
                  <p className="ft-p"> <a class="Explore-ct" href="#">Home</a> </p>
                  <p className="ft-p"> <a class="Explore-ct" href="#">About</a> </p>
                  <p className="ft-p"> <a class="Explore-ct" href="#">About</a> </p>
                  <p className="ft-p"> <a class="Explore-ct" href="#">Content</a> </p>
                </div>
                <div className="col-md-2">
                  <h1 className="footer-title">Resources</h1>
                  <p className="ft-p"> <a class="Explore-ct" href="#">Case Studies</a> </p>
                  <p className="ft-p"> <a class="Explore-ct" href="#">Our Services</a> </p>
                  <p className="ft-p"> <a class="Explore-ct" href="#">Testimonials</a> </p>
                  <p className="ft-p"> <a class="Explore-ct" href="#">Our Technologies</a> </p>
                </div>
                <div className="col-md-2">
                  <h1 className="footer-title">Address</h1>
                  <p className="ft-p"> <a class="Explore-ct" href="#">2A/64A Bach Dang Street, Ward 2, Tan Binh District HCM, Vietnam</a> </p>
                  <p className="ft-p"> <a class="Explore-ct" href="#">+84 98 996 0578</a> </p>
                  <p className="ft-p"> <a class="Explore-ct" href="#">info@innomizetech.com</a> </p>
                  <div className="Social-Network">
                    <i class="fab fa-facebook"></i>
                    <i class="fab fa-twitter"></i>
                    <i class="fab fa-invision"></i>
                  </div>
                </div>
              </div>
              <div className="footer-border"></div>
              <p className="copyright">Copyright @2021 Innomize Co.,Ltd. All Rights Reserved</p>
            </div>
          </Fade>
        </div>
      </footer>
    );
  }
}

export default Footer;
