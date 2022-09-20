import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';

class ClickedCount extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            count1: 0,
            count2: 0,
        }
        this.ShowCount=this.ShowCount.bind(this);
        this.countNumber=this.countNumber.bind(this);
    }

    countNumber(e) {
        e.preventDefault();
        if (e.target.id === 'count1') {
            return this.setState({count1: this.state.count1 + 1});
        }
        else return this.setState({count2: this.state.count2 + 1});

    }

    ShowCount() {
        let divStyle = {
            display: "flex",
            flexDirection: "column"
        }
        let fontStyle = {
            fontSize: "30px",
            color: "red"
        }

        return (
            <div style={divStyle}>
                <div style={divStyle}>
                    <h1 style={fontStyle}>Hello World</h1>
                    <p>This is one thing.</p>
                    <button style={{width:"100px"}} onClick={this.countNumber} id={"count1"}>click me</button>
                    <p>I have been toggled {this.state.count1}</p>
                </div>
                <div style={divStyle}>
                    <h1 style={fontStyle}>Hello World</h1>
                    <p>This is a another thing.</p>
                    <button style={{width:"100px"}} onClick={this.countNumber} id={"count2"}>click me</button>
                    <p>I have been toggled {this.state.count2}</p>
                </div>
            </div>
        );
    }

    render(){
        return (<this.ShowCount/>)
    }



}
export default ClickedCount;


reportWebVitals();