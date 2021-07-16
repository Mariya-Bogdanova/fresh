/* eslint-disable no-underscore-dangle */
/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import styles from './OneDay.module.scss';
import delPNG from './del.png';
import eatPNG from './облачко.png';
import eatGreenPNG from './облачко-зеленое.png';
import { deleteProduct } from '../../redux/actions/productsAction';

function OneDay({
  id, title, icon, elem,
}) {
  const dispatch = useDispatch();
  const [view, setView] = useState('none');
  const { DayOfLife } = useSelector((state) => state.products.find((x) => x._id === id));
  function day() {
    return setView('block');
  }
  function noDay() {
    return setView('none');
  }
  async function handledelete(idForDelete) {
    const response = await axios.delete('/api', { data: { idForDelete } });
    if (response.status === 200) {
      dispatch(deleteProduct(idForDelete));
    }
  }

  function declOfNum(number, titles) {
    const cases = [2, 0, 1, 1, 1, 2];
    return titles[(number % 100 > 4 && number % 100 < 20) ? 2 : cases[(number % 10 < 5) ? number % 10 : 5]];
  }

  return (
    <div className={styles.oneProduct}>
      <div className={styles.link} onMouseOver={day} onFocus={day} onMouseOut={noDay} onBlur={noDay}>
        <img
          src={require(`../ModalIcons/icons/${icon}.png`).default}
          alt="блюдо"
        />
        <p style={{ color: `${(elem === 'Более одного дня' && 'rgb(77 142 76)') || (elem === 'Последний день' ? '#d66363' : 'black')}` }}>{title}</p>

        {elem !== 'Последний день' && (
        <div
          className={styles.day}
          style={{
            display: view, fontSize: '12px', position: 'absolute', bottom: '-24px',
          }}
        >
          {(elem !== 'Просрочено') ? (
            <div>
              {DayOfLife}
              {' '}
              {declOfNum(DayOfLife, ['день', 'дня', 'дней'])}
            </div>
          ) : (
            <div>
              {-DayOfLife}
              {' '}
              {declOfNum(-DayOfLife, ['день', 'дня', 'дней'])}
            </div>
          )}
        </div>
        ) }
      </div>

      <button
        style={{
          backgroundImage: `url(${(elem === 'Более одного дня' && eatGreenPNG) || (elem === 'Последний день' ? eatPNG : delPNG)})`,
          height: `${(elem !== 'Просрочено') && '36%'}`,
        }}
        className={styles.delButton}
        type="button"
        onClick={() => handledelete(id)}
      />
    </div>
  );
}
export default OneDay;
