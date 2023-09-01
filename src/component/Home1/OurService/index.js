import React, {Component} from "react";
import Grid from '@material-ui/core/Grid';
import IconBuilding from '../../../images/icons/building.png';
import IconCap from '../../../images/icons/cap.png';
import IconCarry from '../../../images/icons/carry.png';
import IconMotro from '../../../images/icons/motor.png';
import IconWheel from '../../../images/icons/wheel.png';
import IconDil from '../../../images/icons/dil.png';

class OurService extends Component {
    render() {
        return (
            <section className="our-services pt-120 pb-80" id="service">
                <Grid container spacing={3} className="websitePadding">
                    <Grid item md={4} sm={6} xs={12} className="">
                        <Grid className="single-service">
                            <Grid className="service-icon">
                                    <span className="svg-gb" dangerouslySetInnerHTML={{
                                        __html: "<svg className=\"icon-shape\"\n" +
                                            "                                         xmlns=\"http://www.w3.org/2000/svg\"\n" +
                                            "                                         xmlns:xlink=\"http://www.w3.org/1999/xlink\"\n" +
                                            "                                         width=\"72px\" height=\"81px\">\n" +
                                            "                                        <path fill-rule=\"evenodd\" fill=\"rgb(242, 243, 245)\"\n" +
                                            "                                              d=\"M0.814,60.751 L0.814,20.254 L36.005,0.005 L71.195,20.254 L71.195,60.751 L36.005,81.000 L0.814,60.751 Z\"/>\n" +
                                            "                                    </svg>"
                                    }}/>

                                <Grid className="service-shape-icon">
                                    <img src={IconBuilding} alt=""/>
                                </Grid>
                            </Grid>
                            <h3>Design build</h3>
                            <p>Discover the seamless journey of design and build with us. Our experts bring your ideas to life, from concept to completion. Together, we transform your vision into a reality, crafting spaces that inspire and amaze.</p>
                        </Grid>
                    </Grid>
                    <Grid item md={4} sm={6} xs={12} className="">
                        <Grid className="single-service">
                            <Grid className="service-icon">
                                    <span dangerouslySetInnerHTML={{
                                        __html: "<svg className=\"icon-shape\"\n" +
                                            "                                         xmlns=\"http://www.w3.org/2000/svg\"\n" +
                                            "                                         xmlns:xlink=\"http://www.w3.org/1999/xlink\"\n" +
                                            "                                         width=\"72px\" height=\"81px\">\n" +
                                            "                                        <path fill-rule=\"evenodd\" fill=\"rgb(242, 243, 245)\"\n" +
                                            "                                              d=\"M0.814,60.751 L0.814,20.254 L36.005,0.005 L71.195,20.254 L71.195,60.751 L36.005,81.000 L0.814,60.751 Z\"/>\n" +
                                            "                                    </svg>"
                                    }}/>

                                <Grid className="service-shape-icon">
                                    <img src={IconCap} alt=""/>
                                </Grid>
                            </Grid>
                            <h3>General Construction</h3>
                            <p>Experience the construction process reimagined. Our skilled team navigates every step, ensuring quality, efficiency, and your complete satisfaction. From demolition to the finishing touches, we make your remodeling dreams a reality.a</p>
                        </Grid>
                    </Grid>
                    <Grid item md={4} sm={6} xs={12} className="">
                        <Grid className="single-service">
                            <Grid className="service-icon">
                                    <span dangerouslySetInnerHTML={{
                                        __html: "<svg className=\"icon-shape\"\n" +
                                            "                                         xmlns=\"http://www.w3.org/2000/svg\"\n" +
                                            "                                         xmlns:xlink=\"http://www.w3.org/1999/xlink\"\n" +
                                            "                                         width=\"72px\" height=\"81px\">\n" +
                                            "                                        <path fill-rule=\"evenodd\" fill=\"rgb(242, 243, 245)\"\n" +
                                            "                                              d=\"M0.814,60.751 L0.814,20.254 L36.005,0.005 L71.195,20.254 L71.195,60.751 L36.005,81.000 L0.814,60.751 Z\"/>\n" +
                                            "                                    </svg>"
                                    }}/>

                                <Grid className="service-shape-icon">
                                    <img src={IconCarry} alt=""/>
                                </Grid>
                            </Grid>
                            <h3>Flooring and Tile</h3>
                            <p>Elevate the aesthetics and functionality of your interiors with our top-tier flooring and tile installation expertise. At ORV Remodeling, we bring your design dreams to life, one tile at a time. Our skilled team of installation professionals is dedicated to delivering flawless craftsmanship that not only enhances the beauty of your space but also stands the test of time.</p>
                        </Grid>
                    </Grid>
                    <Grid item md={4} sm={6} xs={12} className="">
                        <Grid className="single-service">
                            <Grid className="service-icon">
                                    <span className="svg-gb" dangerouslySetInnerHTML={{
                                        __html: "<svg className=\"icon-shape\"\n" +
                                            "                                         xmlns=\"http://www.w3.org/2000/svg\"\n" +
                                            "                                         xmlns:xlink=\"http://www.w3.org/1999/xlink\"\n" +
                                            "                                         width=\"72px\" height=\"81px\">\n" +
                                            "                                        <path fill-rule=\"evenodd\" fill=\"rgb(242, 243, 245)\"\n" +
                                            "                                              d=\"M0.814,60.751 L0.814,20.254 L36.005,0.005 L71.195,20.254 L71.195,60.751 L36.005,81.000 L0.814,60.751 Z\"/>\n" +
                                            "                                    </svg>"
                                    }}/>

                                <Grid className="service-shape-icon">
                                    <img src={IconMotro} alt=""/>
                                </Grid>
                            </Grid>
                            <h3>Kitchens</h3>
                            <p>Experience the heart of your home reimagined. Our kitchen remodels blend style and functionality seamlessly, creating culinary spaces that inspire. From countertops to cabinets, we design and build your dream kitchen</p>
                        </Grid>
                    </Grid>
                    <Grid item md={4} sm={6} xs={12} className="">
                        <Grid className="single-service">
                            <Grid className="service-icon">
                                    <span dangerouslySetInnerHTML={{
                                        __html: "<svg className=\"icon-shape\"\n" +
                                            "                                         xmlns=\"http://www.w3.org/2000/svg\"\n" +
                                            "                                         xmlns:xlink=\"http://www.w3.org/1999/xlink\"\n" +
                                            "                                         width=\"72px\" height=\"81px\">\n" +
                                            "                                        <path fill-rule=\"evenodd\" fill=\"rgb(242, 243, 245)\"\n" +
                                            "                                              d=\"M0.814,60.751 L0.814,20.254 L36.005,0.005 L71.195,20.254 L71.195,60.751 L36.005,81.000 L0.814,60.751 Z\"/>\n" +
                                            "                                    </svg>"
                                    }}/>

                                <Grid className="service-shape-icon">
                                    <img src={IconWheel} alt=""/>
                                </Grid>
                            </Grid>
                            <h3>Rooms & Halls</h3>
                            <p>Transform any room into your ideal space with our remodeling expertise. From concept to creation, we revamp and redefine interiors, making your vision a stunning reality. Your dream room awaits. </p>
                        </Grid>
                    </Grid>
                    <Grid item md={4} sm={6} xs={12} className="">
                        <Grid className="single-service">
                            <Grid className="service-icon">
                                    <span dangerouslySetInnerHTML={{
                                        __html: "<svg className=\"icon-shape\"\n" +
                                            "                                         xmlns=\"http://www.w3.org/2000/svg\"\n" +
                                            "                                         xmlns:xlink=\"http://www.w3.org/1999/xlink\"\n" +
                                            "                                         width=\"72px\" height=\"81px\">\n" +
                                            "                                        <path fill-rule=\"evenodd\" fill=\"rgb(242, 243, 245)\"\n" +
                                            "                                              d=\"M0.814,60.751 L0.814,20.254 L36.005,0.005 L71.195,20.254 L71.195,60.751 L36.005,81.000 L0.814,60.751 Z\"/>\n" +
                                            "                                    </svg>"
                                    }}/>

                                <Grid className="service-shape-icon">
                                    <img src={IconDil} alt=""/>
                                </Grid>
                            </Grid>
                            <h3>Custom Shower and Bath</h3>
                            <p>Step into a world of relaxation and luxury with our shower and bath remodeling process. We meticulously plan, design, and install your dream bathroom features, creating a spa-like retreat in your own home. </p>
                        </Grid>
                    </Grid>
                </Grid>
            </section>
        )
    }
}

export default OurService;