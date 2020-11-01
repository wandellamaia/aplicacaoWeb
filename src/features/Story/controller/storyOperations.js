import * as storyManager from '../storyManager';

export const storyRegister = async (payload) => {
  const token = sessionStorage.getItem('token');
  payload.token = token;
  // eslint-disable-next-line no-useless-catch
  try {
    const response = await storyManager.sendStory(payload, token);
    return response;
  } catch (e) {
    if (e.response.status === 500)
      return {
        message:
          'Ocorreu um erro ao registrar o relato. Por favor, tente novamente. ',
      };
    throw e;
  }
};

export const saveDocuments = async (photos) => {
  const documents = photos.documents.map((newDocument) => {
    try {
      const file = newDocument.split(',');
      const fileBase64 = file[1];
      const contentType = file[0]; // .split(':')[1].split(';')[0];

      return {
        base64: fileBase64,
        // targetFileName: newDocument.fileName,
        targetContentType: contentType,
      };
    } catch (e) {
      return null;
    }
  });
  const request = { id: photos.id, documents };

  try {
    return await storyManager.saveDocument(request);
  } catch (e) {
    if (e.response.status === 500)
      return {
        message:
          'Ocorreu um erro ao registrar o relato. Por favor, tente novamente. ',
      };
    return {
      success: false,
    };
  }
};
