import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { addProduct } from '../../redux/actions/productsAction';

function CreateProduct() {
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
    // console.log(shelfLife);
    event.preventDefault();
    if (date1 || date2) {
      const response = await axios.post('/api', {
        title, shelfLife, dateOfManufacture, expiryDate,
      });
      // if (response.status === 200) {
      //   dispatch(authentication());
      //   return history.push('/fresh');
      // }
    } else { setError('Должна быть заполнена хотя бы одна дата'); }
  }

  return (
    <>
      <form action="" method="post" onSubmit={submitCreateProduct}>
        <label htmlFor="title">
          Название:
          <input id="title" type="text" name="title" required value={title} onChange={controlInputs} />
        </label>
        <br />
        <br />

        <label htmlFor="shelfLife">
          Срок годности:
          <input value={date1} name="date1" type="checkbox" id="date1" onChange={controlCheckbox} checked={date1} />
          {date1 && <input type="date" id="shelfLife" name="shelfLife" required value={shelfLife} onChange={controlInputs} />}
        </label>
        <br />
        <br />

        <label htmlFor="dateOfManufacture">
          Дата производства:
          <input value={date2} name="date2" type="checkbox" id="date2" onChange={controlCheckbox} checked={date2} />
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
      <Link to="/">HOME</Link>
    </>
  );
}

export default CreateProduct;
