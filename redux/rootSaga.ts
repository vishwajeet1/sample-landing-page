import { all } from "redux-saga/effects";
import testimonialSaga from "components/testimonials/redux/TestimonialSaga";

function* rootSaga() {
  yield all([testimonialSaga()]);
}

export default rootSaga;
