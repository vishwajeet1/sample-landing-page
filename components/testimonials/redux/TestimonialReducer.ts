import { TestimonialSchema } from "Interface/reducerType/LandingPage";
import { AnyAction } from "redux";
import { LandingPageType } from "components/testimonials/redux/TestimonialActions";

const initialState: TestimonialSchema = {
  loading: false,
  testimonialData: [],
  error: "",
};

const reducer = (
  state: TestimonialSchema = initialState,
  action: AnyAction
) => {
  switch (action.type) {
    case LandingPageType.FETCH_TESTIMONIAL_REQ:
      return {
        ...state,
        loading: true,
      };
    case LandingPageType.FETCH_TESTIMONIAL_SUCCESS:
      return {
        ...state,
        loading: false,
        testimonialData: action.payload,
      };
    case LandingPageType.UPDATE_ERROR_MESSAGE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return { ...state };
  }
};

export default reducer;
