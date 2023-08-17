import React, {Component} from "react";
import Grid from "@material-ui/core/Grid";


class ContactInfo extends Component {
    render() {
        return (
            <section className="contact-page-wrap section-padding">
                <Grid container spacing={3} className="contact-deatils websitePadding">
                    <Grid item lg={3} sm={6} className="">
                        <Grid className="single-contact-details">
                            <h3>Call Us</h3>
                            <p>+1 999 999 999</p>
                            <p>+1 999 999 999</p>
                        </Grid>
                    </Grid>
                    <Grid item lg={3} sm={6} className="">
                        <Grid className="single-contact-details">
                            <h3>Address</h3>
                            <p>1234 Cool Street <br/>dallas texas</p>
                        </Grid>
                    </Grid>
                    <Grid item lg={3} sm={6} className="">
                        <Grid className="single-contact-details">
                            <h3>Skype id</h3>
                            <p>@userthemes</p>
                            <p>@monidatheme</p>
                        </Grid>
                    </Grid>
                    <Grid item lg={3} sm={6} className="">
                        <Grid className="single-contact-details">
                            <h3>Email</h3>
                            <p>CHANGEME@CHANGEME.com</p>
                            <p>CHANGEME@CHANGEME.com</p>
                        </Grid>
                    </Grid>
                </Grid>
            </section>
        )
    }
}

export default ContactInfo