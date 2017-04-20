import { expect } from '../test_helper';
import reducer from '../../src/reducers/processing';

describe('processing reducer', () => {
  let state = null;

  describe('data loading started', () => {
    it('should return loading true', () => {
      state = reducer(
        {
          processing: {},
          data: {}
        },
        { type: 'DATA_LOADING_STARTED' }
      );
      expect(state).to.eql({
        processing: {},
        loading: true,
        data: {}
      });
    });
  });
  describe('data loading error', () => {
    it('should return loading false and error', () => {
      state = reducer(
        {
          processing: {},
          loading: true
        },
        {
          type: 'DATA_LOADING_ERROR',
          payload: 'Could not load data'
        }
      );
      expect(state).to.eql({
        error: 'Could not load data',
        loading: false
      });
    });
  });

  describe('data loading success', () => {
    it('should return loading false', () => {
      state = reducer(
        {
          processing: {}
        },
        { type: 'DATA_LOADING_SUCCESS' }
      );
      expect(state).to.eql({
        processing: {},
        loading: false
      });
    });
  });
});
