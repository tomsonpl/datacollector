import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as actions from '../../src/actions';
import * as TYPE from '../../src/const/types';
import nock from 'nock';
import { expect } from '../test_helper';
import expectedData from '../const';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const baseUrl = 'https://api.um.warszawa.pl';
const restOfUrl = '/api/action/wsstore_get/?id=624d7e2a-bf45-48d6-ba79-8b512e662d1c';


describe('data actions', () => {
  it('creates DATA_LOADING_SUCCESS when data loading has been done', () => {
    nock(baseUrl)
      .get(restOfUrl)
      .reply(200, expectedData);

    const expectedActions = [
      { type: TYPE.DATA_LOADING_STARTED },
      {
        type: TYPE.DATA_LOADING_SUCCESS,
        payload: expectedData
      }
    ];
    const store = mockStore(expectedData);

    return store.dispatch(actions.loadData())
      .then(() => {
        expect(store.getActions()).to.eql(expectedActions);
      });
  });
});
