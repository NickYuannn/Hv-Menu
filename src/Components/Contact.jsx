import React from "react";
import "./Contact.css";
import { CiLocationOn } from "react-icons/ci";
import { CiClock2 } from "react-icons/ci";
import { MdOutlineEmail } from "react-icons/md";
import { LuSmartphone } from "react-icons/lu";
function Contact() {
  return (
    <div className="contact-container">
      <div className="info-container">
        <div className="info">
          <div className="address">
            <CiLocationOn />
            <section>
              <h2>Location:</h2>
              <p className="detail">2200 Veirs Mill Rd</p>
              <p className="detail">Rockville, MD 20851</p>
            </section>
          </div>
          <div className="hours">
            <CiClock2 />
            <section>
              <h2>Hours:</h2>
              <p className="detail">Mon: Closed</p>
              <p className="detail">Tue: 11AM-9:00PM</p>
              <p className="detail">Wed: 11AM-9:00PM</p>
              <p className="detail">Thu: 11AM-9:00PM</p>
              <p className="detail">Fri: 11AM-9:30PM</p>
              <p className="detail">Sat: 11AM-9:30PM</p>
              <p className="detail">Sun: 11AM-9:00PM</p>
            </section>
          </div>
          <div className="email">
            <MdOutlineEmail />
            <section>
              <h2>Email:</h2>
              <p className="detail"> hellovietnamfood@gmail.com</p>
            </section>
          </div>
          <div className="phone">
            <LuSmartphone />
            <section>
              <h2>Phone</h2>
              <p className="detail">301-838-0388</p>
            </section>
          </div>
        </div>
        <div className="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3097.3580468285872!2d-77.11766052351756!3d39.07554143617228!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7cdfd46080219%3A0xb4889bda76c608ae!2sHello%20Vietnam*21%20Restaurant!5e0!3m2!1sen!2sus!4v1722058149789!5m2!1sen!2sus"
            width="800"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      <div className="hire">
        <p className="hire-text">
          Hello Vietnam! Restaurant is hiring staff for our Front of the House.
          Main responsibilities include welcoming guests, managing seats, taking
          orders & payments, bringing food & drinks to tables (with help from
          kitchen staff) and making some simple drinks. We are proud to be a new
          restaurant with decent foot traffic, so you will not get bored working
          here. Benefits include free meals during shifts, family-friendly
          working environment, wonderful team mates, good opportunities to grow,
          good income. Speaking both Vietnamese and English, living in the area,
          having reliable means of transportation are advantages. Please call or
          leave a text message to my phone number 202 344 0760. Thank you for
          helping us spread the words. We look forward to growing our team
          stronger to bring more values to our customers.
        </p>
      </div>
    </div>
  );
}

export default Contact;
