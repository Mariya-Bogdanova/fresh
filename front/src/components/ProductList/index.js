import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { Link, useHistory } from 'react-router-dom';
import { deleteProduct } from '../../redux/actions/productsAction';
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
    </>
  );
}

export default ProductList;
