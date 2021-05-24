import * as React from 'react';
import { connect } from 'react-redux';
import './Home.css';

export class Home extends React.Component {
  static displayName = Home.name;
  render() {
    return (
      <div className="Home">
        <img src="https://i.imgur.com/opi48tP.png" alt="Photo-Component" className="Photo-Component"/>
        <h2 className="Text-1"><em>LEADING MARKETPLACE FOR GAMERS</em></h2>
        <p className="Text-2"><i><b>Trade securely with gamers throughout the world.</b></i></p>
        <a href="https://localhost:5001/Auctions" className="Buy-Button">Buy</a>
      </div>
    );
  }
}

export default connect()(Home);
