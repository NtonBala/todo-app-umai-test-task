// Core
import { all, call } from 'redux-saga/effects';

// Watchers
import { watchDomain } from '../bus/__DOMAIN__/saga/watchers';

export function* rootSaga () {
    yield all([
        call(watchDomain)
    ]);
}
