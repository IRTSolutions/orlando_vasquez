import React, {Component} from "react";
import WoodFencing from "../../../images/wedo/Fencing_Square.jpg";
import OurService2 from "../../../images/wedo/w2.png";
import OurService3 from "../../../images/wedo/drain_plumbing.jpg";
import Decks from "../../../images/wedo/Decks_square.jpg";
import Grid from "@material-ui/core/Grid";

const ServiceItem = [
    {
        id: 1,
        title: 'Painting',
        image: OurService2,
        description: 'Painting walls, trim, doors.'
    },
    {
        id: 2,
        title: 'Tile and Flooring',
        image: OurService2,
        description: 'Flooring and decorative tile installation'
    },
    {
        id: 3,
        title: 'Plumbing',
        image: OurService3,
        description: 'Full plumbing services, relocate waterlines and drains. Install faucets and appliances'
    },
    {
        id: 4,
        title: 'Electrical',
        image: OurService2,
        description: 'Run electrical wiring, installation and relocation of lighting and switches'
    },
    {
        id: 5,
        title: 'Framing',
        image: OurService2,
        description: 'Lorem ipsum dolor sit amet, conse ctetur adipisicing elit, sed do eiusmod tempor incidid'
    },
    {
        id: 6,
        title: 'Drywall',
        image: OurService2,
        description: 'Repair, Installation and Texture.'
    },
    {
        id: 7,
        title: 'Wood Fencing',
        image: WoodFencing,
        description: 'Lorem ipsum dolor sit amet, conse ctetur adipisicing elit, sed do eiusmod tempor incidid'
    },
    {
        id: 8,
        title: 'Decks',
        image: Decks,
        description: 'Lorem ipsum dolor sit amet, conse ctetur adipisicing elit, sed do eiusmod tempor incidid'
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
                            <h2>We build strong brands and grow businesses through branded services, <span>digital storytelling.</span>
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