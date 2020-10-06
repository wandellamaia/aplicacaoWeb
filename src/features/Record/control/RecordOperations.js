import history from '../../../shared/history';

export const clearUser = () => {
  sessionStorage.removeItem('email');
  sessionStorage.removeItem('keepConected');
  history.push('/');
};

export const homePage = () => {
  const teste = sessionStorage.getItem('keepConected');
  if (teste === 'false') {
    clearUser();
    return;
  }
  history.push('/');
};
