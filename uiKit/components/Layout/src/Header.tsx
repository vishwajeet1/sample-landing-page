import { FunctionComponent } from "react";
import { Button } from "../../Button";
import withWindowDimensions from "uiKit/utils/withWindowDimensions";

export interface HeaderProps {
  isMobileSized?: boolean;
  isLargeSized?: boolean;
}

const headerList = [
  {
    id: 1,
    title: "Home",
    url: "/",
  },
  {
    id: 2,
    title: "Templates",
    url: "/",
  },
  {
    id: 3,
    title: "Price",
    url: "/",
  },
  {
    id: 4,
    title: "Help",
    url: "/",
  },
];

const HeaderDiv: FunctionComponent<HeaderProps> = ({ isLargeSized }) => {
  return (
    <div className="md:max-w-row 2xl:max-w-highRow mx-auto py-4 ">
      <div className="flex w-full justify-between items-center">
        <img src="/ui-kit/icon/logo.svg" className="w-24 2xl:w-w110 h-auto" />
        <div>
          <ul className="flex justify-end items-center">
            {headerList.map((data) => (
              <li
                key={data.id}
                className="px-4 text-blue-light cursor-pointer font-bold 2xl:text-font21"
              >
                <a href={data.url}>{data.title}</a>
              </li>
            ))}
            <div className="pl-4">
              <Button
                type="secondary"
                size={isLargeSized ? "large" : "medium"}
                onClick={() => {}}
              >
                Get In Touch
              </Button>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export const Header = withWindowDimensions(HeaderDiv);
