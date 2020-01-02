//Any JS in here is automatically run for us

//Import react
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import ImageList from "./components/image_list";
import axios from 'axios';

//Create a component
class App extends Component {
    constructor(props) {
        super(props);

        this.state = {images: []};  //State should only ever be set manually in the constructor, everywhere else use this.setState(...)

        axios.get('https://api.imgur.com/3/gallery/hot/viral/0', {
            headers: {
                'Authorization': 'Client-ID c7755f1fa341451'
            }
        })
            .then(response => this.setState({images: response.data.data}));  //setState automatically triggers the app to rerender
    }

    render() {
        return (
            <div>
                <ImageList images={this.state.images}/>
            </div>
        );
    };
}

//Render the component to the screen
Meteor.startup(() => {
    ReactDOM.render(<App/>, document.querySelector('.container'));
});
