import React, { Component } from 'react';
import './homeViewStyles.css';

export default class HomeView extends Component {
    render(): JSX.Element {
        return (
            <div id="home-container">
                <iframe
                    title="video"
                    src="https://www.youtube.com/embed/VBJaBbSRZJ8"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                />
            </div>
        );
    }
}
