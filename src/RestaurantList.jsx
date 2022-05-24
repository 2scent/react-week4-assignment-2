import React from 'react';

export default function RestaurantList({ restaurants }) {
  return (
    <ul>
      {restaurants.map((restaurant) => (
        <li key={restaurant.id}>
          {restaurant.name}
          |
          {' '}
          {restaurant.address}
          {' '}
          |
          {' '}
          {restaurant.category}
        </li>
      ))}
    </ul>
  );
}
