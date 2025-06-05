import React from 'react';

type CardProps = {
  imgURL: string;
  fullName: string;
  address: string;
};

const Card = ({ fullName, address, imgURL }: CardProps) => {
  return (
    <div className="flex flex-col items-center rounded bg-blue-100 h-70 w-90 m-5 p-3 transition-transform duration-300 hover:scale-105 hover:shadow-xl">
      <img className="h-50 w-auto rounded" src={imgURL} alt="ProfilePic" />
      <div className="mt-2 text-center">
        <h1 className="font-bold text-lg underline text-blue-900">{fullName}</h1>
        <p className="text-sm text-blue-800">{address}</p>
      </div>
    </div>
  );
};

export default Card;
