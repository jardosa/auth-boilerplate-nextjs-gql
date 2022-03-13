import Cookies from 'js-cookie';

const logout = () => {
  Cookies.remove('access_token');
  Cookies.remove('refresh_token');
  window.location.href = '/auth/login';
};

export default logout;
