/* eslint-disable no-param-reassign */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { Link, useHistory } from 'react-router-dom';
import moment from 'moment';
// import Product from '../Product';
import { setProducts, deleteProduct } from '../../redux/actions/productsAction';
// eslint-disable-next-line import/no-unresolved
import styles from './ProductList.module.scss';

function ProductList() {
  const history = useHistory();
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);

  const threeTypesOfDayOfLife = {
    'Более одного дня': [],
    'Последний день': [],
    Просрочено: [],
  };
  products.forEach((product) => {
    if (product.DayOfLife > 1) {
      threeTypesOfDayOfLife['Более одного дня'].push(product);
    } else if (product.DayOfLife === 1) {
      threeTypesOfDayOfLife['Последний день'].push(product);
    } else {
      threeTypesOfDayOfLife.Просрочено.push(product);
    }
  });

  useEffect(() => {
    (async () => {
      const response = await axios('/api');
      const NewProducts = response.data.map((product) => {
        const {
          shelfLife, dateOfManufacture, expiryDate,
        } = product;
        const myDate = new Date(new Date().setHours(0, 0, 0, 0));
        if (shelfLife) {
          product.DayOfLife = Math.floor((moment(shelfLife).diff(moment(myDate), 'days', true))) + 1;
        } else {
          product.DayOfLife = expiryDate - (Math.floor((moment(myDate).diff(moment(dateOfManufacture), 'days', true))) + 2) + 1;
        }
        return product;
      });
      dispatch(setProducts(NewProducts));
    })();
  }, [dispatch]);

  async function handledelete(id) {
    const response = await axios.delete('/api', { data: { id } });
    if (response.status === 200) {
      dispatch(deleteProduct(id));
    }
  }
  async function handlecreate() {
    return history.push('/newProduct');
  }
  return (
    <>
      <button type="button" onClick={handlecreate}>Добавить продукт</button>

      <div className={styles.fridge}>
        <div className={styles.fridgeContent}>
          <div>
            Более одного дня:
            <br />
            {' '}
            <br />
            { threeTypesOfDayOfLife['Более одного дня'].map(({ _id, title }) => (
              <div key={_id}>
                <Link to="/product">{title}</Link>
                <button type="button" onClick={() => handledelete(_id)}>Удалить</button>
              </div>
            ))}
          </div>

          <div>
            Последний день:
            <br />
            {' '}
            <br />
            { threeTypesOfDayOfLife['Последний день'].map(({ _id, title }) => (
              <div key={_id}>
                <Link to="/product">{title}</Link>
                <button type="button" onClick={() => handledelete(_id)}>Удалить</button>
              </div>
            ))}
          </div>

          <div>
            Просрочено:
            <br />
            {' '}
            <br />
            { threeTypesOfDayOfLife.Просрочено.map(({ _id, title }) => (
              <div key={_id}>
                <Link to="/product">{title}</Link>
                <button type="button" onClick={() => handledelete(_id)}>Удалить</button>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Link to="/">HOME</Link>
    </>
  );
}

// eslint-disable-next-line no-lone-blocks
{ /* {products
          ? products.map(({ _id, title }) => (
            <div key={_id}>
              <Link to="/product">{title}</Link>
              <button type="button" onClick={() => handledelete(_id)}>Удалить</button>
            </div>
          ))
          : 'Грузим...'} */ }

export default ProductList;
