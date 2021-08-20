import React, { Component } from "react";

class Comment extends Component {
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
        <section id="Comment">
          {/* <Fade duration={1000}> */}
            <div className="container">
              <div className="Comment-title">
                <h2>TESTIMONIALS</h2>
                <h1>What Our Clients are Saying?</h1>    
              </div>
              <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <div className="container ontainer-ceo">
                            <div className="row">
                                <div className="col-md-2">
                                    <img src="comment.png" width="180" height="60" alt=""/>
                                </div>
                                <div className="col-md-8">
                                    <div>
                                        <p className="ontainer-ceo-title1">Ray Antonino</p>
                                        <p className="ontainer-ceo-title2">CEO at Permits.com</p>
                                        <p className="ontainer-ceo-comtent">Our experence partnering with Innomize has been great. The team does an excellent job of aligning expectations and they are atten to our outreach throughout the build. What stands out for me most is a time that we needed significant changes made (our fault) within two days of demoing a Fortune 40. The team at Innomize jumped on calls at hours of the night (their time) and worked tirelessly to get us ready. They get what it means to be partners in success and we grateful to have theme as an extension of team.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <div className="container ontainer-ceo">
                            <div className="row">
                                <div className="col-md-2">
                                    <img src="comment.png" width="180" height="60" alt=""/>
                                </div>
                                <div className="col-md-8">
                                    <div>
                                        <p className="ontainer-ceo-title1">Ray Antonino</p>
                                        <p className="ontainer-ceo-title2">CEO at Permits.com</p>
                                        <p className="ontainer-ceo-comtent">Our experence partnering with Innomize has been great. The team does an excellent job of aligning expectations and they are atten to our outreach throughout the build. What stands out for me most is a time that we needed significant changes made (our fault) within two days of demoing a Fortune 40. The team at Innomize jumped on calls at hours of the night (their time) and worked tirelessly to get us ready. They get what it means to be partners in success and we grateful to have theme as an extension of team.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <div className="container ontainer-ceo">
                            <div className="row">
                                <div className="col-md-2">
                                    <img src="comment.png" width="180" height="60" alt=""/>
                                </div>
                                <div className="col-md-8">
                                    <div>
                                        <p className="ontainer-ceo-title1">Ray Antonino ok</p>
                                        <p className="ontainer-ceo-title2">CEO at Permits.com</p>
                                        <p className="ontainer-ceo-comtent">Our experence partnering with Innomize has been great. The team does an excellent job of aligning expectations and they are atten to our outreach throughout the build. What stands out for me most is a time that we needed significant changes made (our fault) within two days of demoing a Fortune 40. The team at Innomize jumped on calls at hours of the night (their time) and worked tirelessly to get us ready. They get what it means to be partners in success and we grateful to have theme as an extension of team.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
                </div>
            </div>
          {/* </Fade> */}
        </section>
      );
    }
  }
  
  export default Comment;


