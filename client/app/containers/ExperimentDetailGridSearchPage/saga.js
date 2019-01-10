import { call, put, takeLatest } from 'redux-saga/effects';
import CookiesManager from 'utils/cookiesManager';
import ModelchimpClient from 'utils/modelchimpClient';

import request from 'utils/request';
import { LOAD_EXPERIMENT_DETAIL_GRIDSEARCH } from './constants';
import { loadExperimentGridSearchSuccessAction, loadExperimentGridSearchErrorAction } from './actions';

export function* getExperimentGridSearchData({modelId}) {
  const requestURL = `experiment-detail/${modelId}/gridsearch`;

  try {
    const gridsearchData = yield ModelchimpClient.get(requestURL);
    yield put(loadExperimentGridSearchSuccessAction(gridsearchData));
  } catch (err) {
    yield put(loadExperimentGridSearchErrorAction(err));
  }
}

export default function* experimentGridSearchData() {
  yield takeLatest(LOAD_EXPERIMENT_DETAIL_GRIDSEARCH, getExperimentGridSearchData);
}
