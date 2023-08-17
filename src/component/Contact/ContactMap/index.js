import React, {Component} from "react";
import Grid from "@material-ui/core/Grid";

class ContactMap extends Component {
    render() {
        return (
            <section class="google-map-wrap">
                <Grid container spacing={3} class="websitePadding">
                    <Grid item lg={12} class="">
                        <Grid class="gmap">
                            <iframe
                                src="https://www.google.com/maps/embed/v1/place?key=AIzaSyDsT_yUFB7OSmsHUJnXIHruQ67Dl-ZCPcc&q=dallas+texas"
                                allowfullscreen></iframe>
                        </Grid>
                    </Grid>
                </Grid>
            </section>
        )
    }
}

export default ContactMap;