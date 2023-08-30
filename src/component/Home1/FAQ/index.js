import React, {Component, useState} from 'react';


import {makeStyles} from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';


import Grid from '@material-ui/core/Grid';
import WhatDoLeftImage from '../../../images/orlandoToilet.jpg';


class FAQ extends Component {

    state = {
        open1: true,
        open2: false,
        open3: false,
    }

    handleClick1 = () => {
        this.setState({
            open1: !this.state.open1
        })
    };

    handleClick2 = () => {
        this.setState({
            open2: !this.state.open2
        })
    };
    handleClick3 = () => {
        this.setState({
            open3: !this.state.open3
        })
    };

    render() {

        return (


            <section className="fq-ask-wrap section-padding">
                <Grid container spacing={3} className="websitePadding">
                    <Grid item xs={12} md={6} sm={12}>
                        <Grid className="fq-ask-banner">
                            <img src={WhatDoLeftImage} alt=""/>
                        </Grid>
                    </Grid>
                    <Grid item md={6} sm={12}>
                        <Grid className="theme-heading">
                            {/* <span>Some FAQ’s</span> */}
                            <h2>Why Choose Us?</h2>
                        </Grid>
                        <Grid className="frequent-ask-accrodian">
                            <List
                                component="nav"
                                aria-labelledby="nested-list-subheader"

                                className={'root'}
                            >

                                <ListItem className="collapse_heading" button onClick={this.handleClick1}>
                                    <ListItemText primary="Unparalleled Expertise"/>
                                    {this.state.open1 ? <ExpandLess/> : <ExpandMore/>}
                                </ListItem>
                                <Collapse in={this.state.open1} timeout="auto" unmountOnExit>
                                    <List component="div" disablePadding>
                                        <ListItem button className={'nested'}>
                                            <ListItemText className="collapse_description" primary="At ORV, remodeling isn't just a service - it's an art. With years of industry experience, our team of skilled professionals brings a wealth of knowledge to every project, ensuring that each detail is executed to perfection."/>
                                        </ListItem>
                                    </List>
                                </Collapse>
                                <ListItem className="collapse_heading" button onClick={this.handleClick2}>
                                    <ListItemText primary="Tailored to You"/>
                                    {this.state.open2 ? <ExpandLess/> : <ExpandMore/>}
                                </ListItem>
                                <Collapse in={this.state.open2} timeout="auto" unmountOnExit>
                                    <List component="div" disablePadding>
                                        <ListItem button className={'nested'}>
                                            <ListItemText className="collapse_description"
                                                          primary="No two projects are the same, and neither are our solutions. We pride ourselves on creating customized remodeling plans that reflect your unique style, needs, and preferences. Your space should tell your story, and we're here to help you write it."/>
                                        </ListItem>
                                    </List>
                                </Collapse>
                                <ListItem className="collapse_heading" button onClick={this.handleClick3}>
                                    <ListItemText primary="Timely and Transparent"/>
                                    {this.state.open3 ? <ExpandLess/> : <ExpandMore/>}
                                </ListItem>
                                <Collapse in={this.state.open3} timeout="auto" unmountOnExit>
                                    <List component="div" disablePadding>
                                        <ListItem button className={'nested'}>
                                            <ListItemText className="collapse_description" primary="We understand that your time is valuable. Our efficient project management ensures that timelines are met without compromising quality. With transparent communication every step of the way, you'll always be in the loop"/>
                                        </ListItem>
                                    </List>
                                </Collapse>

                            </List>
                        </Grid>
                    </Grid>
                </Grid>
            </section>
        )
    }

}

export default FAQ;