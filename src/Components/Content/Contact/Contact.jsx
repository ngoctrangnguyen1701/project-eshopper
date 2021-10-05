import { Link } from 'react-router-dom';

function Contact(props) {
    return (
        <div id="contact-page" className="container">
            <div className="bg">
                <div className="row">    		
                    <div className="col-sm-12">    			   			
                        <h2 className="title text-center">Contact <strong>Us</strong></h2>    			    				    				
                        <div id="gmap" className="contact-map">
                        {<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31354.267710966997!2d106.63554353955081!3d10.789588000000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f965c6a12a9%3A0x751c17ef4e1fe0c!2zQsO6biDEkeG6rXUgU8OgaSBHw7JuIC0gTGF1Z2FTYWlnb24uY29t!5e0!3m2!1svi!2s!4v1633332965742!5m2!1svi!2s"
                            style={{width: "100%", height: "400px", border: "none"}} title="address"></iframe>}
                        </div>
                    </div>			 		
                </div>    	
                <div className="row">  	
                    <div className="col-sm-8">
                        <div className="contact-form">
                            <h2 className="title text-center">Get In Touch</h2>
                            <div className="status alert alert-success" style={{display: "none"}}></div>
                            <form id="main-contact-form" className="contact-form row" name="contact-form" method="post">
                                <div className="form-group col-md-6">
                                    <input type="text" name="name" className="form-control" required="required" placeholder="Name"/>
                                </div>
                                <div className="form-group col-md-6">
                                    <input type="email" name="email" className="form-control" required="required" placeholder="Email"/>
                                </div>
                                <div className="form-group col-md-12">
                                    <input type="text" name="subject" className="form-control" required="required" placeholder="Subject"/>
                                </div>
                                <div className="form-group col-md-12">
                                    <textarea name="message" id="message" required="required" className="form-control" rows="8" placeholder="Your Message Here"></textarea>
                                </div>                        
                                <div className="form-group col-md-12">
                                    <input type="submit" name="submit" className="btn btn-primary pull-right" value="Submit"/>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="contact-info">
                            <h2 className="title text-center">Contact Info</h2>
                            <address>
                                <p>E-Shopper Inc.</p>
                                <p>935 W. Webster Ave New Streets Chicago, IL 60614, NY</p>
                                <p>Newyork USA</p>
                                <p>Mobile: +2346 17 38 93</p>
                                <p>Fax: 1-714-252-0026</p>
                                <p>Email: info@e-shopper.com</p>
                            </address>
                            <div className="social-networks">
                                <h2 className="title text-center">Social Networking</h2>
                                <ul>
                                    <li>
                                        <Link to="/page404"><i className="fa fa-facebook"></i></Link>
                                    </li>
                                    <li>
                                        <Link to="/page404"><i className="fa fa-twitter"></i></Link>
                                    </li>
                                    <li>
                                        <Link to="/page404"><i className="fa fa-google-plus"></i></Link>
                                    </li>
                                    <li>
                                        <Link to="/page404"><i className="fa fa-youtube"></i></Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>    			
                </div>  
            </div>	
        </div>
    );
}

export default Contact;