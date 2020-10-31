import * as storyManager from '../storyManager';

export const storyRegister = async (payload) => {
  const token = sessionStorage.getItem('token');
  payload.token = token;

  const response = await storyManager.sendStory(payload, token);
  return response;
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
    return {
      success: false,
    };
  }
};
