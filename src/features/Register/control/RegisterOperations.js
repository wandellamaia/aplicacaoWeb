import history from '../../../shared/history';

import * as registerManager from '../registerManager';

export const register = async (payload) => {
  // console.log('Cadastro ->', payload);

  // eslint-disable-next-line no-useless-catch
  try {
    const response = await registerManager.register(payload);
    // console.log('Deu certo? ->', response);
    history.push('/Storie');
  } catch (e) {
    throw e;
  }
};
