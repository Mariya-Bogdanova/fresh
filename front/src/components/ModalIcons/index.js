/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useState } from 'react';
import Modal from 'react-modal';
import './ModalIcons.css';

// console.log(444444444444444);
// const a = [];
// let number = 1;
// for (let i = 0; i < 77; i++) {
//   a.push(number);
//   number++;
// }
// // eslint-disable-next-line no-undef
// console.log(a);

function importAll(r) {
  const images = {};
  // eslint-disable-next-line no-return-assign
  r.keys().map((item, index) => images[item.replace('./', '')] = r(item));
  return images;
}
const images = importAll(require.context('./icons', false, /\.(png|jpe?g|svg)$/));

const customStyles = {
  content: {
    // display: 'flex',
    // alignItems: 'center',
    // justifyContent: 'center',
    // flexWrap: 'wrap',
    padding: '60px',
    backgroundColor: 'white',
    width: '1000px',
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#root');

function ModalIcons() {
  let subtitle;
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
  //   // references are now sync'd and can be accessed.
  //   subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <button style={{ marginBottom: '20px' }} type="button" onClick={openModal}>Добавить иконку</button>
      {/* <img src={} alt="иконка"> */}
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <form>
          {/* <button onClick={addIcon} className="buttons" type="button" style={{ backgroundImage: `url(${images['1.png'].default})` }} /> */}
          <button className="buttons" type="button" style={{ backgroundImage: `url(${images['2.png'].default})` }} />
          <button className="buttons" type="button" style={{ backgroundImage: `url(${images['3.png'].default})` }} />
          <button className="buttons" type="button" style={{ backgroundImage: `url(${images['4.png'].default})` }} />
          <button className="buttons" type="button" style={{ backgroundImage: `url(${images['5.png'].default})` }} />
          <button className="buttons" type="button" style={{ backgroundImage: `url(${images['6.png'].default})` }} />
          <button className="buttons" type="button" style={{ backgroundImage: `url(${images['7.png'].default})` }} />
          <button className="buttons" type="button" style={{ backgroundImage: `url(${images['8.png'].default})` }} />
          <button className="buttons" type="button" style={{ backgroundImage: `url(${images['9.png'].default})` }} />
          <button className="buttons" type="button" style={{ backgroundImage: `url(${images['10.png'].default})` }} />
          <button className="buttons" type="button" style={{ backgroundImage: `url(${images['11.png'].default})` }} />
          <button className="buttons" type="button" style={{ backgroundImage: `url(${images['12.png'].default})` }} />
          <button className="buttons" type="button" style={{ backgroundImage: `url(${images['13.png'].default})` }} />
          <button className="buttons" type="button" style={{ backgroundImage: `url(${images['14.png'].default})` }} />
          <button className="buttons" type="button" style={{ backgroundImage: `url(${images['15.png'].default})` }} />
          <button className="buttons" type="button" style={{ backgroundImage: `url(${images['16.png'].default})` }} />
          <button className="buttons" type="button" style={{ backgroundImage: `url(${images['17.png'].default})` }} />
          <button className="buttons" type="button" style={{ backgroundImage: `url(${images['18.png'].default})` }} />
          <button className="buttons" type="button" style={{ backgroundImage: `url(${images['19.png'].default})` }} />
          <button className="buttons" type="button" style={{ backgroundImage: `url(${images['20.png'].default})` }} />
          <button className="buttons" type="button" style={{ backgroundImage: `url(${images['21.png'].default})` }} />
          <button className="buttons" type="button" style={{ backgroundImage: `url(${images['22.png'].default})` }} />
          <button className="buttons" type="button" style={{ backgroundImage: `url(${images['23.png'].default})` }} />
          <button className="buttons" type="button" style={{ backgroundImage: `url(${images['24.png'].default})` }} />
          <button className="buttons" type="button" style={{ backgroundImage: `url(${images['25.png'].default})` }} />
          <button className="buttons" type="button" style={{ backgroundImage: `url(${images['26.png'].default})` }} />
          <button className="buttons" type="button" style={{ backgroundImage: `url(${images['27.png'].default})` }} />
          <button className="buttons" type="button" style={{ backgroundImage: `url(${images['28.png'].default})` }} />
          <button className="buttons" type="button" style={{ backgroundImage: `url(${images['29.png'].default})` }} />
          <button className="buttons" type="button" style={{ backgroundImage: `url(${images['30.png'].default})` }} />
          <button className="buttons" type="button" style={{ backgroundImage: `url(${images['31.png'].default})` }} />
          <button className="buttons" type="button" style={{ backgroundImage: `url(${images['32.png'].default})` }} />
          <button className="buttons" type="button" style={{ backgroundImage: `url(${images['33.png'].default})` }} />
          <button className="buttons" type="button" style={{ backgroundImage: `url(${images['34.png'].default})` }} />
          <button className="buttons" type="button" style={{ backgroundImage: `url(${images['35.png'].default})` }} />
          <button className="buttons" type="button" style={{ backgroundImage: `url(${images['36.png'].default})` }} />
          <button className="buttons" type="button" style={{ backgroundImage: `url(${images['37.png'].default})` }} />
          <button className="buttons" type="button" style={{ backgroundImage: `url(${images['38.png'].default})` }} />
          <button className="buttons" type="button" style={{ backgroundImage: `url(${images['39.png'].default})` }} />
          <button className="buttons" type="button" style={{ backgroundImage: `url(${images['40.png'].default})` }} />
          <button className="buttons" type="button" style={{ backgroundImage: `url(${images['41.png'].default})` }} />
          <button className="buttons" type="button" style={{ backgroundImage: `url(${images['42.png'].default})` }} />
          <button className="buttons" type="button" style={{ backgroundImage: `url(${images['43.png'].default})` }} />
          <button className="buttons" type="button" style={{ backgroundImage: `url(${images['44.png'].default})` }} />
          <button className="buttons" type="button" style={{ backgroundImage: `url(${images['45.png'].default})` }} />
          <button className="buttons" type="button" style={{ backgroundImage: `url(${images['46.png'].default})` }} />
          <button className="buttons" type="button" style={{ backgroundImage: `url(${images['47.png'].default})` }} />
          <button className="buttons" type="button" style={{ backgroundImage: `url(${images['48.png'].default})` }} />
          <button className="buttons" type="button" style={{ backgroundImage: `url(${images['49.png'].default})` }} />
          <button className="buttons" type="button" style={{ backgroundImage: `url(${images['50.png'].default})` }} />
          <button className="buttons" type="button" style={{ backgroundImage: `url(${images['51.png'].default})` }} />
          <button className="buttons" type="button" style={{ backgroundImage: `url(${images['52.png'].default})` }} />
          <button className="buttons" type="button" style={{ backgroundImage: `url(${images['53.png'].default})` }} />
          <button className="buttons" type="button" style={{ backgroundImage: `url(${images['54.png'].default})` }} />
          <button className="buttons" type="button" style={{ backgroundImage: `url(${images['55.png'].default})` }} />
          <button className="buttons" type="button" style={{ backgroundImage: `url(${images['56.png'].default})` }} />
          <button className="buttons" type="button" style={{ backgroundImage: `url(${images['57.png'].default})` }} />
          <button className="buttons" type="button" style={{ backgroundImage: `url(${images['58.png'].default})` }} />
          <button className="buttons" type="button" style={{ backgroundImage: `url(${images['59.png'].default})` }} />
          <button className="buttons" type="button" style={{ backgroundImage: `url(${images['60.png'].default})` }} />
          <button className="buttons" type="button" style={{ backgroundImage: `url(${images['61.png'].default})` }} />
          <button className="buttons" type="button" style={{ backgroundImage: `url(${images['62.png'].default})` }} />
          <button className="buttons" type="button" style={{ backgroundImage: `url(${images['63.png'].default})` }} />
          <button className="buttons" type="button" style={{ backgroundImage: `url(${images['64.png'].default})` }} />
          <button className="buttons" type="button" style={{ backgroundImage: `url(${images['65.png'].default})` }} />
          <button className="buttons" type="button" style={{ backgroundImage: `url(${images['66.png'].default})` }} />
          <button className="buttons" type="button" style={{ backgroundImage: `url(${images['67.png'].default})` }} />
          <button className="buttons" type="button" style={{ backgroundImage: `url(${images['68.png'].default})` }} />
          <button className="buttons" type="button" style={{ backgroundImage: `url(${images['69.png'].default})` }} />
          <button className="buttons" type="button" style={{ backgroundImage: `url(${images['70.png'].default})` }} />
          <button className="buttons" type="button" style={{ backgroundImage: `url(${images['71.png'].default})` }} />
          <button className="buttons" type="button" style={{ backgroundImage: `url(${images['72.png'].default})` }} />
          <button className="buttons" type="button" style={{ backgroundImage: `url(${images['73.png'].default})` }} />
          <button className="buttons" type="button" style={{ backgroundImage: `url(${images['74.png'].default})` }} />
          <button className="buttons" type="button" style={{ backgroundImage: `url(${images['75.png'].default})` }} />
          <button className="buttons" type="button" style={{ backgroundImage: `url(${images['76.png'].default})` }} />
          <button className="buttons" type="button" style={{ backgroundImage: `url(${images['77.png'].default})` }} />
          {/* <button className="buttons" type="button" style={{ backgroundImage: `url(${images['78.png'].default})` }} /> */}
        </form>

      </Modal>
    </div>
  );
}

export default ModalIcons;
