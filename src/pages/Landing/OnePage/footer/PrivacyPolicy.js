import React from "react";
import "./PrivacyPolicy.scss";
import Footer from "../footer";
import Navbar from "../NavbarPage";

const PrivacyPolicy = () => {
  return (
    <div>
      <Navbar />
      <br />
      <br />
      <br />
      <div className="simple-privacy-policy">
        <header>
          <h1>Privacy Policy</h1>
          <p>Last Updated: November 2024</p>
        </header>

        <section>
          <h2>Information Collection and Use</h2>
          <p>
            We collect personal information such as name, phone number, email
            address, and postal address to contact and identify you. When you
            register, we require user credentials and may use your contact
            information to send communications like OTP, order confirmations,
            and subscription updates.
          </p>
        </section>

        <section>
          <h2>Customer Data</h2>
          <p>
            Data files or databases created during software usage are stored at
            the customer's chosen location. CODEPLAYERS does not transmit this
            data to external servers, and support personnel cannot access
            customer data without explicit sharing.
          </p>
        </section>

        <section>
          <h2>Security</h2>
          <p>
            We take precautions to protect your personal information from being
            lost, misused, or inappropriately accessed. However, no internet
            transmission method is 100% secure.
          </p>
        </section>

        <section>
          <h2>Payments</h2>
          <p>
            We use Razorpay for payment processing. Card data is not stored on
            servers and is encrypted through PCI-DSS standards. Transaction data
            is only used to complete your purchase.
          </p>
        </section>

        <section>
          <h2>Consent</h2>
          <p>
            By using our services, you consent to our information collection and
            use policies. We may send updates to your mobile and email, even if
            registered under Do Not Disturb.
          </p>
        </section>

        <footer>
          <h3>Contact Us</h3>
          <p>
            Questions? Email us at{" "}
            <a href="mailto:admin@codeplayers.in">admin@codeplayers.in</a>
          </p>
        </footer>
      </div>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
