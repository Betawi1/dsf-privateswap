import React, { Component } from 'react'
import BuyForm from './BuyForm'
//import SellForm from './SellForm'

class Main extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentForm: 'buy'
    }
  }

  render() {
    let content
    if(this.state.currentForm === 'buy') {
      content = <BuyForm
        balance={this.props.balance}
        buyTokens={this.props.buyTokens}
        loading={this.props.loading}
      />
    }

    return (
      <div id="content" className="mt-3">
        <div>
          <br></br>
          <h1 className="text-white text-center">DigitalSelf Token ("DSF") <br/>Private Swap</h1>
          <br></br>
          
        </div>
        <div className="card mb-4" >
          <div className="card-body">
            {content}
          </div>
        </div>
        <br/>
        <div>
        <h5 className="text-white text-center">HELP? This Video will show you how to Install MetaMask on mobile devices PCs , and how to purchase DSF Tokens</h5>
        <br/>
        <iframe align="center" width="565" height="360" src="https://www.youtube.com/embed/KCz7UAPicGg" frameborder="0" allowfullscreen></iframe>
        </div>
      </div>
    );
  }
}

export default Main;
