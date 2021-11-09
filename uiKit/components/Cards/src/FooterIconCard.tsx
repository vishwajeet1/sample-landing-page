import { FunctionComponent } from "react";

export interface FooterIconCardProps {
  title: string;
  footerTitle: string;
  footerDescription: string;
  avatar: string;
  colourScheme?: "yellow" | "orange" | "pink";
}

export const FooterIconCard: FunctionComponent<FooterIconCardProps> = ({
  title,
  footerDescription,
  footerTitle,
  avatar,
  colourScheme = "yellow",
}) => {
  const getColourSchemaClass = () => {
    switch (colourScheme) {
      case "pink":
        return "bg-pink-base";
      case "orange":
        return "bg-orange-base";
      default:
        return "bg-yellow-light";
    }
  };

  return (
    <div
      className={[
        "w-full bg-opacity-20 min-h-270 flex ",
        getColourSchemaClass(),
      ].join(" ")}
    >
      <div className="flex max-w-2xl 2xl:max-w-75per justify-between flex-col items-start px-8 py-4 2xl:py-8">
        <div className="py-4 text-3xl 2xl:text-font44 font-medium">{title}</div>
        <div className="py-4">
          <div className="flex justify-center items-start">
            <img
              src={avatar}
              alt="avatar"
              className="w-12 2xl:w-16 rounded-full"
            />
            <div className="pl-4">
              <div className="font-bold text-lg 2xl:text-font30">
                {footerTitle}
              </div>
              <div className="2xl:text-font24">{footerDescription}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
