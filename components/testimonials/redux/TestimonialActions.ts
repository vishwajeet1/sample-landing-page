import { TestimonialDataSchema } from "Interface/reducerType/LandingPage";

export const LandingPageType = {
  FETCH_TESTIMONIAL_REQ: "FETCH_TESTIMONIAL_REQ",
  FETCH_TESTIMONIAL_SUCCESS: "FETCH_TESTIMONIAL_SUCCESS",
  UPDATE_ERROR_MESSAGE: "UPDATE_ERROR_MESSAGE",
};

const fetchTestimonial = () => ({
  type: LandingPageType.FETCH_TESTIMONIAL_REQ,
});

const fetchTestimonialSuccess = (payload: TestimonialDataSchema) => ({
  type: LandingPageType.FETCH_TESTIMONIAL_SUCCESS,
  payload,
});

const updateErrorMessage = (payload: string) => ({
  type: LandingPageType.UPDATE_ERROR_MESSAGE,
  payload,
});

export const testimonialAction = {
  fetchTestimonial,
  fetchTestimonialSuccess,
  updateErrorMessage,
};
