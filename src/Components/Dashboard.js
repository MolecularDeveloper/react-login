import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

class Dashboard extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    render() {
        return (
            <div>
            	<Grid>
            		<Row>
            			<Col xs={9} md={9}>
            			</Col>
	            		<Col xs={3} md={3}>
	            			<img src={this.props.profile.picture} role="presentation" alt="" />
	            			<h4>{this.props.profile.nickname}</h4>
	            			<strong>{this.props.profile.email}</strong>
	            		</Col>
            		</Row>
          		</Grid>
       			</div>
        );
    }
}

export default Dashboard;
