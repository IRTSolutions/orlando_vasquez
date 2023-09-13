import React, {Component} from "react";
import Grid from '@material-ui/core/Grid';
// import AboutBanner from '../../../images/page_banner_bg.png';


class HeroArea extends Component {
    render() {
        return (
            <section className="page-banner-wrap bg-cover bg-bottom d-flex align-items-center" 
                    //  style={{backgroundImage: `url(${ServicesHero})`}}>
                    style={{backgroundImage: `url(${this.props.imageurl})`}}>
                <Grid container spacing={3} className="websitePadding">
                    <Grid item md={12} xs={12} className="text-center">
                        <Grid className="page-banner">
                            <span>{this.props.slug}</span>
                            <h2>{this.props.title}</h2>
                            <a href="tel:214-994-7628" className="theme_btn get_start">Call us today! 214-994-7628</a>
                        </Grid>
                    </Grid>
                </Grid>
            </section>
        );
    }
}

export default HeroArea;