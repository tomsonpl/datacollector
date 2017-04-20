import { expect } from '../test_helper';
import reducer from '../../src/reducers/processing';
import { expectedData } from '../const';

describe('data reducer', () => {
  let state = null;

  describe('data loading success', () => {
    it('should return expected data', () => {
      state = reducer({
        processing: {},
        data: expectedData
      },
        {
          type: 'DATA_LOADING_SUCCESS'
        });
      expect(state).to.eql({
        processing: {},
        loading: false,
        data: expectedData
      });
    });
  });
});
