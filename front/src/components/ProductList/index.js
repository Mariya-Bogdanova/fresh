/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { Link, useHistory } from 'react-router-dom';
import { deleteProduct } from '../../redux/actions/productsAction';
import styles from './ProductList.module.scss';

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
  return (
    <>

      <div className={styles.fridge}>
        <nav>
          {isAuthenticated && <Link to="/logout">Выйти</Link>}
        </nav>
        <br />
        <button type="button" onClick={handlecreate}>Добавить продукт</button>
        <div className={styles.fridgeContent}>
          <div className={styles.shelf}>
            <p>Более одного дня:</p>
            <div>
              { threeTypesOfDayOfLife['Более одного дня'].map(({ _id, title }) => (
                <div key={_id}>
                  <Link to="/product">{title}</Link>
                  <button type="button" onClick={() => handledelete(_id)}>Удалить</button>
                </div>
              ))}
            </div>

          </div>

          <div className={styles.shelf}>
            <p>Последний день:</p>
            <div>
              { threeTypesOfDayOfLife['Последний день'].map(({ _id, title }) => (
                <div key={_id}>
                  <Link to="/product">{title}</Link>
                  <button type="button" onClick={() => handledelete(_id)}>Удалить</button>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.shelf}>
            <p>Просрочено:</p>
            <div>
              { threeTypesOfDayOfLife.Просрочено.map(({ _id, title }) => (
                <div key={_id}>
                  <Link to="/product">{title}</Link>
                  <button className={styles.delButton} type="button" onClick={() => handledelete(_id)} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductList;
