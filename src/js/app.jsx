import React from 'react';

export default class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      balance: '' ,
      rate: '',
      term: '15',
      output: null
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    const P = parseFloat(this.state.balance);  console.log(P);
    const r = parseFloat(this.state.rate)/100/12; console.log(r);
    const n = parseInt(this.state.term)*12; console.log(n);
    const M = P * (r * ((1 + r) ** n)) / (((1 + r) ** n) - 1); console.log(M);
    this.setState({
      output: Math.ceil(M * 100) / 100
    })
  }

  render() {
    return (
        <div className='container'>
        <h3>Mortgage Calculator</h3>
        <input type="number" name="balance" value={this.state.balance} onChange={this.handleChange} placeholder='Balance'/>
        <input type="number" name="rate" step='0.01' value={this.state.rate} onChange={this.handleChange} placeholder='Rate'/>
        <select name="term" value={this.state.term} onChange={this.handleChange}>
        <option value={15}>15 year Fixed Rate</option>
        <option value={30}>30 year Fixed Rate</option>
        </select>
        
        <button name="submit" id='button' onClick={this.handleSubmit}>Calculate</button>
           
        <div className='output' id='output' value={this.state.output}>
          <h3>Monthly Payment: ${this.state.output}</h3>
        </div>
      </div>
    );
  }
}

