/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { Link, useHistory } from 'react-router-dom';
import { deleteProduct } from '../../redux/actions/productsAction';
import styles from './ProductList.module.scss';
import delPNG from './del.png';
import eatPNG from './облачко.png';
import eatGreenPNG from './облачко-зеленое.png';

function ProductList() {
  const isAuthenticated = useSelector((state) => state.isAuthenticated);
  const history = useHistory();
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  const threeTypesOfDayOfLife = {
    'Более одного дня': [],
    'Последний день': [],
    Просрочено: [],
  };
  const arr = Object.keys(threeTypesOfDayOfLife);
  products.forEach((product) => {
    if (product.DayOfLife > 1) {
      threeTypesOfDayOfLife['Более одного дня'].push(product);
    } else if (product.DayOfLife === 1) {
      threeTypesOfDayOfLife['Последний день'].push(product);
    } else {
      threeTypesOfDayOfLife.Просрочено.push(product);
    }
  });

  async function handledelete(id) {
    const response = await axios.delete('/api', { data: { id } });
    if (response.status === 200) {
      dispatch(deleteProduct(id));
    }
  }
  async function handlecreate() {
    return history.push('/newProduct');
  }
  function goBack() {
    return history.push('/logout');
  }
  return (
    <>
      <div className={styles.fridge}>
        <nav style={{ height: '20px' }}>
          {isAuthenticated
          && <button className={styles.button} style={{ left: '13px' }} onClick={goBack} type="button">Выйти</button>}
          <button type="button" className={styles.button} style={{ right: '13px' }} onClick={handlecreate}>Добавить продукт</button>
        </nav>
        <br />

        <div className={styles.fridgeContent}>
          {arr.map((elem) => (
            <div className={styles.shelf} key={elem}>
              <p>
                {elem}
                :
              </p>
              <div className={styles.boxProduct}>
                { threeTypesOfDayOfLife[elem].map(({ _id, title, icon }) => (
                  <div className={styles.oneProduct} key={_id}>
                    <div className={styles.link}>
                      <Link style={{ textDecoration: 'none' }} to="/product">
                        <img
                          src={require(`../ModalIcons/icons/${icon}.png`).default}
                          alt="блюдо"
                        />
                        <p style={{ color: `${(elem === 'Более одного дня' && 'rgb(77 142 76)') || (elem === 'Последний день' ? '#d66363' : 'black')}` }}>{title}</p>
                      </Link>
                    </div>
                    <button
                      style={{
                        backgroundImage: `url(${(elem === 'Более одного дня' && eatGreenPNG) || (elem === 'Последний день' ? eatPNG : delPNG)})`,
                        height: `${(elem !== 'Просрочено') && '36%'}`,
                      }}
                      className={styles.delButton}
                      type="button"
                      onClick={() => handledelete(_id)}
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
export default ProductList;
