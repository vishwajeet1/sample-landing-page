import { combineReducers } from "redux";
import testimonialReducer from "components/testimonials/redux/TestimonialReducer";

export const rootReducer = combineReducers({
  testimonial: testimonialReducer,
});
