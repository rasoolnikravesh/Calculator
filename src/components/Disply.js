import React from 'react';
import PropTypes from 'prop-types';

const Disply = props => {
  const { text, subText } = props
  return (
    <div className="flex flex-col w-full h-12 border-2 px-2 border-blue-50 rounded-xl">
      <div className='w-full h-2/5 text-right text-xs text-gray-500 font-light '>
        <span >{subText}</span>
      </div>
      <div className='w-full h-3/5 text-right text-2xl font-medium'>
        <span>{text}</span>
      </div>
    </div>
  );
};

Disply.propTypes = {
  text: PropTypes.string.isRequired,
  subText: PropTypes.string
};

export default Disply;