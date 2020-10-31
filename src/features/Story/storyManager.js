import * as storyService from './storyService';

export const sendStory = async (payload, token) =>
  storyService.sendStory(payload, token);

export const saveDocument = async (request) => {
  await storyService.saveDocument(request);
};
