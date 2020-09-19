import history from '../../../shared/history';

export const clearUser = () => {
  localStorage.removeItem('email');
  history.push('/');
};
