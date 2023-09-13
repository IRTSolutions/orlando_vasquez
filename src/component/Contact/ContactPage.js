import React, {Component} from "react";
import Header from "../Home1/Header";
import HeroArea from "../About/HeroArea";
import ContactInfo from "./ContactInfo";
import ContactMap from "./ContactMap";
import ContactForm from "./ContactForm";
import ContactUsHero from '../../images/contactUsHero.jpg'

class ContactPage extends Component{
    render() {
        return(
            <div>
                <Header/>
                <HeroArea slug='Call Text Or Email' title='Contact Us' imageurl={ContactUsHero}/>
                <ContactInfo/>
                <ContactMap/>
                <ContactForm/>
            </div>
        )
    }
}
export default ContactPage;