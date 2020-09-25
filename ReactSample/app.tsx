declare var require: any

var React = require('react');
var ReactDOM = require('react-dom');

import config from './aws-exports';
import { API } from 'aws-amplify';


export class Hello extends React.Component {

    fetchNotes() {
        
        //const apiData = API.ApiTestReact.graphql({ query: listNotes });
        //setNotes(apiData.data.listNotes.items);
    }

    render() {
        return (
            <h1>Welcome to React!!</h1>
        );
    }
}



ReactDOM.render(<Hello />, document.getElementById('root'));