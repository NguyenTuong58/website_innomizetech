import React, { Component } from "react";
import { Fade, Slide } from "react-reveal";

class Contact extends Component {
  render() {
    if (!this.props.data) return null;

    const name = this.props.data.name;
    const street = this.props.data.address.street;
    const city = this.props.data.address.city;
    const state = this.props.data.address.state;
    const zip = this.props.data.address.zip;
    const phone = this.props.data.phone;
    const message = this.props.data.contactmessage;

    return (
      <section id="contact">
        <div className="StartProject">
          <Slide left duration={1000}>
            <p className="StartProject">We Like to Start Your Project With Us</p>
          </Slide>

          <Slide right duration={1000}>
            <button type="button" class="btn btn-danger btn-contact">Contact Us</button>
          </Slide>
        </div>
      </section>
    );
  }
}

export default Contact;
