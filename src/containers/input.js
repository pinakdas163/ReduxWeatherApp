import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchweather} from '../actions/index';
class Input extends Component {
  constructor(props) {
    super(props);
    this.onInputChange=this.onInputChange.bind(this);
    this.onFormSubmit=this.onFormSubmit.bind(this);
    this.state={term:''};
  }

  onInputChange(event) {
    //console.log(event.target.value);
    this.setState({term:event.target.value});
  }

  onFormSubmit(event) {
    event.preventDefault();
    this.props.fetchweather(this.state.term);
    this.setState({term:''});
  }

  render() {
    return (
      <div style={{marginTop:1+'em'}}>
        <form className='form-inline' onSubmit={this.onFormSubmit}>
        <div className='form-group'>
          <input name='search' className='form-control' style={{width: 60 + 'em'}}
            onChange={this.onInputChange}
            value={this.state.term}
          />
          </div>
            <button className='btn btn-success' type='submit' >Submit</button>

        </form>
      </div>
    );
  }
}

function dispatchToProps(dispatch) {
  return bindActionCreators ({fetchweather:fetchweather},dispatch);
}

export default connect(null, dispatchToProps)(Input);
