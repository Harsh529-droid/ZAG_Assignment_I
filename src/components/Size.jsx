import React, { useState } from 'react';

const Size = () => {
    const [selectedSize, setSelectedSize] = useState('');

    const handleSizeSelection = (size) => {
        setSelectedSize(size);
    };

    return (
        <>     
                <h3 className='abv'>Select Size:</h3>
            <div className='Size'>
                <button
                    onClick={() => handleSizeSelection('S')}
                    className={selectedSize === 'S' ? 'selected' : ''}
                    style={{ backgroundColor: selectedSize === 'S' ? 'black' : 'initial',
                             color: selectedSize === 'S' ? 'white' : 'black' }}
                >
                    S
                </button>
                <button
                    onClick={() => handleSizeSelection('M')}
                    className={selectedSize === 'M' ? 'selected' : ''}
                    style={{ backgroundColor: selectedSize === 'M' ? 'black' : 'initial',
                             color: selectedSize === 'M' ? 'white' : 'black' }}
                >
                    M
                </button>
                <button
                    onClick={() => handleSizeSelection('L')}
                    className={selectedSize === 'L' ? 'selected' : ''}
                    style={{ backgroundColor: selectedSize === 'L' ? 'black' : 'initial',
                             color: selectedSize === 'L' ? 'white' : 'black' }}
                >
                    L
                </button>
                <button
                    onClick={() => handleSizeSelection('XL')}
                    className={selectedSize === 'XL' ? 'selected' : ''}
                    style={{ backgroundColor: selectedSize === 'XL' ? 'black' : 'initial',
                             color: selectedSize === 'XL' ? 'white' : 'black' }}
                >
                    XL
                </button>

                <button
                    onClick={() => handleSizeSelection('XXL')}
                    className={selectedSize === 'XXL' ? 'selected' : ''}
                    style={{ backgroundColor: selectedSize === 'XXL' ? 'black' : 'initial',
                             color: selectedSize === 'XXL' ? 'white' : 'black' }}
                >
                    XXL
                </button>
            </div>
        </>
    );
};

export default Size;
