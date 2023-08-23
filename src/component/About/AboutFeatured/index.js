import React, {Component} from "react";
import VideoImage from '../../../images/video_img.jpg';
import Grid from "@material-ui/core/Grid";

class AboutFeatured extends Component {
    render() {
        return (
            <section className="featured-about-wrap sada-bg section-padding">
                <Grid container spacing={3} className="websitePadding">
                    <Grid item md={6} sm={12} xs={12} className="col-lg-6 col-md-12">
                        <Grid className="video-section-content video-section-content-1">
                            <h2>Why Choose Us</h2>
                            <ul>
                                <li>
                                    <h3>Quality</h3>
                                    <p>We are commited to delivering the highest quality work
                                        our craftsmanship is unmatched.</p>
                                </li>
                                <li>
                                    <h3>Dependable and honest</h3>
                                    <p>We are family owned and proud of our work and you will be too.</p>
                                </li>
                                <li>
                                    <h3>Reliablity</h3>
                                    <p>Always on time and reliable.</p>
                                </li>
                            </ul>
                            <a href="javascript:" className="theme_btn">LEARN MORE</a>
                        </Grid>
                    </Grid>
                    <Grid item md={1}></Grid>
                    <Grid item md={5} sm={12} xs={12} className="col-lg-5 offset-lg-1 col-md-12">
                        <Grid className="video-section-img">
                            <img src={VideoImage} alt=""/>
                        </Grid>
                    </Grid>
                </Grid>
            </section>
        )
    }
}

export default AboutFeatured;