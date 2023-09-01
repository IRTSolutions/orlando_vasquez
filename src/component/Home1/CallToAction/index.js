import React, {Component} from "react";
import Grid from '@material-ui/core/Grid';
import CallToActionBg from '../../../images/call_action_bg.jpg';
import SliderImage1 from "../../../images/slide/s1.jpg";
import {Link} from "react-router-dom";

class CallToAction extends Component{
    render() {
        return(
            <section className="call-to-action-wrap section-padding text-white bg-cover bg-bottom"
                     style={{ backgroundImage: `url(${SliderImage1})` }}>
                <Grid container spacing={3} className="websitePadding">
                    <Grid item lg={2}></Grid>
                    <Grid item md={12} lg={8} className="col-md-12 col-lg-8 offset-lg-2 text-center">
                        <Grid className="call-to-action">
                            <h2>Personalized Approach.</h2>
                            <p>Your space is a reflection of your identity, and we treat it as such. Our remodeling plans are tailor-made to suit your lifestyle and needs, transforming your vision into a functional masterpiece that resonates with your essence.</p>
                            <Link to="/contact" className="theme_btn call-action-btn">Start your project</Link>
                        </Grid>
                    </Grid>
                </Grid>
            </section>
        )
    }
}
export default CallToAction;