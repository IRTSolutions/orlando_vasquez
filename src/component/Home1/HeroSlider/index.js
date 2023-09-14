import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SliderImage1 from '../../../images/slide/mainHero.jpg';
import BeautifulKitchenHero from '../../../images/slide/HomeBuilding_Hero.jpg';
import SliderManImage1 from '../../../images/man.png';
import CustomBathroomsHero from '../../../images/slide/myBath_hero.jpg';
import { Height } from '@material-ui/icons';

class HeroSlider extends Component {
    render() {
        var settings = {
            dots: false,
            autoplay: false,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
        };
        return (
            <Slider {...settings}>
                <section className="hero-slider-area ">
                    <Grid className="hero-slides owl-carousel">
                        <Grid className="single-hero-slide gray-overlay bg-cover bg-top d-flex align-items-center"
                            style={{ backgroundImage: `url(${SliderImage1})` }}>
                            <Grid container spacing={3} className="sLider-grid-item customGridwidth websitePadding">
                                <Grid item lg={12} xs={12} md={12} className="customGridwidth">
                                    {/* <span>sit amet</span> */}
                                    <h1>ORV Remodeling</h1>
                                    {/* <p>Discover the ORV Remodeling difference <br/>where remodeling goes beyond construction and becomes an art of transformation.<br/> Let's redefine your space together.</p> */}
                                    <p><span>Where dreams meet design, and luxury finds its home. We are the premier high-end <br /> remodeling company, dedicated to creating opulent, personalized spaces that redefine elegance and comfort. Your vision, our expertise – an extraordinary partnership</span></p>
                                    {/* <span>Call us today!<a href="tel:214-994-7628">214-994-7628</a></span> */}
                                    <a href="tel:214-994-7628" className="theme_btn get_start">Call us today! 214-994-7628</a>
                                </Grid>
                            </Grid>
                            {/* <Grid className="slide-img d-none d-lg-block">
                                <img src={SliderManImage1} alt=""/>
                            </Grid> */}
                        </Grid>
                    </Grid>
                </section>
                <section className="hero-slider-area">
                    <Grid className="hero-slides owl-carousel">
                        <Grid className="single-hero-slide gray-overlay bg-cover bg-top d-flex align-items-center"
                            style={{ backgroundImage: `url(${BeautifulKitchenHero})` }}>
                            <Grid container spacing={3} className="sLider-grid-item websitePadding">
                                <Grid item lg={12} className="text-center">
                                    {/* <span>WE MAKE</span> */}
                                    <h1>Beautiful Kitchens</h1>
                                    <p><span>Indulge in the epitome of culinary luxury with our bespoke kitchen remodels. Impeccable craftsmanship, top-tier materials, and exquisite design come together to create a gourmet haven in your own home. Elevate your cooking experience with the elegance you deserve.
                                    </span></p>
                                    <a href="tel:214-994-7628" className="theme_btn get_start">Call us today! 214-994-7628</a>
                                    {/* <a href="#" className="theme_btn get_start">Get details</a> */}
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </section>
                <section className="hero-slider-area">
                    <Grid className="hero-slides owl-carousel">
                        <Grid className="single-hero-slide gray-overlay bg-cover bg-top d-flex align-items-center"
                            style={{ backgroundImage: `url(${CustomBathroomsHero})` }}>
                            <Grid container spacing={3} className="sLider-grid-item websitePadding">
                                {/* <Grid className="slide-img slide-img-left d-none d-lg-block">
                                    <img src={SliderManImage1} alt=""/>
                                </Grid> */}
                                <Grid item lg={12} className="text-right">
                                    {/* <span>WE MAKE</span> */}
                                    <h1>Luxurious Bathrooms</h1>
                                    <p><span>Experience the pinnacle of bathroom design and functionality with our luxurious bathroom remodels. We combine opulent materials, innovative fixtures, and exquisite craftsmanship to create a spa-like sanctuary within your home. Elevate your daily routine and indulge in the lap of luxury with our bespoke bathroom transformations</span></p>
                                    <a href="tel:214-994-7628" className="theme_btn get_start">Call us today! 214-994-7628</a>
                                    {/* <a href="#" className="theme_btn get_start">Get details</a> */}
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </section>

            </Slider>
        );
    }
}

export default HeroSlider;