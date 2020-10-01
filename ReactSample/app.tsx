declare var require: any

var React = require('react');
var ReactDOM = require('react-dom');

import { useState, useEffect } from 'react';
import config from './aws-exports';
import { API } from 'aws-amplify';
API.configure(config);

export class Hello extends React.Component {


    componentDidMount() {
        const apiData = API.get("ApiTestReact", "/estado", "{'key1': 'VALUE1','key2': 'VALUE2','key3': 'VALUE3'}")
            .then(response => response.json())
            .then(response => {
                console.log(response)
            })
            .catch(err => {
                console.log(err);
            });
    }
    
    render() {
        return (
            <h1>Welcome to React!!</h1>
        );
    }
}

ReactDOM.render(<Hello />, document.getElementById('root'));