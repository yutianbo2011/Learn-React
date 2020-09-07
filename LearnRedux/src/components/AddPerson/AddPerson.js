import React, {Component} from 'react';

import './AddPerson.css';

class AddPerson extends Component{
    state={
        name:'',
    }

    namgeChangeHandler =(event)=>{
        this.setState({name: event.target.value});
    }

    render(){
        return (
            <div className="AddPerson">
                <input type="text" 
                placeholder="Name" 
                value={this.state.name}
                onChange={this.namgeChangeHandler}></input>
                <button onClick={ () => this.props.personAdded (this.state.name) }>Add Person</button>
            </div>
        )
    }
} ;

export default AddPerson;