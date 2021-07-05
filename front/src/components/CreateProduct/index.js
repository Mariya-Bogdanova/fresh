/* eslint-disable no-underscore-dangle */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { Link, useHistory } from 'react-router-dom';
import { addProduct } from '../../redux/actions/productsAction';
import { useCreateDayOfLife } from '../../hooks/hooks';
import styles from './CreateProduct.module.scss';

function CreateProduct() {
  const history = useHistory();
  const dispatch = useDispatch();
  const [inputs, setInputs] = useState({
    title: '',
    expiryDate: '',
    date1: true,
    shelfLife: '',
    date2: false,
    dateOfManufacture: '',
  });
  const {
    title, expiryDate, date1, date2, shelfLife, dateOfManufacture,
  } = inputs;
  const product = {
    dateOfManufacture,
    expiryDate,
    shelfLife,
    title,
  };
  const [error, setError] = useState(false);
  function controlInputs({ target: { name, value } }) {
    setInputs({
      ...inputs,
      [name]: value,
    });
  }
  function controlCheckbox({ target: { name } }) {
    setError(false);
    setInputs({
      ...inputs,
      [name]: !inputs[name],
    });
  }
  async function submitCreateProduct(event) {
    event.preventDefault();
    if (date1 || date2) {
      const response = await axios.post('/api', {
        title, shelfLife, dateOfManufacture, expiryDate,
      });
      if (response.status === 200) {
        const newProduct = useCreateDayOfLife(product);
        newProduct._id = response.data;
        dispatch((addProduct(newProduct)));
        return history.push('/fresh');
      }
    }
    return setError('Должна быть заполнена хотя бы одна дата');
  }
  function goBack() {
    return history.push('/fresh');
  }
  return (
    <div className={styles.create}>
      <form className={styles.formCreate} action="" method="post" onSubmit={submitCreateProduct}>
        <label htmlFor="title">
          Название:
          <input id="title" type="text" name="title" required value={title} onChange={controlInputs} />
        </label>
        <br />
        <br />

        <label htmlFor="shelfLife">
          <span>Срок годности:</span>
          <input style={{ width: '20px' }} value={date1} name="date1" type="checkbox" id="date1" onChange={controlCheckbox} checked={date1} />
          {date1 && <input type="date" id="shelfLife" name="shelfLife" required value={shelfLife} onChange={controlInputs} />}
        </label>
        <br />
        <br />

        <label htmlFor="dateOfManufacture">
          Дата производства:
          <input style={{ width: '20px' }} value={date2} name="date2" type="checkbox" id="date2" onChange={controlCheckbox} checked={date2} />
          {date2 && <input type="date" id="dateOfManufacture" name="dateOfManufacture" required value={dateOfManufacture} onChange={controlInputs} />}
        </label>
        <br />
        {date2
      && (
      <label htmlFor="daysOfLife">
        Срок годности с даты производства:
        <input
          value={expiryDate}
          name="expiryDate"
          type="number"
          id="expiryDate"
          onChange={controlInputs}
          required
          placeholder="Количество дней"
        />
      </label>
      )}

        <br />
        <button type="submit">Добавить продукт</button>
        <div className="error">{error}</div>
      </form>
      <button className={styles.button} onClick={goBack} type="button">Назад</button>
    </div>
  );
}

export default CreateProduct;
