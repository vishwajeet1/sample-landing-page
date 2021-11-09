export interface TestimonialDataSchema {
  id: number;
  name: string;
  designation: string;
  avatar: string;
  message: string;
}

export interface TestimonialSchema {
  testimonialData: Array<TestimonialDataSchema>;
  error: "";
  loading: boolean;
}
