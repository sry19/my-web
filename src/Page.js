import React from 'react';
import NavBar from './NavBar.js';
import Footer from './Footer.js';
import Contents from './Contents.js';
// import { LinkContainer } from 'react-router-bootstrap';

export default class Page extends React.Component {

    constructor(props) {
        super(props);
        this.state = { showFooter: true };
        this.onChange = this.onChange.bind(this);
    }

    onChange(props) {
        this.setState({ showFooter: false })
    }

    render () {
        return (
            <div>
                <NavBar />
                <Contents data={this.props.data} />
                <Footer />      
            </div>        
        );
    }


}



