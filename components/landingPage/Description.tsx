import { FunctionComponent } from "react";
import Image from "next/image";
import withWindowDimensions from "uiKit/utils/withWindowDimensions";
interface Props {
  leftImg: string;
  bottomImg: string;
  title: string;
  description: string;
  isLargeSized?: boolean;
}

const Description: FunctionComponent<Props> = ({
  leftImg,
  bottomImg,
  title,
  description,
  isLargeSized,
}) => {
  return (
    <div>
      <div className="flex justify-between">
        <div className="w-1/3">
          <Image
            src={leftImg}
            width={isLargeSized ? 1000 : 800}
            height={isLargeSized ? 1200 : 1000}
            objectFit="contain"
          />
        </div>
        <div className="flex flex-col items-end pl-10 w-2/3">
          <div className="pl-24">
            <div className="text-black-base text-5xl 2xl:text-font64 font-bold">
              {title}
            </div>
            <div className="text-black-base pt-12 2xl:text-font28">
              {description}
            </div>
          </div>
          <div>
            <Image
              src={bottomImg}
              width={isLargeSized ? 1000 : 800}
              height={isLargeSized ? 700 : 600}
              objectFit="contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default withWindowDimensions(Description);
