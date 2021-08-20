import React, { Component } from "react";
import Fade from "react-reveal";

class About extends Component {
  render() {
    if (!this.props.data) return null;

    const name = this.props.data.name;
    const profilepic = "images/" + this.props.data.image;
    const bio = this.props.data.bio;
    const street = this.props.data.address.street;
    const city = this.props.data.address.city;
    const state = this.props.data.address.state;
    const zip = this.props.data.address.zip;
    const phone = this.props.data.phone;
    const email = this.props.data.email;
    const resumeDownload = this.props.data.resumedownload;

    return (
      <section id="about">
        {/* <Fade duration={1000}> */}
          <div className="container">
            <div className="nine columns main-col">
              <h2>OUR CORE VALUES</h2>
              <p>Founded in 2018, our mission is to create awesome products that will make your everyday life easier. Our experienced engineering and development team are committed, pasionate, pasionate, and continually challenge them selves on the advancements and changes of the technologies we utilize the most up-to-date and innovative solutions.</p>
              <div class="f-grid">
                <div class="f-grid-col col-xs-12 ">
                  <i class="fas fa-rocket"></i>
                  <a className="contentlink" href="#">
                      <p className="f-grid-title">Committed</p>
                  </a>
                  <p className="f-grid-content">Our team puts in the extra hours to deliver their work efficiently, wasting no time, exceeding expectations; going above and beyond and showing initiative to deliver quality solutions</p>
                </div>
                <div class="f-grid-col col-xs-12">
                <i class="fas fa-coins"></i>
                <a className="contentlink" href="#">
                  <p className="f-grid-title">Team Focused</p> 
                </a>   
                  <p className="f-grid-content">Our team puts in the extra hours to deliver their work efficiently, wasting no time, exceeding expectations; going above and beyond and showing initiative to deliver quality solutions</p>
                </div>
                <div class="f-grid-col col-xs-12">
                  <i class="fas fa-users"></i>
                  <a className="contentlink" href="#">
                    <p className="f-grid-title">Responsible</p>
                  </a> 
                  <p className="f-grid-content">Our team puts in the extra hours to deliver their work efficiently, wasting no time, exceeding expectations; going above and beyond and showing initiative to deliver quality solutions</p>
                </div>
            </div>      
            </div>
          </div>
        {/* </Fade> */}
      </section>
    );
  }
}

export default About;
