import React from 'react';
import imgNft from '../../assets/images/image-equilibrium.jpg';
import avatar from '../../assets/images/image-avatar.png';
import iconClock from '../../assets/images/icon-clock.svg';
import iconEther from '../../assets/images/icon-ethereum.svg';
import iconView from '../../assets/images/icon-view.svg';
import './Card-style.css';

class Card extends React.Component {
  render() {
    return (
    <main className="container">
      <div className="card">
        <div className="card-image">
          <img src={imgNft} alt="Equilibrium NFT" />
          <div className="view-image">
            <img src={iconView} alt="View" />
          </div>
        </div>
        <h2>Equilibrium #3429</h2>
        <p>Our Equilibrium collection promotes balance and calm.</p>
        <div className="icons">
          <ul>
            <li className="text-eth"><img src={iconEther} alt="Ethereum icon" />0.041 ETH</li>
            <li className="text-clock"><img src={iconClock} alt="Clock icon" />3 days left</li>
          </ul>
        </div>
        <div className="separator"></div>
        <div className="user">
          <img src={avatar} alt="Avatar" />
          <p>Creation of<span> Jules Wyvern</span></p>
        </div>
      </div>
    </main>
    );
  }
}

export default Card;
