import { FunctionComponent } from "react";
import { TitleTextCard, TitleTextCardProps } from "@ui/core/Cards";
import Carousel from "components/common/Carousel";

interface Props {
  title: string;
  headerText: string;
  featureList: Array<TitleTextCardProps & { id: number }>;
}

const DesignConcept: FunctionComponent<Props> = ({
  title,
  headerText,
  featureList,
}) => {
  return (
    <div className="py-12 md:max-w-row 2xl:max-w-highRow mx-auto">
      <div className="text-blue-light font-medium mx-auto text-center text-2xl 2xl:text-font23 py-4">
        {headerText}
      </div>
      <div className="mx-auto text-center text-5xl font-bold py-4 2xl:text-font64 2xl:w-1/2">
        {title}
      </div>
      <div>
        <Carousel
          listOfData={featureList.map((data) => (
            <div className="py-12 px-4" key={data.id}>
              <TitleTextCard {...data} />
            </div>
          ))}
        />
      </div>
    </div>
  );
};
export default DesignConcept;
