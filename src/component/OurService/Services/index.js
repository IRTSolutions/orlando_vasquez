import React, {Component} from "react";
import WoodFencing from "../../../images/wedo/Fencing_Square.jpg";
import ShowerFrame from "../../../images/wedo/showerFrame_Square.jpg";
import Tile from "../../../images/wedo/tileWIP_square.jpg";
import OurService3 from "../../../images/wedo/drain_plumbing.jpg";
import Decks from "../../../images/wedo/Decks_square.jpg";
import Paint from "../../../images/wedo/exteriorPaint_square.jpg";
import Grid from "@material-ui/core/Grid";
import CustomBath from "../../../images/wedo/orlandoBathroom_square.jpg";

const ServiceItem = [
    {
        id: 1,
        title: 'Painting',
        image: Paint,
        description: 'Interior and exterior, from walls to ceilings, we bring color and life to your vision. Quality, speed, and attention to detail are our brushstrokes. '
    },
    {
        id: 2,
        title: 'Tile and Flooring',
        image: Tile,
        description: 'Transform your space with our top-tier tile installation services. Precision, style, and durability come together to create the perfect surface for your home or business. '
    },
    {
        id: 3,
        title: 'Plumbing',
        image: OurService3,
        description: 'Trust us for all your plumbing needs. From repairs to installations, we\'ve got you covered. Reliable, experienced, and ready to help'
    },
    // {
    //     id: 4,
    //     title: 'Electrical',
    //     image: ShowerFrame,
    //     description: 'Your electrical needs, our expertise. We offer top-notch electrical services for your home or business. Safe, efficient, and always on time'
    // },
    {
        id: 4,
        title: 'Custom Baths',
        image: CustomBath,
        description: 'Elevate your daily routine with a custom bathroom remodel tailored to your style and needs. From elegant fixtures to innovative designs, we craft unique sanctuaries that reflect your personality. Your dream bathroom is just a renovation away.'
    },
    {
        id: 5,
        title: 'Framing',
        image: ShowerFrame,
        description: 'Building the foundation of your vision with precision and expertise. Our framing job ensures your project is strong, safe, and ready for transformation. Trust us to lay the groundwork for your dream space.'
    },
    {
        id: 6,
        title: 'Drywall',
        image: ShowerFrame,
        description: 'Get the perfect walls for your space with our expert drywall installation. We make sure it\'s smooth and ready for your style'
    },
    {
        id: 7,
        title: 'Wood Fencing',
        image: WoodFencing,
        description: 'Crafting privacy, one plank at a time.'
    },
    {
        id: 8,
        title: 'Decks',
        image: Decks,
        description: 'Crafting the foundation of your outdoor dreams, step by step'
    },

];

class Services extends Component {
    render() {
        return (
            <section className="what-we-do section-padding">
                <Grid container spacing={3} className="websitePadding">
                    <Grid item lg={1}></Grid>
                    <Grid item lg={10} xs={12} className="text-center">
                        <Grid className="what-we-do-title">
                            <span>what we do</span>
                            <h2>Our expertise spans every corner of your home. From <span>revitalizing</span> kitchens and <span>luxurious</span> bathrooms to <span>expanding</span> living spaces and <span>rejuvenating</span> outdoor areas, we take on projects of all scales. No challenge is too big, no detail is too small.
                            </h2>
                        </Grid>
                    </Grid>
                    {ServiceItem.map(service => {
                        return (
                            <Grid key={service.id} item md={3} sm={6} className="text-center">
                                <Grid className="single-we-do">
                                    <img src={service.image} alt=""/>
                                    <h3>{service.title}</h3>
                                    <p>{service.description}</p>
                                </Grid>
                            </Grid>
                        )
                    })}
                </Grid>
            </section>
        )
    }
}

export default Services;