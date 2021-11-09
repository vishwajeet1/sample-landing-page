import type { NextPage } from "next";
import Layout from "components/common/Layout";
import LeftImageBanner from "components/banner/LeftImageBanner";
import Description from "components/landingPage/Description";
import styles from "public/styles/LandingPage.module.scss";
import {
  carouselSection,
  descriptionData,
  heroData,
  valuePropData,
} from "DataMapper/landingPage";
import DesignConcept from "components/landingPage/DesignConcept";
import ValueProps from "components/landingPage/ValueProps";
import Testimonial from "components/testimonials";

const Home: NextPage = () => {
  return (
    <Layout>
      <div className="max-w-row 2xl:max-w-highRow mx-auto">
        <LeftImageBanner {...heroData} ctaAction={() => {}} />
      </div>
      <div className={styles.descriptionContainer}>
        <div className="max-w-row 2xl:max-w-highRow mx-auto">
          <Description {...descriptionData} />
        </div>
      </div>
      <div className="pb-10">
        <DesignConcept {...carouselSection} />
      </div>
      <div className="max-w-row 2xl:max-w-highRow mx-auto">
        <ValueProps {...valuePropData} />
      </div>
      <div>
        <Testimonial />
      </div>
    </Layout>
  );
};

export default Home;
