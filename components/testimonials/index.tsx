import { FunctionComponent, useEffect } from "react";
import { connect } from "react-redux";
import { testimonialAction } from "components/testimonials/redux/TestimonialActions";
import { State } from "Interface/State";
import { TestimonialSchema } from "Interface/reducerType/LandingPage";
import { FooterIconCard } from "@ui/core/Cards";
import PaginationCarousel from "components/common/PaginationCarousel";

type Props = TestimonialSchema & {
  fetchTestimonial: Function;
};

const Testimonial: FunctionComponent<Props> = ({
  fetchTestimonial,
  testimonialData,
}) => {
  useEffect(() => {
    fetchTestimonial();
  }, []);

  const getColourSchema = (id: number) => {
    if (id % 3 == 0) return "pink";
    if (id % 3 == 1) return "yellow";
    if (id % 3 == 2) return "orange";
  };

  return (
    <div className="py-8 2xl:py-14">
      <div className="text-black-base font-bold text-3xl max-w-row mx-auto py-8 2xl:text-font64 2xl:max-w-highRow">
        Testimonial
      </div>
      <div className="max-w-row 2xl:max-w-highRow mx-auto">
        <PaginationCarousel
          listOfData={testimonialData.map((data, index) => (
            <div key={data.id} className="px-4">
              <FooterIconCard
                key={data.id}
                title={data.message}
                footerTitle={data.name}
                footerDescription={data.designation}
                avatar={data.avatar}
                colourScheme={getColourSchema(index + 1)}
              />
            </div>
          ))}
        />
      </div>
    </div>
  );
};
const mapStateToProps = ({ testimonial }: State) => ({ ...testimonial });

const mapDispatchToProps = (dispatch: any) => ({
  fetchTestimonial: () => {
    dispatch(testimonialAction.fetchTestimonial());
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(Testimonial);
