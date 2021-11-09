import { AnyAction } from "redux";
import { call, put, takeLatest } from "redux-saga/effects";
import { fetchTestimonial } from "components/testimonials/redux/TestimonialApis";
import {
  LandingPageType,
  testimonialAction,
} from "components/testimonials/redux/TestimonialActions";

function* fetchTestimonialSaga(action: AnyAction): Generator<any, any, any> {
  try {
    const res = yield call(fetchTestimonial);
    if (res.success) {
      yield put(testimonialAction.fetchTestimonialSuccess(res.data));
    } else {
      yield put(testimonialAction.updateErrorMessage(res.message));
    }
  } catch (e) {
    console.error(e);
    yield put(testimonialAction.updateErrorMessage("error"));
  }
}

function* testimonialSaga() {
  yield takeLatest(LandingPageType.FETCH_TESTIMONIAL_REQ, fetchTestimonialSaga);
}

export default testimonialSaga;
