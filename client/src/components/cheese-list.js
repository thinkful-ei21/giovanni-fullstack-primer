import React from 'react';
import { connect } from 'react-redux';
import {fetchCheese} from '../actions/cheese'


export class CheeseList extends React.Component {


    componentDidMount(){
        this.props.dispatch(fetchCheese())
    }

    render(){
        console.log(this.props)
        //this.props.dispatch(testing())

        return(
            <div className="header-bar">
            <ul>{this.props.cheeses.map(item =>{
                return (
                    <li>{item}</li>
                )
            })}</ul>
            </div>
        )
    }

}

const mapStateToProps = state => ({
      cheeses:state.cheeses,
    
  });

export default connect(mapStateToProps)(CheeseList);