import React from 'react';

const Coin = ({ name, image, symbol, price, volume }) => {
    return (
        <div className='coin_container'>
            <div className="coin_row">
                <div className="coin">
                    <img src={image} alt="Crypto" />
                    <h1>{name}</h1>
                    <p className='coin_symbol'>{symbol}</p>
                </div>
                <div className="coin_data">
                    <p className="coin_price">₹{price.toLocaleString()}</p>
                    <p className="coin_volume">₹{volume.toLocaleString()}</p>

                </div>
            </div>

        </div>
    );
};

export default Coin;
