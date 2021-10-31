import React from 'react';

const Footer = () => {
    return (
        <div className="main-footer bg-dark text-light mt-5">
           <div className="container">
               <div className="row">
                   {/* colomn 1 */}
                   <div className="col-md-3 col-sm-6">
                       <h4>Tour-Plan</h4>
                        <ul>
                            <li>phone: 097655523472</li>
                            <li>email: tourPlan@gmail.com</li>
                            <li>facebook: tour-plan.facebook.page</li>
                        </ul>
                   </div>
                   {/* colomn 2 */}
                   <div className="col-md-3 col-sm-6">
                       <h4>Tour-Plan</h4>
                        <ul>
                            <li>Ouy Paid naumber</li>
                            <li>01733333333333</li>
                            <li>01744444444444</li>
                            <li>01855555555555</li>
                        </ul>
                   </div>
                   {/* colomn 3 */}
                   <div className="col-md-3 col-sm-6">
                       <h4>Tour-Plan</h4>
                        <ul>
                            <li>Lorem ipsum</li>
                            <li>Lorem ipsum</li>
                            <li>Lorem ipsum</li>
                            <li>Lorem ipsum</li>
                        </ul>
                   </div>
                   {/* colomn 4 */}
                   <div className="col-md-3 col-sm-6">
                       <h4>Tour-Plan</h4>
                        <ul>
                            <li>Lorem ipsum</li>
                            <li>Lorem ipsum</li>
                            <li>Lorem ipsum</li>
                            <li>Lorem ipsum</li>
                        </ul>
                   </div>
               </div>
               {/* footer bottom */}
               <div className="footer-bottom">
                   <p className="text-xs-center">
                       &copy;{new Date().getFullYear()} City Guide App - All Rights Reserved
                   </p>
               </div>
            </div> 
        </div>
    );
};

export default Footer;