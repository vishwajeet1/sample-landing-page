import axios from "axios";
import { ResponseDto } from "Interface/common/ResponseDto";
import { TestimonialDataSchema } from "Interface/reducerType/LandingPage";

export const fetchTestimonial = async (): Promise<
  ResponseDto<Array<TestimonialDataSchema>>
> => {
  try {
    const res = await axios.get(
      "/api/route?path=website-18/_functions/webpageTestimonials"
    );
    if (res.status == 200) {
      return {
        success: true,
        data: res.data,
      };
    } else {
      return {
        success: false,
        message: "unable to get response",
      };
    }
  } catch (err) {
    return {
      success: false,
      message: "Something went wrong",
    };
  }
};
