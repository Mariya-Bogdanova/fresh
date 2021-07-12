/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useState } from 'react';
import Modal from 'react-modal';
import './ModalIcons.css';

const quantityElems = [];
function quantity() {
  let number = 1;
  for (let i = 0; i < 77; i++) {
    quantityElems.push(number);
    number++;
  }
  return quantityElems;
}
quantity();

function importAll(r) {
  const images = {};
  // eslint-disable-next-line no-return-assign
  r.keys().map((item, index) => images[item.replace('./', '')] = r(item));
  return images;
}
const images = importAll(require.context('./icons', false, /\.(png|jpe?g|svg)$/));

const customStyles = {
  content: {
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

function ModalIcons({ setIcon }) {
  const [iconDisplay, setIconDisplay] = useState(images['1.png'].default);
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }
  function addIcon(elem) {
    setIconDisplay(images[`${elem}.png`].default);
    setIcon(`../ModalIcons/icons/${elem}.png`);
    closeModal();
  }
  function keyD() {
    console.log('keyD');
  }
  return (
    <div>
      <div style={{ display: 'flex', marginTop: '-40px' }}>
        <button
          style={{ marginBottom: '20px', margin: 'auto auto 18px' }}
          type="button"
          onClick={openModal}
        >
          Добавить иконку
        </button>
        <div style={{ width: '32%', padding: '10px', outline: 'none' }} onClick={openModal} tabIndex={0} role="button" onKeyDown={keyD}>
          <img src={iconDisplay} alt="иконка" style={{ width: '100%' }} />
        </div>

      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <form>
          {quantityElems.map((elem) => (
            <button
              key={elem}
              onClick={() => addIcon(elem)}
              className="buttons"
              type="button"
              style={{ backgroundImage: `url(${images[`${elem}.png`].default})` }}
            />
          ))}
        </form>
      </Modal>
    </div>
  );
}

export default ModalIcons;
