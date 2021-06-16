import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import Product from '../Product';
import { setProducts } from '../../redux/actions/productsAction';

function ProductList() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);

  useEffect(() => {
    (async () => {
      const response = await axios('/api');
      dispatch(setProducts(response.data));
    })();
  }, [dispatch]);
  return (
    <div>
      {products
        ? products.map(({ _id }) => (
          <div key={_id}><Product id={_id} /></div>
        ))
        : 'Грузим...'}
    </div>
  );
}

export default ProductList;
