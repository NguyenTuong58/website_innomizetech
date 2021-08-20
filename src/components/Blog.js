import React, { Component } from "react";

class Blog extends Component {
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
      <section id="blog">
            <div className="container ct-blog">
                <div className="blog-title">
                    <h2>OUR BLOG</h2>
                    <h1>Latest Valuable Insights</h1>    
                </div>
                <div className="container blog">
            <div className="row">
              <div className="col-md-12">
                <div class="f-blog">
                  <div class="f-blog-col col-xs-12 ">
                    <a href="#"><img src="blog.png" width="296" height="300" alt=""/></a>
                    <p className="f-blog-content">Platform Project</p>
                  </div>
                  <div class="f-blog-col col-xs-12">
                    <a href="#"><img src="blog1.png" width="296" height="300" alt=""/></a>
                    <p className="f-blog-content">Web Project</p>
                  </div>
                  <div class="f-blog-col col-xs-12">
                    <a href="#"><img src="blog2.png" width="296" height="300" alt=""/></a>
                    <p className="f-blog-content">ERP Project</p>
                  </div>
              </div>      
              </div>
            </div>
          </div>
            </div>
      </section>
    );
  }
}

export default Blog;
