import React, {Component} from 'react';
import OptionChainRow from './OptionChainRow.jsx';
import Proptypes from 'prop-types';

export default class OptionChain extends Component {
  constructor (props) {
    super(props);
    this.state = {
      symbol: '',
      expiry: '2018-04-20'
    }
    this.symbolInputHandler = this.symbolInputHandler.bind(this);
    this.expiryChangeHandler = this.expiryChangeHandler.bind(this);
    this.optionSubmitHandler = this.optionSubmitHandler.bind(this);
  }

  symbolInputHandler (e) {
    this.setState({symbol: e.target.value});
  }

  expiryChangeHandler (e) {
    this.setState({expiry: e.target.value});
  }

  optionSubmitHandler (e) {
    e.preventDefault();
    this.props.getOptionChain(this.state.symbol, this.state.expiry);
  }

  render () {
    const optionRow = this.props.optionChain
    .sort((a, b) => a._strike - b._strike)
    .map((row) => 
    (<OptionChainRow
      key={row._strike}
      call={row._call}
      callLast={row._call._last}
      callChange={row._call._change}
      callVol={row._call._vol}
      callBid={row._call._bid}
      callAsk={row._call._ask}
      callOpenInt={row._call._openInt}
      strike={row._strike}
      put={row._put}
      putLast={row._put._last}
      putChange={row._put._change}
      putVol={row._put._vol}
      putBid={row._put._bid}
      putAsk={row._put._ask}
      putOpenInt={row._put._openInt}
      addToExamineList={this.props.addToExamineList}  
    />))

    return (
      <div>
        <h3>Option Chain</h3>

        <form className ="optionChain-form" onSubmit={this.optionSubmitHandler}>
          <input
            type="text"
            placeholder="Symbol"
            value={this.state.symbol}
            onChange={this.symbolInputHandler}
          />
          <select onChange={this.expiryChangeHandler}>
            <option defaultValue="2018-04-20">April-20-2018</option>
            <option value="2018-04-27">April-27-2018</option>
          </select>
          <input type="submit" value="Add"/>
        </form>

        <table>
          <thead>
            <tr>
              <th></th>
              <th>Last</th>
              <th>Change</th>
              <th>Vol</th>
              <th>Bid</th>
              <th>Ask</th>
              <th>Open Int.</th>
              <th>Strike</th>
              <th>Last</th>
              <th>Change</th>
              <th>Vol</th>
              <th>Bid</th>
              <th>Ask</th>
              <th>Open Int.</th>
              <th></th>
            </tr>
          </thead>

          <tbody>
            {optionRow}
          </tbody>
        </table>  
      </div>   
    )
  }
}

OptionChain.propTypes = {
  optionChain: Proptypes.array,
  getOptionChain: Proptypes.func,
  addToExamineList: Proptypes.func
}