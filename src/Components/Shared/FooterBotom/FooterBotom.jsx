import React from "react"
import './Footerbotom.css'

const FooterBottom = () => 

        <footer className="container font-small blue ">
            <div className="page-footer text-center text-md-left pt-4">
                <div className="row">
                    <div className="col-md-4 mt-md-0 mt-3">
                        <h5 className="text-uppercase">Footer Content</h5>
                        <p>Here you can use rows and columns to organize your footer content.</p>
                    </div>

                    <hr className="clearfix w-100 d-md-none pb-0"/>

                    <div className="col-md-4 mb-md-0 mb-3">
                        <h5 className="text-uppercase">Links</h5>
                        <ul className="list-unstyled">
                            <li><a href="#!">Link 1</a></li>
                            <li><a href="#!">Link 2</a></li>
                            <li><a href="#!">Link 3</a></li>
                            <li><a href="#!">Link 4</a></li>
                        </ul>
                    </div>

                    <div className="col-md-4 mb-md-0 mb-3">
                        <h5 className="text-uppercase">Links</h5>
                        <ul className="list-unstyled">
                            <li><a href="#!">Link 1</a></li>
                            <li><a href="#!">Link 2</a></li>
                            <li><a href="#!">Link 3</a></li>
                            <li><a href="#!">Link 4</a></li>
                        </ul>
                    </div>
                </div>
                <div className="footer-copyright text-center mb-auto py-3">© {(new Date()).getFullYear()} Copyright:
                    <a href="/"> Shariful Islam</a>
                </div>
            </div>

           

        </footer>

export default FooterBottom;