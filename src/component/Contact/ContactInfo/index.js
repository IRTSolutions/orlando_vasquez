import React, {Component} from "react";
import Grid from "@material-ui/core/Grid";


class ContactInfo extends Component {
    render() {
        return (
            <section className="contact-page-wrap section-padding">
                <Grid container spacing={2} className="contact-deatils websitePadding">
                    <Grid item lg={4} sm={6} className="">
                        <Grid className="single-contact-details">
                            <h3>Call or Text</h3>
                            <p><a href="tel:214-994-7628">214-994-7628</a></p>
                        </Grid>
                    </Grid>
                    
                    <Grid item lg={4} sm={6} className="">
                        <Grid className="single-contact-details">
                            <h3>Service Area</h3>
                            <p>We serve the entire Dallas-Fortworth metroplex <br/></p>
                        </Grid>
                    </Grid>
                    {/* <Grid item lg={3} sm={6} className="">
                        <Grid className="single-contact-details">
                            <h3>Skype id</h3>
                            <p>@userthemes</p>
                            <p>@monidatheme</p>
                        </Grid>
                    </Grid> */}
                    <Grid item lg={4} sm={6} className="">
                        <Grid className="single-contact-details">
                            <h3>Email</h3>
                            <p><a href="mailto:orvremodeling@gmail.com?subject=New Quote">orvremodeling@gmail.com</a></p>
                           
                        </Grid>
                    </Grid>
                </Grid>
            </section>
        )
    }
}

export default ContactInfo