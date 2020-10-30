import * as storyManager from '../storyManager';
import * as utils from '../../../shared/utils/index';

export const storyRegister = async (payload) => {
  const token = sessionStorage.getItem('token');
  payload.token = token;

  const response = await storyManager.storyRegister(payload, token);
  console.log('Resposta! ->', response);
};

export const saveDocuments = async (documents) => {
  documents = documents.attachments.map((newDocument) => {
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

  const request = { id: 1, documents };

  try {
    return await storyManager.saveDocument(request);
  } catch (e) {
    return {
      success: false,
    };
  }
};
