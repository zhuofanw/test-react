import {Component} from "react"
import React from "react"
import PropTypes from "prop-types"
export default class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
            age:props.initialAge
        }
    }

    onMakeOlder(){
        this.age += 3;
        this.setState({
            age : this.state.age + 3
        })
    }
    render() {
        console.log(this.props);
        return (
            <div className="container">
                <div className="row">
                    <div className="col-xs-1 col-xs-offset-11">
                        <div>your name is {this.props.name}, your age is {this.state.age}</div>
                        <button onClick={this.onMakeOlder.bind(this)} className={"btn btn-primary"}>Make me older</button>
                    </div>
                </div>
            </div>
        );
    }
}

Home.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    user: PropTypes.object
};