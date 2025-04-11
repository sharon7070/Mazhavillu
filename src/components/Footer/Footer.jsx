
import React from "react";
import "../../assets/css/Footer.css";
import footerlogo from "../../assets/images/footerlogo.png";
import playstorelogo from "../../assets/images/playstorelogo.png";
import applelogo from "../../assets/images/applelogo.png";
import VISA from "../../assets/images/VISA.png";
import PAYPAL from "../../assets/images/PAYPAL.png";
import MASTERCARD from "../../assets/images/mastercard.png";
import UPI from "../../assets/images/UPI.png";

const Footer = () => {
  return (
    <footer className="footersection">
      <div className="container-fluid">
      <div className="footer-row d-flex justify-content-between flex-wrap">
      <div className="col col-one">
            <img
              className="footerbrandlogo"
              src={footerlogo}
              alt="footerlogo"
            />
            <div className="row d-flex">
              <u className="connectto">CONNECT TO</u>
              <div className="socialmedialogo d-flex  ">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-instagram"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
                  </svg>
                </span>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-facebook"
                    viewBox="0 0 16 16"
                  >
                    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
                  </svg>
                </span>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-twitter-x"
                    viewBox="0 0 16 16"
                  >
                    <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
                  </svg>
                </span>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-globe"
                    viewBox="0 0 16 16"
                  >
                    <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m7.5-6.923c-.67.204-1.335.82-1.887 1.855A8 8 0 0 0 5.145 4H7.5zM4.09 4a9.3 9.3 0 0 1 .64-1.539 7 7 0 0 1 .597-.933A7.03 7.03 0 0 0 2.255 4zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a7 7 0 0 0-.656 2.5zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5zM8.5 5v2.5h2.99a12.5 12.5 0 0 0-.337-2.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5zM5.145 12q.208.58.468 1.068c.552 1.035 1.218 1.65 1.887 1.855V12zm.182 2.472a7 7 0 0 1-.597-.933A9.3 9.3 0 0 1 4.09 12H2.255a7 7 0 0 0 3.072 2.472M3.82 11a13.7 13.7 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5zm6.853 3.472A7 7 0 0 0 13.745 12H11.91a9.3 9.3 0 0 1-.64 1.539 7 7 0 0 1-.597.933M8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855q.26-.487.468-1.068zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.7 13.7 0 0 1-.312 2.5m2.802-3.5a7 7 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7 7 0 0 0-3.072-2.472c.218.284.418.598.597.933M10.855 4a8 8 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4z" />
                  </svg>
                </span>
              </div>
            </div>
          </div>

          <div className="col col-two">
            <u>CUSTOMER CARE</u>
            <div className="footer-links">
              Privacy policy <br />
              Shipping policy <br />
              FAQs
              <br />
              Ordering Tracking <br />
              Vendor Connect
              <br />
              Return/Refund Policy
            </div>
          </div>

          <div className="col col-three">
            <u>COMPANY</u>
            <div className="footer-links">
              Careers at Mazhavillu <br />
              Terms and conditions <br />
              Company policies
            </div>
          </div>

          <div className="col col-four">
            <u>CATEGORIES</u>
            <div className="footer-links">
              Privacy policy <br />
              Shipping policy <br />
              FAQs
              <br />
              Ordering Tracking <br />
              Vendor Connect
              <br />
              Return/Refund Policy
            </div>
          </div>

          <div className="col col-five">
            <u className="shoponthegohead">SHOP ON THE GO</u>
            <br />
            <div className="shoponthego">
              Mazhavillu App is available. Get it now <br />
              <div className="store-buttons">
                <div className="d-flex gap-2">
                  <button className="footerbtn1 btn btn-outline w-60 justify-content-center ">
                    <div className="d-flex ">
                      <img src={playstorelogo} alt="playstorelogo" />
                      <span className="playstore">
                        <p className="getiton text-white ">GET IT ON</p> 
                        <p className="text-white googleplaytext">
                          Google Play
                        </p>
                      </span>
                    </div>
                  </button>

                  <button className="footerbtn2 btn btn-outline w-60 d-flex justify-content-center align-items-center">
                    <img src={applelogo} alt="applestore" />
                  </button>
                </div>
              </div>
            </div>
            <div className="row">
              <u className="weareaccepting">WE ARE ACCEPTING</u>
              <div className="footerpaybtn d-flex justify-content-between gap-3">
                <button className="paybtn">
                  <img src={VISA} alt="visa" />
                </button>
                <button className="paybtn">
                  <img src={PAYPAL} alt="paypal" />
                </button>
                <button className="paybtn">
                  <img src={MASTERCARD} alt="mastercard" />
                </button>
                <button className="paybtn">
                  <img src={UPI} alt="upi" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright d-flex justify-content-center align-items-center text-white text-center">
  <span className="copyrighttext">© Mazhavillu 2025 All rights reserved. Designed by Xeventure</span>
</div>

    </footer>
  );
};

export default Footer;
