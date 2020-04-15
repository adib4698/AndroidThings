import React, { Component } from 'react';
import './Home.scss';
import { BrowserRouter, NavLink } from 'react-router-dom';
export class Home extends Component {
    constructor(props){
        super(props);
    }

    render() { 
        return (
            
            <div className="background">
                <div className="part1">
                    <div className="upperText">
                         <p>PROXIMITY SENSOR</p>
                    </div>
                </div>
                <div className="part2">
                    <div className="textAbout">
                        <h1 className="paragraphsHead" >
                            Overview
                        </h1>
                        <p className="aboutParagraph">
                        Proximity sensors are used in many applications but it is most widely used in Smartphones. Most of the modern android devices comes with an inbuilt IR-based proximity sensor. I want to make an app that uses proximity sensor to tell you if there are any objects near you. When the information is changing for example from "close" to "far" the app will push the information in a firebase where you can find and use them anywhere.
                        </p>
                    </div>
                </div>
                <div className="part2">
                    <div className="textAbout">
                        <h1 className="paragraphsHead" >
                        Screenshots
                        </h1>
                        <p className="aboutParagraph">
                            For the moment there are no screenshots aviable.
                        </p>
                    </div>
                </div>
                <div className="part2">
                    <div className="textAbout">
                        <h1 className="paragraphsHead" >
                            Schematics
                        </h1>
                        <p className="aboutParagraph">
                        -
                       </p>
                    </div>
                </div>
                <div className="part2">
                    <div className="textAbout">
                        <h1 className="paragraphsHead" >
                        Pre-requisites
                        </h1>
                        <p className="aboutParagraph">
                            We can use any Android device that has minimum Android 5 and has a proximity seonsor.
                        </p>
                    </div>
                </div>
                <div className="part2">
                    <div className="textAbout">
                        <h1 className="paragraphsHead" >
                        Setup-and-build
                        </h1>
                        <p className="aboutParagraph">
                        The Firebase Realtime Database is a cloud-hosted NoSQL database that lets you store and sync between your users in realtime.We will use a firebase to stock the information that comes from phone sensor. This will be a bridge between phone sensor and the website that we will use to show the information that comes from sensor.
                        </p>
                    </div>
                </div>
            </div>
            
                        
        );
    }
}
 
export default Home;