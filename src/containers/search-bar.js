import React,{ Component } from 'react';

import { connect} from 'react-redux';
import { bindActionCreators} from 'redux';
import {fetchWeather} from "../actions/index";
class SearchBar extends Component
{   constructor(props){
    super(props);

    this.state={term: ''};
    this.onInputChange=this.onInputChange.bind(this);
    this.onFormSubmit=this.onFormSubmit.bind(this);

}
    onInputChange(event)
    {
        this.setState({term:event.target.value});
    }
    onFormSubmit(event)
    {
        event.preventDefault();
        this.props.fetchWeather(this.state.term);
        this.setState({term:''});
    }
    render(){
        return (
        <form onClick={this.onFormSubmit} className="input-group">
            <input className="form-input" value={ this.state.term } placeholder="Enter the cities to get five day fore cast" onChange={this.onInputChange }/>
            <span className="input-group-button">
                <button type="sumbit" className="btn btn-secondary">Search</button>
            </span>
        </form>
        );
    }
}
function mapDispatchToProps(dispatch) {
    return  bindActionCreators({fetchWeather},dispatch)
    
}
export default connect(null,mapDispatchToProps)(SearchBar);