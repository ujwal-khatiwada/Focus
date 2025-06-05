import React from 'react';
import Card from './card'; // Adjust path if needed

export default function Servicesdisc() {
  const clients = [
    { name: 'Car', src: '/services/car.png', address: 'For four-wheelers' },
    { name: 'Bike', src: '/services/bike.png', address: 'Two-wheeler support' },
    { name: 'Scooty', src: '/services/scooty.png', address: 'Compact mobility' },
  ];

  return (
    <div className="flex flex-row flex-wrap gap-6 py-10 justify-center">
      {clients.map((client) => (
        <Card
          key={client.name}
          imgURL={client.src}
          fullName={client.name}
          address={client.address}
        />
      ))}
    </div>
  );
}
