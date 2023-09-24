import React, {useContext} from 'react';
// import { useSelector } from 'react-redux';

import FavoriteItem from '../components/Favorites/FavoriteItem';
import { ProductContext } from '../context/product-context';
import './Products.css';
import { useStore } from '../hooks-store/store';

const Favorites = props => {
  // const favoriteProducts = useContext(ProductContext).products.filter(p => p.isFavorite);
  let content = <p className="placeholder">Got no favorites yet!</p>;
  const state = useStore()[0]
  const favoriteProducts = state.products.filter(p => p.isFavorite)
  if (favoriteProducts.length > 0) {
    content = (
      <ul className="products-list">
        {favoriteProducts.map(prod => (
          <FavoriteItem
            key={prod.id}
            id={prod.id}
            title={prod.title}
            description={prod.description}
          />
        ))}
      </ul>
    );
  }
  return content;
};

export default Favorites;
