import history from '../../../shared/history';

export const clearUser = () => {
  console.log('VOu limpar o usuário');
  localStorage.removeItem('email');
  localStorage.removeItem('keepConected');
  history.push('/');
};

export const homePage = () => {
  const teste = localStorage.getItem('keepConected');
  console.log('Ta conectado? ', teste);
  if (teste === 'false') {
    clearUser();
    return;
  }
  history.push('/');
};
