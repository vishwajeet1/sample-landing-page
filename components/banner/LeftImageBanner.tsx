import { FunctionComponent } from "react";
import Image from "next/image";
import { Button } from "@ui/core/Button";
import withWindowDimensions from "uiKit/utils/withWindowDimensions";

interface Props {
  img: string;
  title: string;
  tagline: string;
  ctaText: string;
  ctaAction: Function;
  isLargeSized?: boolean;
}

const LeftImageBanner: FunctionComponent<Props> = ({
  img,
  title,
  tagline,
  ctaText,
  ctaAction,
  isLargeSized,
}) => {
  return (
    <div className="pt-12">
      <div className="flex justify-between">
        <div className="w-full pr-4 pt-12">
          <div className="text-blue-light font-medium 2xl:text-font26">
            {tagline}
          </div>
          <div className="font-bold text-6xl 2xl:text-font84 py-8">{title}</div>
          <div className="pt-8">
            <Button onClick={ctaAction} size={isLargeSized ? "2xl" : "large"}>
              {ctaText}
            </Button>
          </div>
        </div>
        <div className="w-full 2xl:w-4/5">
          <Image
            src={img}
            width={isLargeSized ? 800 : 600}
            height={isLargeSized ? 800 : 600}
            objectFit="contain"
          />
        </div>
      </div>
    </div>
  );
};
export default withWindowDimensions(LeftImageBanner);
