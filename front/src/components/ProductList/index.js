import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import styles from './ProductList.module.scss';
import OneDay from '../OneDay';

function ProductList() {
  const isAuthenticated = useSelector((state) => state.isAuthenticated);
  const history = useHistory();
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

  async function handlecreate() {
    return history.push('/newProduct');
  }
  function goBack() {
    return history.push('/logout');
  }

  return (
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
              { threeTypesOfDayOfLife[elem].map(({ _id, title, icon }) => <OneDay key={_id} id={_id} title={title} icon={icon} elem={elem} />)}
            </div>
          </div>
        ))}
      </div>
    </div>

  );
}

export default ProductList;
