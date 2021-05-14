// TODO: write your code here
import read from './reader';
import json from './parser';

export default class GameSavingLoader {
  static async load() {
    try {
      const arrayBuffer = await read();
      const result = await json(arrayBuffer);
      return result;
    } catch (err) {
      throw new Error(err);
    }
  }
}
