import * as storyManager from '../storyManager';
import * as utils from '../../../shared/utils/index';

export const storyRegister = async (payload) => {
  const token = sessionStorage.getItem('token');
  payload.token = token;

  const response = await storyManager.storyRegister(payload, token);
  console.log('Resposta! ->', response);
};

export const saveDocuments = async (documents, id) => {
  const request = { id, document: [] };
  const ascyncRes = await Promise.all(
    documents.map(async (document) => {
      const fileBase64 = await utils.getBase64(document);
      const response = { fileName: document.name, file: fileBase64 };
      return response;
    })
  );
  request.document = ascyncRes;

  try {
    return await storyManager.saveDocument(request);
  } catch (e) {
    return {
      success: false,
    };
  }
};
