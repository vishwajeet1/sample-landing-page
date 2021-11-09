import { FunctionComponent } from "react";

export interface TitleTextCardProps {
  title: string;
  description: string;
  footerText: string;
}

export const TitleTextCard: FunctionComponent<TitleTextCardProps> = ({
  title,
  description,
  footerText,
}) => {
  return (
    <div className="p-4 text-black-base shadow">
      <div className="text-2xl 2xl:text-font44 font-medium py-4">{title}</div>
      <div className="py-4 2xl text-font24">{description}</div>
      <div className="text-sm opacity-20 font-bold">{footerText}</div>
    </div>
  );
};
