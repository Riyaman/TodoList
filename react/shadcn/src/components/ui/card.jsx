import React from 'react';
import {Button} from './button'
const Card = ({ image, title, description }) => {
  return (
    <div className=" flex justify-center items-center flex-col  max-w-sm rounded overflow-hidden shadow-lg">
      <img className="w-full" src={image} alt="Card image cap" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">
          {description}
        </p>
      </div>
      <div className=" flex align-center justify-center px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#tag1</span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#tag2</span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#tag3</span>
        <Button>Show More</Button>
      </div>
    </div>
  );
};

export default Card