import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { logout } from '../../redux/actions/authActions ';

function Logout() {
  const history = useHistory();
  const dispatch = useDispatch();
  useEffect(() => {
    (async () => {
      await axios('/auth/logout');
      dispatch(logout());
      history.push('/');
    })();
  });
  return '';
}

export default Logout;
