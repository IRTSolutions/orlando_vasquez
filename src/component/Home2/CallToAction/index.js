import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import '../../../../node_modules/react-modal-video/scss/modal-video.scss';
import ModalVideo from 'react-modal-video';
import { InstagramEmbed } from 'react-social-media-embed';

class CallToAction extends Component {
    constructor() {
        super()
        this.state = {
            callbackMessage: '',
            hideform: false,
            name: '',
            phoneNumber: ''
        }

    }

    FormSubmit = (event) => {


        const subject = "New Work Request ";
        const body = this.state.callbackMessage;
        const name = this.state.name;
        const phoneNumber = this.state.phoneNumber
        window.location = `mailto:orvremodeling@gmail.com<?subject=${subject}for ${name}&body=${body} please contact me at ${phoneNumber}`;

        this.setState({
            hideform: true
        });
        event.preventDefault();

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

    setName = (event) => {
        this.setState({
            name: event.target.value
        });

    }

    openModal() {
        this.setState({ isOpen: true })
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
        return (
            <section className="call-to-action-form home_two_contactform section-padding text-white" id="contact">
                <Grid container spacing={3} className="websitePadding">
                    <Grid item md={6} sm={12} className="">
                        <Grid className="call-to-form">
                            <h2>Request Call Back</h2>
                            <form onSubmit={this.FormSubmit}>
                                <Grid container spacing={3} className="call-to-action-container">
                                    <Grid item sm={6} xs={12}>
                                        <input type="text" placeholder="Your name" value={this.state.name} onChange={this.setName} required />
                                        <div className="input-group">
                                        </div>
                                    </Grid>
                                    <Grid item sm={6} xs={12}>
                                        <input type="tel" placeholder="555-555-5555" value={this.state.phoneNumber} onChange={this.setPhone} pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" title="555-555-5555" required />
                                        <div className="input-group">
                                        </div>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <textarea name="callbackmessage" placeholder="How can we help?" value={this.state.callbackMessage} onChange={this.setCallBackMessage} required></textarea>
                                        <div className="input-group">
                                        </div>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <button className="submit_btn theme_btn">Submit Now</button>
                                    </Grid>
                                </Grid>
                            </form>
                        </Grid>
                    </Grid>
                    <Grid item md={1}></Grid>
                    <Grid item md={5} sm={12} align-items="center" className="">
                        {/* <Grid justifyContent="center" className="call-to-video d-flex align-items-center justify-content-center"
                              style={{backgroundImage: `url(${VedioImage})`}}>
                            <ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId='_TI26foIVy0'
                                        onClose={() => this.setState({isOpen: false})}/>
                            <a onClick={this.openModal} href="#" className="play_video_btn popup-video">
                                <i className="fal fa-play"></i>
                            </a>
                        </Grid> */}

                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <InstagramEmbed url="https://www.instagram.com/p/Ct9b3s1r05g/" width={328} />
                        </div>
                    </Grid>
                </Grid>
            </section>
        )
    }
}

export default CallToAction;