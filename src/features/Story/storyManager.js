import * as storyService from './storyService';

export const storyRegister = async (payload, token) => {
  await storyService.sendStory(payload, token);
};
export const saveDocument = async (request) => {
  await storyService.saveDocument(request);
};