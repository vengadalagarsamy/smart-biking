import React, {Component} from 'react';

class Gear extends Component { //this is a class for a single "recommended gear" element

    state = {
        title: this.props.title,  //title of the card
        message: this.props.message, //text, underneath the title
        value: this.props.value,
        imageUrl: 'https://picsum.photos/200',
        tags: ['tag1', 'tag2', 'tag3'] //could be list of objects and use tag.id etc
    };

    styles = {
        fontSize: 20,
        backgroundColor: '#F9F9F9',
        margin: '20px 20px 0px 20px',
        borderRadius: 10,
        opacity: 0.65,
        padding: 7,
    }

    messageStyle = {
        fontSize: 15,
    }

    /*renderList(){
        if (this.state.tags.length === 0) return <p>Array is empty!</p>
        return this.state.tags.map(tag => <li key={tag}>{tag}</li>)
    }*/

    constructor(props) {
        super(props);
        //this.handleIncrement = this.handleIncrement.bind(this);
    }


    /*handleIncrement(){
        this.setState({value: this.state.value + 1});
    }*/


    render() {
        return (
            <React.Fragment>
                <div style={this.styles}>
                    <b>{this.props.title}</b> <br/>
                    <span style={this.messageStyle}>{this.props.message}</span>
                </div>
            </React.Fragment>
        )
    }

    formatCount() {
        const {value} = this.state;
        return value === 0 ? 'zero' : value;
    }

}

export default Gear;
