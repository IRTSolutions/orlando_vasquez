import React, {Component} from "react";
import Grid from "@material-ui/core/Grid";

class ContactForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            callbackMessage: '',
            hideform: false,
            name: '',
            phoneNumber: '',
            emailAddress:''
        }        
    }

    FormSubmit = (event) => {


        const subject = "New Work Request ";
        const body = this.state.callbackMessage;
        const name = this.state.name;
        const phoneNumber = this.state.phoneNumber
        window.location = `mailto:orvremodeling@gmail.com<?subject=${subject}for ${name}  please contact me at ${phoneNumber} &body=${body}`;

        this.setState({
            hideform: true
        });
        event.preventDefault();

        event.preventDefault();
    }
    FormChange = (event) => {
        event.preventDefault();
        console.log(event);
        console.log(event.target.name);
        console.log(event.target.value);
        this.setState({
            [event.target.name]: event.target.value
        })

    }

    
    setCallBackMessage = (event) => {
        this.setState({
            callbackMessage: event.target.value
        });

    }

    setPhone = (event) => {
        this.setState({
            phoneNumber: this.getFormattedPhoneNum(event.target.value)
        });

    }

    setEmail = (event) => {
        this.setState({
            emailAddress: event.target.value
        });

    }

    setName = (event) => {
        this.setState({
            name: event.target.value
        });

    }

    setSubject = (event) => {
        this.setState({
            name: event.target.value
        });

    }
    getFormattedPhoneNum = ( phoneNumberString ) => {
        var cleaned = ('' + phoneNumberString).replace(/\D/g, '');
        var match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
        if (match) {
          return `${match[1]}-${match[2]}-${match[3]}`;
        }
        return null;
       } 
    render() {
        const {name} = this.state
        return (
            < section className = "contact-form-section section-padding websitePadding" >
                <Grid container spacing={3} className="">
                    <Grid item xl={12} md={12} xs={12} className="">
                        <Grid className="contact-form-main wow animated fadeInUp" data-wow-duration="2s">
                            <form onSubmit={this.FormSubmit} method="POST" >
                                <Grid container spacing={3} className="">
                                    <Grid item lg={4} xs={12} md={4} className="form-group">
                                        <input type="text" className="form-control" name="name" id="name"
                                               placeholder="Enter Your Name"  value={this.state.name} onChange={this.setName} required />
                                    </Grid>
                                    <Grid item lg={4} xs={12} md={4} className="form-group">
                                        <input type="email" className="form-control" name="email" id="email"
                                               placeholder="Email" value={this.state.emailAddress} onChange={this.setEmail} required/>
                                    </Grid>
                                    <Grid item lg={4} xs={12} md={4} className="form-group">
                                        <input type="tel" className="form-control" name="phone" id="phone"
                                                placeholder="555-555-5555" value={this.state.phoneNumber} onChange={this.setPhone} pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" title="555-555-5555" required  />
                                    </Grid>
                                </Grid>
                                <Grid className="row">
                                    <Grid className="form-group col-12 col-md-12 col-sm-12 col-xl-12 message-box">
                                        <textarea name="message" id="message"
                                                   placeholder="How can we help?" value={this.state.callbackMessage} onChange={this.setCallBackMessage} required></textarea>
                                    </Grid>
                                </Grid>
                                <Grid className="send-message mt-35 text-center">
                                    <button type="submit" className="btn-send">send</button>
                                </Grid>
                                <span className="form-message"></span>
                            </form>
                        </Grid>
                    </Grid>
                </Grid>
            </section>
        )
    }
}

export default ContactForm;