import { createStore, applyMiddleware } from "redux";
import { MakeStore, createWrapper, Context } from "next-redux-wrapper";
import createSagaMiddleware from "redux-saga";
import { rootReducer } from "redux/rootReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import rootSaga from "redux/rootSaga";

export const makeStore: MakeStore<any> = (context: Context) => {
  // 1: Create the middleware
  const sagaMiddleware = createSagaMiddleware();

  // 2: Add an extra parameter for applying middleware:
  const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(sagaMiddleware))
  );

  // 3: Run your sagas on server
  (store as any).sagaTask = sagaMiddleware.run(rootSaga);

  // 4: now return the store:
  return store;
};

// export an assembled wrapper
export const wrapper = createWrapper<any>(makeStore, { debug: false });
