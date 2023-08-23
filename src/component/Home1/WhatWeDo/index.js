import React, {Component} from "react";
import Grid from '@material-ui/core/Grid';
import Wedo1 from '../../../images/wedo/bathroom.jpg';
import Wedo2 from '../../../images/wedo/w2.png';
import Wedo3 from '../../../images/wedo/drain_plumbing.jpg';
import Wedo4 from '../../../images/wedo/w4.png';
import {Link} from "react-router-dom";
import OurServicePage from "../../OurService/OurServicePage";
import ContactPage from "../../Contact/ContactPage";


class WhatWeDo extends Component {
    render() {
        return (
            <section className="what-we-do section-padding websitePadding" id="whatwedo">
                <Grid container spacing={3}>
                    <Grid item lg={1} xs={12}></Grid>
                    <Grid item lg={10} xs={12} className="offset-lg-1 col-12 text-center">
                        <Grid className="what-we-do-title">
                            <span>what we do</span>
                            <h2>From kitchens and bathrooms, to plumbing and tile, or electrical and paint <span>We do it all!</span>
                            </h2>
                        </Grid>
                    </Grid>
                    <Grid item md={3} sm={6} xs={12} className="text-center">
                        <Grid className="single-we-do">
                            <img src={Wedo1} alt=""/>
                            <h3>Bathroom</h3>
                            <p>Lorem ipsum dolor sit amet, conse ctetur adipisicing elit, sed do eiusmod tempor
                                incidid</p>
                        </Grid>
                    </Grid>
                    <Grid item md={3} sm={6} xs={12} className="text-center">
                        <Grid className="single-we-do">
                            <img src={Wedo2} alt=""/>
                            <h3>Kitchen</h3>
                            <p>Lorem ipsum dolor sit amet, conse ctetur adipisicing elit, sed do eiusmod tempor
                                incidid</p>
                        </Grid>
                    </Grid>
                    <Grid item md={3} sm={6} xs={12} className="text-center">
                        <Grid className="single-we-do">
                            <img src={Wedo3} alt=""/>
                            <h3>Plumbing</h3>
                            <p>Lorem ipsum dolor sit amet, conse ctetur adipisicing elit, sed do eiusmod tempor
                                incidid</p>
                        </Grid>
                    </Grid>
                    <Grid item md={3} sm={6} xs={12} className="text-center">
                        <Grid className="single-we-do">
                            <img src={Wedo4} alt=""/>
                            <h3>Electrical</h3>
                            <p>Lorem ipsum dolor sit amet, conse ctetur adipisicing elit, sed do eiusmod tempor
                                incidid</p>
                        </Grid>
                    </Grid>

                    <Grid item lg={12} className="what-we-do-button text-center">
                        <Link to="/services" className="theme_btn">All Services</Link>
                        <Link to="/contact" className="theme_btn btn_tb">Contact us now</Link>
                    </Grid>
                </Grid>
            </section>

        )
    }
}

export default WhatWeDo;