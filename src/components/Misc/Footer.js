import React from "react";
import { Link } from "react-router-dom";
import Newsletter from "./Newsletter";
import { Container } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faTiktok } from '@fortawesome/free-brands-svg-icons';
import esewa from '../../images/esewa.svg';
import fonepay from '../../images/fonepay.svg';
import khalti from '../../images/khalti.svg';

export default class Footer extends React.Component {
  render() {
    return (
      <footer>
        <div className="bg-light text-dark py-5">
          <Container className="py-3">
            <div className="d-flex flex-column flex-md-row flex-wrap">
              <div className="mr-5">
                <h5 className="font-weight-bold">Customer Service</h5>
                <ul className="list-unstyled">
                  <li>
                    <Link to="/order_tracking">Order Tracking</Link>
                  </li>
                  <li>
                    <Link to="/returns_and_exchanges">
                      Returns and Exchanges
                    </Link>
                  </li>
                  <li>
                    <Link to="/refunds">Refunds</Link>
                  </li>
                  <li>
                    <Link to="/delivery_and_collections">
                      Delivery & Collections
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="mr-5">
                <h5 className="font-weight-bold">Information</h5>
                <ul className="list-unstyled">
                  <li>
                    <Link to="/about">About Us</Link>
                  </li>
                  <li>
                    <Link to="/terms">Terms of Use</Link>
                  </li>
                  <li>
                    <Link to="/careers">Careers</Link>
                  </li>
                </ul>
              </div>
              <div >
                <h5 className="font-weight-bold">Store Information</h5>
                <ul className="list-unstyled">
                  <li>
                    <Link to="/">
                    <FontAwesomeIcon icon={faMapMarkerAlt} size="1x" className="pr-2"/>
                    {/* <FontAwesomeIcon
                        icon="location-dot"
                        size="2x"
                        className="pr-2"
                      /> */}
                    Baneshwor, Kathmandu</Link>
                  </li>
                  <li>
                    <Link to="/">
                    <FontAwesomeIcon icon={faEnvelope} size="1x" className="pr-2"/>
                      ecommerce@gmail.com
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                    <FontAwesomeIcon icon={faPhone} size="1x" className="pr-2"/>+977-9840000000</Link>
                  </li>
                  
                </ul>
              </div>

              <div className="ml-auto">
                <Newsletter />
                
                <ul className="list-inline mt-4">
                <li className="list-inline-item">
                    <Link to="/">
                      <FontAwesomeIcon
                        icon={["fab", "facebook-f"]}
                        size="2x"
                        className="pr-2"
                      />
                    </Link>
                  </li>
                  <li className="list-inline-item">
                    <Link to="/">
                      <FontAwesomeIcon
                        icon={faInstagram}
                        size="2x"
                        className="pr-2"
                      />
                    </Link>
                  </li>
                  
                  <li className="list-inline-item">
                    <Link to="/">
                      <FontAwesomeIcon
                        icon={faTiktok}
                        size="2x"
                        className="pr-2"
                      />
                    </Link>
                  </li>
                  {/* <li className="list-inline-item">
                    <Link to="/">
                      <FontAwesomeIcon
                        icon={["fab", "pinterest"]}
                        size="2x"
                        className="pr-2"
                      />
                    </Link>
                  </li> */}
                </ul>
              </div>
              
            </div>
          </Container>
        </div>

        <div className="bg-dark text-light">
          <Container className="py-4">
            <div className="d-flex align-items-center">
              <span>
                &copy; 2023 by E-Commerce. All rights reserved.{" "}
                <Link to="#">Back to top</Link>
              </span>
              <div className="ml-auto">
                <span className="mr-2">
                <div>
        <img src={esewa} alt="eSewa" width="80" height="30" />
        <img src={fonepay} alt="Fonepay" width="100" height="30" />
        <img src={khalti} alt="Khalti" width="80" height="30" />
      </div>
                </span>
              </div>
            </div>
          </Container>
        </div>
      </footer>
    );
  }
}
